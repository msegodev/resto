from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from routers import menu, productos, category
from database import engine
from models.producto import Base


app = FastAPI()

# Montar la carpeta 'static/images' en '/images'
app.mount("/images", StaticFiles(directory="static/images"), name="images")

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    # Permite todos los orígenes, puedes restringirlo a tus dominios específicos
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos HTTP
    allow_headers=["*"],  # Permite todos los encabezados
)

Base.metadata.create_all(bind=engine)


# Incluir routers para módulos
app.include_router(menu.router, prefix="/menu", tags=["menu"])
app.include_router(productos.router, prefix="/productos", tags=["productos"])
app.include_router(category.router, prefix="/categorias", tags=["categorias"])

# Puntos de inicio básicos


@app.get("/")
def read_root():
    return {"Hello": "Restaurant Management System"}
