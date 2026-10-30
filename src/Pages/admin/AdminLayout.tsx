import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "../../components/admin/SideNavebar";
import AdminTopbar from "../../components/admin/TopnavBar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isSidebarOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSidebarOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isSidebarOpen]);

  return (
    <div className="admin-dashboard min-h-screen bg-light font-serif text-dark">
      <AdminTopbar
        isSidebarOpen={isSidebarOpen}
        onMenuClick={() => setIsSidebarOpen((open) => !open)}
      />
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:ml-64 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
