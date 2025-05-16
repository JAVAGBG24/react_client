import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <div className="app">
            <TopBar />
            <Header />
            <main className="main-content">
              <Routes>
                {/* public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SingleProduct />} />

                {/* protected routes for all authenticated users */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />} />
                </Route>

                {/* protected routes for admins only */}
                <Route element={<ProtectedRoute requiredRoles={["ADMIN"]} />}>
                  <Route path="/admin" element={<AdminDashboard />} />
                </Route>
              </Routes>
            </main>
          </div>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
