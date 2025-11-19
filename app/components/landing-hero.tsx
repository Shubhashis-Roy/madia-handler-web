"use client";

import "../landing.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import { Calendar, ImageIcon, Eye, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Schedule Posts",
    description:
      "Plan and schedule your content across multiple platforms with ease",
  },
  {
    icon: ImageIcon,
    title: "Manage Media",
    description: "Organize and reuse your media library efficiently",
  },
  {
    icon: Eye,
    title: "Preview Feeds",
    description: "See how your posts will look before publishing",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team seamlessly",
  },
];

const steps = [
  {
    number: "1",
    title: "Upload Media",
    description: "Add your images and videos to the media library",
  },
  {
    number: "2",
    title: "Select Platforms",
    description: "Choose which social networks to post to",
  },
  {
    number: "3",
    title: "Schedule Post",
    description: "Set the perfect time for your content to go live",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Manage & Schedule Your Media
            <br />
            <span className="hero-title">Effortlessly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto"
          >
            Simple social media management for creators & brands
          </motion.p>

          {/* Updated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {/* Demo View */}
            <Link href="/dashboard">
              <button className="btn-primary">Demo View</button>
            </Link>

            {/* Login Button (correct link) */}
            <Link href="/login">
              <button className="btn-outline">Login test</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" style={{ background: "var(--muted-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Everything you need to manage your social media presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <Card className="feature-card">
                  <CardContent className="p-0">
                    <div className="feature-icon">
                      <feature.icon
                        className="h-7 w-7"
                        color="var(--primary)"
                      />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="step-circle">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8 pt-8 border-t">
          <p>&copy; 2024 Media Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
