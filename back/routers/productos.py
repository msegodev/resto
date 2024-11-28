from fastapi import APIRouter, Depends, HTTPException, Form, UploadFile, File
from sqlalchemy.orm import Session
from database import SessionLocal
from models.producto import Producto as ProductoModel
from models.category import Categoria as CategoriaModel
from schemas.producto import Producto, Disponibilidad
from typing import List

router = APIRouter()

# Dependencia para la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=Producto)
def create_producto(
    nombre: str = Form(...),
    descripcion: str = Form(...),
    sku: str = Form(...),
    categoria_id: int = Form(...),
    disponible_en: str = Form(...),  # Recibe un JSON en formato string (ej. '["delivery", "takeaway"]')
    precio_unico: bool = Form(True),  # Valor por defecto
    valor_precio: float = Form(...),
    tiene_descuento: bool = Form(False),  # Valor por defecto
    imagen: UploadFile = File(None),  # Imagen es opcional
    db: Session = Depends(get_db)
):
    # Validar si la categoría existe
    categoria = db.query(CategoriaModel).filter(CategoriaModel.id == categoria_id).first()
    if not categoria:
        raise HTTPException(status_code=400, detail="La categoría especificada no existe")

    # Validar y convertir el campo disponible_en desde string a lista JSON
    try:
        disponible_en_list = eval(disponible_en)  # Convierte el string en una lista
        if not isinstance(disponible_en_list, list):
            raise ValueError
        # Validar que los valores de disponible_en sean válidos según el Enum
        for valor in disponible_en_list:
            if valor not in [e.value for e in Disponibilidad]:
                raise ValueError(f"Valor '{valor}' no es válido para disponibilidad")
    except (ValueError, SyntaxError):
        raise HTTPException(status_code=400, detail="El campo 'disponible_en' debe ser una lista válida de valores de disponibilidad")

    # Guardar la imagen si fue enviada
    file_location = None
    if imagen:
        file_location = f"static/images/{imagen.filename}"
        with open(file_location, "wb") as f:
            f.write(imagen.file.read())

    # Crear el objeto Producto
    db_producto = ProductoModel(
        nombre=nombre,
        descripcion=descripcion,
        sku=sku,
        categoria_id=categoria_id,
        disponible_en=disponible_en_list,  # Asigna la lista de disponibilidad
        precio_unico=precio_unico,
        valor_precio=valor_precio,
        tiene_descuento=tiene_descuento,
        imagen=file_location  # Ruta donde se guarda la imagen si existe
    )

    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)

    return db_producto


@router.get("/{producto_id}", response_model=Producto)
def read_producto(producto_id: int, db: Session = Depends(get_db)):
    producto = db.query(ProductoModel).filter(
        ProductoModel.id == producto_id).first()
    if producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto


@router.get("/", response_model=List[Producto])
def list_productos(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    limit = min(limit, 50)  # Limitar máximo a 50
    productos = db.query(ProductoModel).offset(skip).limit(limit).all()
    return productos
