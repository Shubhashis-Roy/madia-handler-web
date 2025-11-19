"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./login.css";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ ADD THIS

export default function Login() {
  const { toast } = useToast();
  const router = useRouter(); // ✅ INIT ROUTER

  const [email, setEmail] = useState("demo@email.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const validateEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return toast({
        title: "Missing Information",
        description: "Email and password are required.",
        variant: "destructive",
      });
    }

    if (!validateEmail(email)) {
      return toast({
        title: "Invalid Email",
        description: "Enter a valid email.",
        variant: "destructive",
      });
    }

    if (password.length < 6) {
      return toast({
        title: "Weak Password",
        description: "Min 6 characters required.",
        variant: "destructive",
      });
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast({
        title: "Login Successful 🎉",
        description: "Redirecting...",
      });

      router.push("/dashboard"); // ✅ REDIRECT
    }, 1200);
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="login-card"
      >
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-sub">Login to continue managing your media.</p>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="default"
            className="w-full mt-2 py-3 text-base font-medium"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </Button>
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link href="/register" className="signup-link">
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
