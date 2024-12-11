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
    sku: str = Form(None),
    categoria_id: int = Form(...),
    # Recibe valores separados por comas (ej. 'delivery,salon')
    disponible_en: str = Form(...),
    precio_unico: bool = Form(True),  # Valor por defecto
    valor_precio: float = Form(...),
    tiene_descuento: bool = Form(False),  # Valor por defecto
    imagen: UploadFile = File(None),  # Imagen es opcional
    db: Session = Depends(get_db),
):
    # Validar si la categoría existe
    categoria = db.query(CategoriaModel).filter(
        CategoriaModel.id == categoria_id).first()
    if not categoria:
        raise HTTPException(
            status_code=400, detail="La categoría especificada no existe"
        )

    # Convertir el string disponible_en a una lista y validar
    disponible_en_list = disponible_en.split(",")
    for valor in disponible_en_list:
        if valor not in [item.value for item in Disponibilidad]:
            raise HTTPException(
                status_code=400,
                detail=f"Valor '{valor}' no es válido para disponibilidad. Valores permitidos: {
                    ', '.join([item.value for item in Disponibilidad])}",
            )

     # Manejo del SKU opcional
    sku = None if not sku or sku.strip() == "" else sku.strip()

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
        imagen=file_location,  # Ruta donde se guarda la imagen si existe
    )

    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)

    return db_producto


@router.get("/menu", response_model=List[dict])
def get_menu_completo(db: Session = Depends(get_db)):
    """
    Devuelve todas las categorías con sus productos en formato de menú.
    """
    # Consultar todas las categorías
    categorias = db.query(CategoriaModel).all()

    # Construir la respuesta en el formato deseado
    menu = []
    for categoria in categorias:
        # Obtener los productos de esta categoría
        productos = db.query(ProductoModel).filter(
            ProductoModel.categoria_id == categoria.id).all()

        # Formatear los productos en la estructura requerida
        items = [
            {
                "id": str(producto.id),
                "nombre": producto.nombre,
                "descripcion": producto.descripcion,
                "valor_precio": producto.valor_precio,
            }
            for producto in productos
        ]

        # Agregar la categoría al menú solo si tiene productos
        if items:
            menu.append({
                # Suponiendo que CategoriaModel tiene un campo 'nombre'
                "categoria": categoria.nombre,
                "items": items,
            })

    return menu


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


@router.get("/categoria/{categoria_id}", response_model=List[Producto])
def list_productos_por_categoria(
    categoria_id: int,
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    """
    Lista productos pertenecientes a una categoría específica.
    """
    limit = min(limit, 50)  # Limitar máximo a 50 productos
    productos = (
        db.query(ProductoModel)
        .filter(ProductoModel.categoria_id == categoria_id)
        .offset(skip)
        .limit(limit)
        .all()
    )
    return productos
