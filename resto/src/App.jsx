import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@fontsource/inter";
import MainLayout from "./components/layout/MainLayout";
import PedidosPage from "./pages/Pedidos";
import DashboardPage from "./pages/Dashboard"; // Página principal bajo /dashboard
import PedidosFinalizadosPage from "./pages/Pedidos/finalizados";
import CategoriasPage from "./pages/Menu/categorias";
import ProductosPage from "./pages/Menu/productos";
import AdicionalesPage from "./pages/Menu/adicionales";
import ProductosAgregarPage from "./pages/Menu/productosAgregar";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* Ruta por defecto que redirige a /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          {/* Si se accede a una ruta no definida, redirigir a /dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" />} />

          {/* Ruta principal del layout */}
          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>

          <Route path="/pedidos" element={<MainLayout />}>
            <Route path="/pedidos/activos" element={<PedidosPage />} />
            <Route
              path="/pedidos/finalizados"
              element={<PedidosFinalizadosPage />}
            />
          </Route>

          <Route path="/menu" element={<MainLayout />}>
            <Route path="categorias" element={<CategoriasPage />} />
            <Route path="adicionales" element={<AdicionalesPage />} />
            <Route path="productos">
              <Route index element={<ProductosPage />} />
              <Route path="agregar" element={<ProductosAgregarPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
