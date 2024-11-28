from pydantic import BaseModel
from typing import List, Optional
from enum import Enum

# Enum para disponibilidad (Pydantic)
class Disponibilidad(str, Enum):
    DELIVERY = "delivery"
    SALON = "salon"
    TAKEAWAY = "takeaway"

class ProductoBase(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    sku: str
    disponible_en: List[Disponibilidad]
    precio_unico: bool
    valor_precio: float
    tiene_descuento: bool
    imagen: Optional[str] = None
    categoria_id: int

class ProductoCreate(ProductoBase):
    pass

class Producto(ProductoBase):
    id: int

    class Config:
        from_attributes = True
