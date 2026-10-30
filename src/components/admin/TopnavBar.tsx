import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

type AdminTopbarProps = {
  username?: string;
  isSidebarOpen: boolean;
  onMenuClick: () => void;
};

const AdminTopbar = ({
  username = "Pheeky",
  isSidebarOpen,
  onMenuClick,
}: AdminTopbarProps) => {
  const getProfileInitials = (name: string) => {
    if (!name) return "";
    const cleanName = name.trim().replace(/\s+/g, "");
    if (cleanName.length === 1) return cleanName.toUpperCase();
    return (cleanName[0] + cleanName[cleanName.length - 1]).toUpperCase();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-[#e3ddd8] bg-white shadow-sm">
      <div className="flex h-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-dark transition hover:bg-[#FEF1E8] lg:hidden"
            aria-label={
              isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link
            to="/admin/overview"
            className="font-serif text-lg font-semibold text-dark"
          >
            Pheeky Hairplace{" "}
            <span className="font-sans text-sm font-medium text-hover">
              Admin
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm text-[#6b6258] sm:gap-4">
          <Link to="/" className="hidden transition-colors hover:text-hover sm:block">
            View storefront
          </Link>

          <div
            aria-label={username}
            title={username}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-dark"
          >
            {getProfileInitials(username)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
