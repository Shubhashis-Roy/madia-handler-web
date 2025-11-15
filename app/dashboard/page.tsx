'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import { PlusCircle, Image as ImageIcon, Link as LinkIcon, Calendar } from 'lucide-react';
import Link from 'next/link';

const upcomingPosts = [
  { id: 1, content: 'Check out our new product launch!', platform: 'Instagram', time: '2h' },
  { id: 2, content: 'Behind the scenes of our latest campaign', platform: 'Facebook', time: '4h' },
  { id: 3, content: 'Industry insights you need to know', platform: 'LinkedIn', time: '6h' },
  { id: 4, content: 'Quick tips for social media success', platform: 'Twitter', time: '8h' },
  { id: 5, content: 'Weekend vibes with our team', platform: 'Instagram', time: '10h' },
];

const recentMedia = [
  { id: 1, url: 'https://via.placeholder.com/300x300/6A5ACD/FFFFFF?text=Image+1' },
  { id: 2, url: 'https://via.placeholder.com/300x300/FF6B81/FFFFFF?text=Image+2' },
  { id: 3, url: 'https://via.placeholder.com/300x300/3BB54A/FFFFFF?text=Image+3' },
  { id: 4, url: 'https://via.placeholder.com/300x300/FFD93D/FFFFFF?text=Image+4' },
  { id: 5, url: 'https://via.placeholder.com/300x300/6A5ACD/FFFFFF?text=Image+5' },
  { id: 6, url: 'https://via.placeholder.com/300x300/FF6B81/FFFFFF?text=Image+6' },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here is your overview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-4">Upcoming Posts</h3>
          <div className="space-y-3">
            {upcomingPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 pb-3 last:border-0">
                <p className="text-sm text-gray-800 mb-1">{post.content}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-primary font-medium">{post.platform}</span>
                  <span className="text-gray-500">in {post.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Media</h3>
            <Link href="/dashboard/media">
              <Button variant="text" className="text-sm">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {recentMedia.map((media) => (
              <div key={media.id} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img src={media.url} alt={`Media ${media.id}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/dashboard/media">
            <button className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-colors">
              <ImageIcon className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Add Media</div>
                <div className="text-sm text-gray-600">Upload new files</div>
              </div>
            </button>
          </Link>
          <Link href="/dashboard/create-post">
            <button className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-colors">
              <PlusCircle className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Create Post</div>
                <div className="text-sm text-gray-600">Draft a new post</div>
              </div>
            </button>
          </Link>
          <Link href="/dashboard/accounts">
            <button className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-colors">
              <LinkIcon className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Connect Account</div>
                <div className="text-sm text-gray-600">Link social media</div>
              </div>
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
