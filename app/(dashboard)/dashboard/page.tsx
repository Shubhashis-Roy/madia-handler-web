"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import "./dashboard.css";
import { motion } from "framer-motion";
import {
  Calendar,
  ImageIcon,
  PlusSquare,
  Link as LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

// Mock data
const upcomingPosts = [
  {
    id: "1",
    content: "Check out our new product launch!",
    scheduledFor: "2024-01-20 14:00",
    platforms: ["instagram", "facebook"],
  },
  {
    id: "2",
    content: "Behind the scenes of our creative process",
    scheduledFor: "2024-01-21 10:00",
    platforms: ["twitter", "linkedin"],
  },
  {
    id: "3",
    content: "Weekly roundup and highlights",
    scheduledFor: "2024-01-22 16:00",
    platforms: ["instagram", "twitter"],
  },
];

const recentMedia = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
    type: "image",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
    type: "image",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400",
    type: "image",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400",
    type: "image",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400",
    type: "image",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
    type: "image",
  },
];

const platformColors = {
  instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
  facebook: "bg-blue-600",
  twitter: "bg-black",
  linkedin: "bg-blue-700",
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2 mt-20">Dashboard</h1>
        <p className="text-muted-foreground">
        {  "Welcome back! Here's what's happening."}
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link href="/media">
                <Button
                  variant="default"
                  className="gap-2"
                  data-testid="button-upload-media"
                >
                  <ImageIcon className="h-4 w-4" />
                  Upload Media
                </Button>
              </Link>
              <Link href="/create-post">
                <Button
                  variant="default"
                  className="gap-2"
                  data-testid="button-create-post"
                >
                  <PlusSquare className="h-4 w-4" />
                  Create Post
                </Button>
              </Link>
              <Link href="/accounts">
                <Button
                  variant="outline"
                  className="gap-2"
                  data-testid="button-connect-account"
                >
                  <LinkIcon className="h-4 w-4" />
                  Connect Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="p-4 rounded-lg border hover-elevate cursor-pointer"
                    data-testid={`card-upcoming-post-${post.id}`}
                  >
                    <p className="font-medium mb-2 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {post.scheduledFor}
                      </span>
                      <div className="flex gap-1">
                        {post.platforms.map((platform) => (
                          <div
                            key={platform}
                            className={`w-2 h-2 rounded-full ${
                              platformColors[
                                platform as keyof typeof platformColors
                              ]
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/scheduled">
                <Button
                  variant="ghost"
                  className="w-full mt-4"
                  data-testid="button-view-all-scheduled"
                >
                  View All Scheduled Posts
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Recent Media
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {recentMedia.map((media, index) => (
                  <motion.div
                    key={media.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg overflow-hidden hover-elevate cursor-pointer"
                    data-testid={`media-thumbnail-${media.id}`}
                  >
                    <img
                      src={media.url}
                      alt={`Media ${media.id}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <Link href="/media">
                <Button
                  variant="ghost"
                  className="w-full mt-4"
                  data-testid="button-view-all-media"
                >
                  View All Media
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
