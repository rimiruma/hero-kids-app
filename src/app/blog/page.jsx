'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/* ================= BLOG DATA ================= */
const posts = [
  {
    id: 1,
    title: 'Summer Adventures',
    excerpt:
      'Fun and safe outdoor activities for kids to enjoy summer holidays.',
    date: 'July 15, 2025',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Healthy Snacks',
    excerpt:
      'Simple and healthy snacks to keep kids energetic all day.',
    date: 'June 28, 2025',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Creative Crafts',
    excerpt:
      'Easy DIY craft ideas using recycled materials.',
    date: 'May 10, 2025',
    image:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Bedtime Stories',
    excerpt:
      'Why reading before sleep is important for kids.',
    date: 'April 22, 2025',
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Outdoor Play Ideas',
    excerpt:
      'Healthy outdoor play ideas for growing kids.',
    date: 'March 18, 2025',
    image:
      'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Lunch Box Tips',
    excerpt:
      'Smart lunch box ideas for school kids.',
    date: 'March 2, 2025',
    image:
      'https://i.ibb.co.com/5h9FPLxh/Lunch-Box-Tips.jpg',
  },
  {
    id: 7,
    title: 'Paper Craft Fun',
    excerpt:
      'Easy paper crafts to boost creativity.',
    date: 'Feb 14, 2025',
    image:
      'https://i.ibb.co.com/7tLRRL91/Buffalo-Wings30.jpg',
  },
  {
    id: 8,
    title: 'Reading Habit',
    excerpt:
      'Build a strong reading habit in children.',
    date: 'Jan 30, 2025',
    image:
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
  },
];

/* ================= SKELETON ================= */
const SkeletonCard = () => (
  <div className="animate-pulse rounded-xl overflow-hidden bg-base-200">
    <div className="h-44 bg-base-300"></div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-base-300 rounded w-3/4"></div>
      <div className="h-3 bg-base-300 rounded w-full"></div>
      <div className="h-8 bg-base-300 rounded w-28"></div>
    </div>
  </div>
);

/* ================= PAGE ================= */
export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center mb-10 text-primary">
          Hero Kids Blog
        </h1>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full rounded-full px-6"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : filteredPosts.slice(0, 8).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl overflow-hidden bg-base-100 shadow-md hover:shadow-xl transition"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <h2 className="text-lg font-semibold mt-1 mb-2 text-secondary">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link href={`/blog/${post.id}`}>
                      <button className="btn btn-primary w-full font-medium text-sm">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
}
