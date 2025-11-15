'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Calendar as CalendarIcon, List, Instagram, Facebook, Twitter, Linkedin, Edit, Trash2 } from 'lucide-react';
import Calendar from 'react-calendar';

const scheduledPosts = [
  {
    id: 1,
    content: 'Check out our new product launch! Amazing features coming your way.',
    platform: 'instagram',
    platformName: 'Instagram',
    date: '2025-11-16',
    time: '10:00 AM',
    status: 'scheduled',
    thumbnail: 'https://via.placeholder.com/100x100/6A5ACD/FFFFFF?text=Post'
  },
  {
    id: 2,
    content: 'Behind the scenes of our latest marketing campaign. See how we do it!',
    platform: 'facebook',
    platformName: 'Facebook',
    date: '2025-11-16',
    time: '2:00 PM',
    status: 'scheduled',
    thumbnail: 'https://via.placeholder.com/100x100/FF6B81/FFFFFF?text=Post'
  },
  {
    id: 3,
    content: 'Industry insights you need to know in 2025. Thread below.',
    platform: 'twitter',
    platformName: 'Twitter',
    date: '2025-11-17',
    time: '9:00 AM',
    status: 'scheduled',
    thumbnail: 'https://via.placeholder.com/100x100/3BB54A/FFFFFF?text=Post'
  },
  {
    id: 4,
    content: 'Excited to announce our Q4 results and future roadmap.',
    platform: 'linkedin',
    platformName: 'LinkedIn',
    date: '2025-11-18',
    time: '11:00 AM',
    status: 'published',
    thumbnail: 'https://via.placeholder.com/100x100/FFD93D/FFFFFF?text=Post'
  },
];

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

const platformColors = {
  instagram: '#E4405F',
  facebook: '#1877F2',
  twitter: '#1DA1F2',
  linkedin: '#0A66C2',
};

export default function ScheduledPostsPage() {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredPosts = scheduledPosts.filter(post => {
    if (filterPlatform !== 'all' && post.platform !== filterPlatform) return false;
    if (filterStatus !== 'all' && post.status !== filterStatus) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold mb-2">Scheduled Posts</h1>
        <p className="text-gray-600">Manage your scheduled and published posts</p>
      </div>

      <Card className="mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant={view === 'list' ? 'primary' : 'secondary'}
              onClick={() => setView('list')}
              className="flex items-center gap-2"
            >
              <List className="w-4 h-4" />
              List View
            </Button>
            <Button
              variant={view === 'calendar' ? 'primary' : 'secondary'}
              onClick={() => setView('calendar')}
              className="flex items-center gap-2"
            >
              <CalendarIcon className="w-4 h-4" />
              Calendar View
            </Button>
          </div>
          <div className="flex gap-3">
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
      </Card>

      {view === 'list' ? (
        <div className="space-y-4">
          {filteredPosts.map((post) => {
            const Icon = platformIcons[post.platform as keyof typeof platformIcons];
            return (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <img
                    src={post.thumbnail}
                    alt="Post thumbnail"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        className="w-5 h-5"
                        style={{ color: platformColors[post.platform as keyof typeof platformColors] }}
                      />
                      <span className="font-semibold text-sm">{post.platformName}</span>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          post.status === 'scheduled'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                    <p className="text-gray-800 mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="secondary" className="flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button variant="secondary" className="flex items-center gap-2 text-danger">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <div className="calendar-container">
            <Calendar
              onChange={(value) => setSelectedDate(value as Date)}
              value={selectedDate}
              className="border-0"
            />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">
              Posts on {selectedDate.toLocaleDateString()}
            </h3>
            <p className="text-gray-600 text-sm">No posts scheduled for this date</p>
          </div>
        </Card>
      )}
    </div>
  );
}
