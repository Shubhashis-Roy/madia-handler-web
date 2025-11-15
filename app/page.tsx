import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Calendar, Image, Eye, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-gradient-to-br from-primary to-purple-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Manage & Schedule Your Media Effortlessly
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Simple social media management for creators & brands
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/auth/register">
              <Button variant="secondary" className="text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button className="text-lg bg-white bg-opacity-20 hover:bg-opacity-30 text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule Posts</h3>
              <p className="text-gray-600">Plan and schedule your content across multiple platforms</p>
            </Card>
            <Card className="text-center">
              <Image className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manage Media</h3>
              <p className="text-gray-600">Organize and store all your media in one place</p>
            </Card>
            <Card className="text-center">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Preview Feeds</h3>
              <p className="text-gray-600">See how your posts will look before publishing</p>
            </Card>
            <Card className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Work together with your team seamlessly</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-2">Upload Media</h3>
              <p className="text-gray-600">Upload your photos and videos to the media library</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-2">Select Platforms</h3>
              <p className="text-gray-600">Choose which social media platforms to post to</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-2">Schedule Post</h3>
              <p className="text-gray-600">Set your posting time and let us handle the rest</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
