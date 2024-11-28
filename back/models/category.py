from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from database import Base


class Categoria(Base):
    __tablename__ = "categorias"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, unique=True, index=True, nullable=False)  # Nombre único
    descripcion = Column(String, nullable=True)  # Breve descripción opcional

    # Relación con productos (por ahora no la usarás)
    productos = relationship("Producto", back_populates="categoria")
