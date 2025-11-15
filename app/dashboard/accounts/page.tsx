'use client';

import Card from '@/components/Card';
import Button from '@/components/Button';
import { Instagram, Facebook, Twitter, Linkedin, CheckCircle, XCircle } from 'lucide-react';

const socialAccounts = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: '#E4405F',
    connected: true,
    username: '@yourcompany',
    lastSync: '5 minutes ago',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    color: '#1877F2',
    connected: true,
    username: 'Your Company Page',
    lastSync: '10 minutes ago',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: Twitter,
    color: '#1DA1F2',
    connected: false,
    username: null,
    lastSync: null,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    color: '#0A66C2',
    connected: false,
    username: null,
    lastSync: null,
  },
];

export default function AccountsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold mb-2">Connected Accounts</h1>
        <p className="text-gray-600">Manage your social media connections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialAccounts.map((account) => {
          const Icon = account.icon;
          return (
            <Card key={account.id}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${account.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: account.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{account.name}</h3>
                    {account.username && (
                      <p className="text-sm text-gray-600">{account.username}</p>
                    )}
                  </div>
                </div>
                {account.connected ? (
                  <CheckCircle className="w-6 h-6 text-success" />
                ) : (
                  <XCircle className="w-6 h-6 text-gray-400" />
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Status:</span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      account.connected
                        ? 'bg-success bg-opacity-10 text-success'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {account.connected ? 'Connected' : 'Not Connected'}
                  </span>
                </div>
                {account.lastSync && (
                  <p className="text-sm text-gray-600">
                    Last synced: {account.lastSync}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                {account.connected ? (
                  <>
                    <Button variant="secondary" className="flex-1">
                      Reconnect
                    </Button>
                    <Button variant="secondary" className="text-danger">
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <Button className="w-full">Connect {account.name}</Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 bg-primary bg-opacity-5 border-primary border">
        <div className="flex items-start gap-3">
          <div className="text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Need Help?</h4>
            <p className="text-sm text-gray-700">
              Having trouble connecting your accounts? Check our{' '}
              <a href="#" className="text-primary font-semibold hover:underline">
                documentation
              </a>{' '}
              or{' '}
              <a href="#" className="text-primary font-semibold hover:underline">
                contact support
              </a>
              .
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
