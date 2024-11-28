from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models.category import Categoria as CategoriaModel
from schemas.category import Categoria, CategoriaCreate

router = APIRouter()

# Dependencia de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Crear una nueva categoría
@router.post("/", response_model=Categoria)
def create_categoria(categoria: CategoriaCreate, db: Session = Depends(get_db)):
    # Validar que el nombre no exista
    db_categoria = db.query(CategoriaModel).filter(CategoriaModel.nombre == categoria.nombre).first()
    if db_categoria:
        raise HTTPException(status_code=400, detail="La categoría ya existe")
    nueva_categoria = CategoriaModel(**categoria.dict())
    db.add(nueva_categoria)
    db.commit()
    db.refresh(nueva_categoria)
    return nueva_categoria

# Obtener una categoría por ID
@router.get("/{categoria_id}", response_model=Categoria)
def read_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(CategoriaModel).filter(CategoriaModel.id == categoria_id).first()
    if categoria is None:
        raise HTTPException(status_code=404, detail="Categoría no encontrada")
    return categoria

# Listar todas las categorías
@router.get("/", response_model=list[Categoria])
def list_categorias(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    limit = min(limit, 50)  # Limitar máximo a 50
    categorias = db.query(CategoriaModel).offset(skip).limit(limit).all()
    return categorias

@router.delete("/{categoria_id}", response_model=dict)
def delete_categoria(categoria_id: int, db: Session = Depends(get_db)):
    categoria = db.query(CategoriaModel).filter(CategoriaModel.id == categoria_id).first()
    if categoria is None:
        raise HTTPException(status_code=404, detail="Categoría no encontrada")
    
    db.delete(categoria)
    db.commit()
    return {"message": f"Categoría '{categoria.nombre}' eliminada correctamente"}

