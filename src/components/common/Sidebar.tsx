import { LayoutDashboard, Wallet, Plane, LogOut, UserRound } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../styles/sidebar.css";

export function Sidebar() {
  const logoUrl = `${import.meta.env.BASE_URL}logo-ico.png?v=20260602`;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={logoUrl} alt="Trippi" className="sidebar__logo-img" />
      </div>

      <nav className="sidebar__nav">
        <MenuItem icon={<LayoutDashboard />} label="Dashboard" to="/dashboard" end />
        <MenuItem
          icon={<Plane />}
          label="Viagens"
          to="/trips"
          isActive={pathname.startsWith("/trips") || pathname.startsWith("/trip/")}
        />
        <MenuItem icon={<Wallet />} label="Financeiro" to="/finance" />
        <MenuItem icon={<UserRound />} label="Perfil" to="/profile" />
      </nav>

      <div className="sidebar__logout">
        <button
          type="button"
          className="menu-item menu-item--logout"
          onClick={() => navigate("/")}
        >
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  to?: string;
  end?: boolean;
  isActive?: boolean;
}

function MenuItem({ icon, label, to, end, isActive }: MenuItemProps) {
  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        className={({ isActive: navLinkIsActive }) =>
          `menu-item${isActive || navLinkIsActive ? " is-active" : ""}`
        }
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    );
  }

  return (
    <div className="menu-item">
      {icon}
      <span>{label}</span>
    </div>
  );
}
