from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, Enum, JSON
from sqlalchemy.orm import relationship
from database import Base
from enum import Enum as PyEnum

# Enum para disponibilidad
class Disponibilidad(PyEnum):
    DELIVERY = "delivery"
    SALON = "salon"
    TAKEAWAY = "takeaway"

class Producto(Base):
    __tablename__ = "productos"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    descripcion = Column(String)
    sku = Column(String, unique=True, index=True)
    categoria_id = Column(Integer, ForeignKey("categorias.id"))
    disponible_en = Column(JSON)  # Almacenar disponibilidad como una lista en formato JSON
    precio_unico = Column(Boolean, default=True)  # Indicar si es precio único o múltiple
    valor_precio = Column(Float)
    tiene_descuento = Column(Boolean, default=False)
    imagen = Column(String)  # URL de la imagen

    categoria = relationship("Categoria", back_populates="productos")
