import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Link as LinkIcon,
  BarChart,
  Settings,
  Users,
  Menu,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Plus,
  Tag,
  Image,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar({ isOpen, closeSidebar }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <BarChart size={20} /> },
    { name: "My Links", href: `/my-links/${user?.user_id}`, icon: <LinkIcon size={20} /> },
    { name: "Tags", href: "/tags", icon: <Tag size={20} /> },
    { name: "Logos", href: "/logos", icon: <Image size={20} /> },
    ...(user?.role_id === 1
      ? [
          {
            name: "Analytics",
            href: "/analytics",
            icon: <BarChart size={20} />,
          },
          {
            name: "Pre-Generate",
            href: "/pre-generate",
            icon: <Plus size={20} />,
          },
        ]
      : []),
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${collapsed ? "sidebar-collapsed" : ""} ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-16 flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <Link href="/dashboard" className="text-xl font-bold text-primary">
              ShortlyURL
            </Link>
          )}

          <button
            onClick={toggleCollapse}
            className="p-2 rounded-md hover:bg-muted transition-colors ml-auto"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  collapsed ? "justify-center" : "space-x-3"
                } px-3 py-3 rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground hover:bg-muted"
                  }`}
              >
                <span>{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
