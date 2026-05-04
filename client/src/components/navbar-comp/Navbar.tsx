import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Link2,
  PlusCircle,
  BarChart3,
  Home,
  PocketKnife,
  LogOut,
} from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/create-new-link", label: "New Link", icon: PlusCircle },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/logout", label: "Logout", icon: LogOut },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <Link2 className="h-5 w-5" />
          <span className="hidden sm:inline">url-trimmer</span>
          <PocketKnife className="h-5 w-5" />
        </Link>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={isActive(item.path) ? "default" : "ghost"}
              className="gap-2"
            >
              <Link to={item.path}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Smartphone view */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] pt-10">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="justify-start gap-3"
                >
                  <Link to={item.path}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
