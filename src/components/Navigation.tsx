import { NavLink } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./ui/button";
import { CreditCard, Users, BarChart3, Wallet } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <BrandLogo size="md" />
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <CreditCard className="w-4 h-4" />
              Overview
            </NavLink>
            
            <NavLink
              to="/merchant"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <Users className="w-4 h-4" />
              Merchant Portal
            </NavLink>
            
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <Wallet className="w-4 h-4" />
              Checkout Demo
            </NavLink>
            
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`
              }
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </NavLink>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-brand-gradient hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};