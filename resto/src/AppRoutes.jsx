import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PedidosPage from "./pages/Pedidos";
import DashboardPage from "./pages/Dashboard";
import PedidosFinalizadosPage from "./pages/Pedidos/finalizados";
import CategoriasPage from "./pages/Menu/categorias";
import ProductosPage from "./pages/Menu/productos";
import AdicionalesPage from "./pages/Menu/adicionales";
import ProductosAgregarPage from "./pages/Menu/productosAgregar";
import MenuPreviewPage from "./pages/MenuPreview/MenuPreviewPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta por defecto */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Redirección para rutas no definidas */}
      <Route path="*" element={<Navigate to="/dashboard" />} />

      {/* Carta */}
      <Route path="/preview" element={<MenuPreviewPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="preview" element={<MenuPreviewPage />} />{" "}
        {/* Nueva ruta */}
      </Route>

      {/* Pedidos */}
      <Route path="/pedidos" element={<MainLayout />}>
        <Route path="/pedidos/activos" element={<PedidosPage />} />
        <Route
          path="/pedidos/finalizados"
          element={<PedidosFinalizadosPage />}
        />
      </Route>

      {/* Menú */}
      <Route path="/menu" element={<MainLayout />}>
        <Route path="categorias" element={<CategoriasPage />} />
        <Route path="adicionales" element={<AdicionalesPage />} />
        <Route path="productos">
          <Route index element={<ProductosPage />} />
          <Route path="agregar" element={<ProductosAgregarPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
