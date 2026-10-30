import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Service from "./Pages/Service";
import Ourwork from "./Pages/Ourwork";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./auth/Login";
import WigCollections from "./Pages/WigCollections";

// Admin pages
import AdminLayout from "./Pages/admin/AdminLayout";
import Orders from "./Pages/admin/Orders";
import Overview from "./Pages/admin/Overview";
import Performance from "./Pages/admin/Performance";
import Products from "./Pages/admin/Products";
import Settings from "./Pages/admin/Settings";
import Appointments from "./Pages/admin/Appointments";
import Wigs from "./Pages/admin/Wigs";
import AdminServices from "./Pages/admin/Services";
import Reviews from "./Pages/admin/Reviews";
import Payments from "./Pages/admin/Payments";

import Notifications from "./Pages/admin/Notifications";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/services" element={<Service />} />
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wigcollections" element={<WigCollections />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="wigs" element={<Wigs />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="payments" element={<Payments />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="products" element={<Products />} />
        <Route path="performance" element={<Performance />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path=":section"
          element={<Navigate to="/admin/overview" replace />}
        />
      </Route>
    </Routes>
  );
}

export default App;
