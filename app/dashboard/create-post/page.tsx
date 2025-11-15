'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Instagram, Facebook, Twitter, Linkedin, Image as ImageIcon, Smile } from 'lucide-react';
import dynamic from 'next/dynamic';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: '#E4405F' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: '#1877F2' },
  { id: 'twitter', name: 'Twitter', icon: Twitter, color: '#1DA1F2' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
];

export default function CreatePostPage() {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [postNow, setPostNow] = useState(true);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId) ? prev.filter(p => p !== platformId) : [...prev, platformId]
    );
  };

  const handleSubmit = () => {
    console.log({
      content,
      platforms: selectedPlatforms,
      postNow,
      scheduleDate,
      scheduleTime
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold mb-2">Create Post</h1>
        <p className="text-gray-600">Compose and schedule your social media post</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold mb-4">Write Content</h3>
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={1000}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[200px] resize-y"
                placeholder="What would you like to share?"
              />
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Smile className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-sm text-gray-500">{content.length}/1000</span>
              </div>
              {showEmojiPicker && (
                <div className="absolute top-full left-0 mt-2 z-10">
                  <EmojiPicker onEmojiClick={(emoji) => setContent(content + emoji.emoji)} />
                </div>
              )}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Attach Media</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary cursor-pointer transition-colors">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600">Click to upload or select from library</p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Select Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <button
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                      isSelected
                        ? 'border-primary bg-primary bg-opacity-5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-6 h-6" style={{ color: platform.color }} />
                    <span className="font-medium">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Schedule Options</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="schedule"
                  checked={postNow}
                  onChange={() => setPostNow(true)}
                  className="w-4 h-4 text-primary"
                />
                <span className="font-medium">Post Now</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="schedule"
                  checked={!postNow}
                  onChange={() => setPostNow(false)}
                  className="w-4 h-4 text-primary"
                />
                <span className="font-medium">Schedule for Later</span>
              </label>
              {!postNow && (
                <div className="ml-7 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input
                      type="date"
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <input
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Button onClick={handleSubmit} className="w-full">
            {postNow ? 'Publish Now' : 'Schedule Post'}
          </Button>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="space-y-4">
              {selectedPlatforms.includes('instagram') && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram className="w-5 h-5" style={{ color: '#E4405F' }} />
                    <span className="font-semibold text-sm">Instagram</span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{content || 'Your content will appear here...'}</p>
                </div>
              )}
              {selectedPlatforms.includes('facebook') && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Facebook className="w-5 h-5" style={{ color: '#1877F2' }} />
                    <span className="font-semibold text-sm">Facebook</span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{content || 'Your content will appear here...'}</p>
                </div>
              )}
              {selectedPlatforms.includes('twitter') && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Twitter className="w-5 h-5" style={{ color: '#1DA1F2' }} />
                    <span className="font-semibold text-sm">Twitter</span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{content || 'Your content will appear here...'}</p>
                </div>
              )}
              {selectedPlatforms.includes('linkedin') && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Linkedin className="w-5 h-5" style={{ color: '#0A66C2' }} />
                    <span className="font-semibold text-sm">LinkedIn</span>
                  </div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{content || 'Your content will appear here...'}</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
