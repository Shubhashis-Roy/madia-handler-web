'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Upload, Filter, ArrowUpDown, Trash2, Eye } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const mediaItems = [
  { id: 1, type: 'image', url: 'https://via.placeholder.com/400x400/6A5ACD/FFFFFF?text=Photo+1', size: '2.4 MB', date: '2025-11-10' },
  { id: 2, type: 'image', url: 'https://via.placeholder.com/400x400/FF6B81/FFFFFF?text=Photo+2', size: '1.8 MB', date: '2025-11-09' },
  { id: 3, type: 'video', url: 'https://via.placeholder.com/400x400/3BB54A/FFFFFF?text=Video+1', size: '15.2 MB', date: '2025-11-08' },
  { id: 4, type: 'image', url: 'https://via.placeholder.com/400x400/FFD93D/FFFFFF?text=Photo+3', size: '3.1 MB', date: '2025-11-07' },
  { id: 5, type: 'image', url: 'https://via.placeholder.com/400x400/6A5ACD/FFFFFF?text=Photo+4', size: '2.9 MB', date: '2025-11-06' },
  { id: 6, type: 'video', url: 'https://via.placeholder.com/400x400/FF6B81/FFFFFF?text=Video+2', size: '22.5 MB', date: '2025-11-05' },
];

export default function MediaLibraryPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [previewItem, setPreviewItem] = useState<any>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi']
    },
    onDrop: (files) => {
      console.log('Uploaded files:', files);
    }
  });

  const toggleSelect = (id: number) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold mb-2">Media Library</h1>
        <p className="text-gray-600">Upload, store and manage your media files</p>
      </div>

      <Card className="mb-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-primary bg-primary bg-opacity-5' : 'border-gray-300 hover:border-primary'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">
            {isDragActive ? 'Drop files here' : 'Upload Media'}
          </p>
          <p className="text-gray-600 text-sm">Drag and drop or click to browse</p>
        </div>
      </Card>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <Button variant="secondary" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" />
            Sort By
          </Button>
        </div>
        {selected.length > 0 && (
          <Button variant="secondary" className="flex items-center gap-2 text-danger">
            <Trash2 className="w-4 h-4" />
            Delete ({selected.length})
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <Card key={item.id} className="relative group">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3">
              <img src={item.url} alt={`Media ${item.id}`} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <input
                type="checkbox"
                checked={selected.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
                className="w-4 h-4 text-primary"
              />
              <span className="text-gray-600">{item.size}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all rounded-lg flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
              <button
                onClick={() => setPreviewItem(item)}
                className="p-2 bg-white rounded-lg hover:bg-gray-100"
              >
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-lg hover:bg-gray-100">
                <Trash2 className="w-5 h-5 text-danger" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {previewItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setPreviewItem(null)}>
          <div className="max-w-4xl w-full bg-white rounded-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Media Preview</h3>
            </div>
            <img src={previewItem.url} alt="Preview" className="w-full rounded-lg mb-4" />
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Type: {previewItem.type}</span>
              <span>Size: {previewItem.size}</span>
              <span>Date: {previewItem.date}</span>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={() => setPreviewItem(null)}>Close</Button>
              <Button variant="secondary" className="text-danger">Delete</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
