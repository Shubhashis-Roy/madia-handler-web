"use client";

import Link from "next/link";
import "./navbar.css";
import { ThemeToggle } from "@/app/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link href="/" className="nav-logo">
          {/* <img src="/logo.svg" alt="Logo" className="nav-logo-img" /> */}
          <span>MediaManager</span>
        </Link>
        

        <div className="nav-right">
          <ThemeToggle />
          <Link href="/login">
            <button className="nav-login-btn">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
