from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models.producto import Producto as ProductoModel, Categoria as CategoriaModel
from schemas.producto import ProductoCreate, Producto
from models.producto import Base
from typing import List

# Crear tablas en la base de datos si no existen
Base.metadata.create_all(bind=engine)

router = APIRouter()

# Dependencia para la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/productos/", response_model=Producto)
def create_producto(producto: ProductoCreate, db: Session = Depends(get_db)):
    db_producto = ProductoModel(**producto.dict())
    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)
    return db_producto

@router.get("/productos/{producto_id}", response_model=Producto)
def read_producto(producto_id: int, db: Session = Depends(get_db)):
    producto = db.query(ProductoModel).filter(ProductoModel.id == producto_id).first()
    if producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto

@router.get("/productos/", response_model=List[Producto])
def list_productos(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    productos = db.query(ProductoModel).offset(skip).limit(limit).all()
    return productos
