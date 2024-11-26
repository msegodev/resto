from fastapi import FastAPI
from routers import menu, productos

app = FastAPI()

# Incluir routers para módulos
app.include_router(menu.router, prefix="/menu", tags=["menu"])
app.include_router(productos.router, prefix="/productos", tags=["productos"])

# Puntos de inicio básicos
@app.get("/")
def read_root():
    return {"Hello": "Restaurant Management System"}
