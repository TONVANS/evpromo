'use client' // This directive is necessary for client-side components in Next.js 13+

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

// No longer importing local images directly as modules.
// Instead, we will use string paths for the 'src' prop in Next/Image.

// Define the type for EV news articles
interface EVNewsArticle {
  id: string;
  title: string;
  description: string;
  // imageUrl is now a string path to the image in the public folder
  imageUrl: string;
  date: string;
  source: string;
  link: string;
}

// Mock data for EV news articles
// In a real application, this data would be fetched from an API
const mockEVNewsData: EVNewsArticle[] = [
  {
    id: '1',
    title: 'New EV Model Unveiled with Record Range',
    description: 'A leading EV manufacturer has just revealed its latest model, boasting an impressive 500-mile range on a single charge, setting a new industry benchmark.',
    imageUrl: '/images/ev-news/ev-car-launch.jpg', // Use string path
    date: 'July 15, 2025',
    source: 'Electrek',
    link: 'https://example.com/ev-news-1'
  },
  {
    id: '2',
    title: 'Government Announces New EV Charging Incentives',
    description: 'To accelerate EV adoption, the government is rolling out new tax credits and grants for installing home and public charging stations nationwide.',
    imageUrl: '/images/ev-news/charging-station.jpg', // Use string path
    date: 'July 18, 2025',
    source: 'Reuters',
    link: 'https://example.com/ev-news-2'
  },
  {
    id: '3',
    title: 'Battery Breakthrough Promises Faster Charging',
    description: 'Researchers have announced a significant advancement in battery technology, which could drastically reduce EV charging times to under 10 minutes.',
    imageUrl: '/images/ev-news/battery-tech.jpg', // Use string path
    date: 'July 20, 2025',
    source: 'TechCrunch',
    link: 'https://example.com/ev-news-3'
  },
  {
    id: '4',
    title: 'EV Sales Soar in Q2, Outpacing Projections',
    description: 'The latest market reports indicate a robust increase in electric vehicle sales during the second quarter, exceeding initial industry forecasts.',
    imageUrl: '/images/ev-news/ev-sales.jpg', // Use string path
    date: 'July 10, 2025',
    source: 'Bloomberg',
    link: 'https://example.com/ev-news-4'
  },
  {
    id: '5',
    title: 'Autonomous EV Taxis Launching in Major Cities',
    description: 'A new fleet of self-driving electric taxis is set to begin operations in several metropolitan areas, promising a new era of urban transportation.',
    imageUrl: '/images/ev-news/autonomous-taxi.jpg', // Use string path
    date: 'July 12, 2025',
    source: 'The Verge',
    link: 'https://example.com/ev-news-5'
  }
];

// Skeleton component for loading state
const EVNewsSkeleton = () => (
  <div className='pt-10 pb-28 px-10 bg-white rounded-2xl shadow-lg relative overflow-hidden animate-pulse'>
    <div className='w-full h-48 bg-gray-300 rounded-md mb-6'></div> {/* Image placeholder */}
    <div className='h-6 bg-gray-300 rounded w-3/4 mb-4'></div> {/* Title placeholder */}
    <div className='h-4 bg-gray-300 rounded w-full mb-2'></div> {/* Description line 1 */}
    <div className='h-4 bg-gray-300 rounded w-5/6 mb-4'></div> {/* Description line 2 */}
    <div className='h-4 bg-gray-300 rounded w-1/2'></div> {/* Date/Source placeholder */}
    <div className='mt-6 h-10 bg-blue-300 rounded-full w-2/5'></div> {/* Button placeholder */}
  </div>
);

const EVNews = () => {
  const [news, setNews] = useState<EVNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllNews, setShowAllNews] = useState(false); // State to control showing all news

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API fetch with a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setNews(mockEVNewsData); // Use the mock data
      } catch (error) {
        console.error('Error fetching EV news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const initialDisplayCount = 3; // Number of news articles to display initially

  // Determine which news articles to display based on showAllNews state
  const displayedNews = showAllNews ? news : news.slice(0, initialDisplayCount);

  return (
    <section id='EVnews' className='bg-header relative py-20 font-inter'> {/* Added font-inter class */}
      <div className='container mx-auto px-4'>
        <h2 className='text-midnight_text text-center sm:leading-14 leading-12'>Latest EV News</h2>

        <p className='text-lg font-normal text-center text-gray-600 pt-5 max-w-2xl mx-auto mb-16'>
          Stay updated with the newest advancements, policies, and trends in the electric vehicle industry.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
          {loading
            ? Array.from({ length: initialDisplayCount }).map((_, i) => <EVNewsSkeleton key={i} />) // Show 3 skeletons
            : displayedNews.map((article) => (
                <div
                  className='pt-6 pb-8 px-6 bg-white rounded-2xl shadow-lg relative hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col'
                  key={article.id}>
                  {/* Individual news article cover image */}
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                    <Image
                      src={article.imageUrl} // Source is now a string path
                      alt={article.title}
                      layout="fill" // Image fills the parent div
                      objectFit="cover" // Covers the area, maintaining aspect ratio
                      className='rounded-md w-full' // Added w-full as requested
                      // For string paths, onError can be useful as a fallback if the file is truly missing
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error'; }}
                      // Removed width={600} and height={400} as they conflict with layout="fill"
                    />
                  </div>

                  <h3 className='mb-3 text-2xl font-semibold text-gray-800 leading-tight'>
                    {article.title}
                  </h3>
                  <p className='text-base font-normal text-gray-700 mb-4 flex-grow'>
                    {article.description}
                  </p>

                  <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
                    <Icon icon='tabler:calendar' className='text-lg' />
                    <span>{article.date}</span>
                    <span className="mx-2">|</span>
                    <Icon icon='tabler:news' className='text-lg' />
                    <span>{article.source}</span>
                  </div>

                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-auto text-lg font-medium text-blue-600 hover:text-blue-800 flex items-center gap-2 self-start'>
                    Read More
                    <Icon icon='tabler:arrow-right' className='text-2xl' />
                  </Link>
                </div>
              ))}
        </div>

        {/* "See More" button */}
        {/* Display button only if: not loading, more news than initial count, and not already showing all news */}
        {!loading && news.length > initialDisplayCount && !showAllNews && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllNews(true)}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              See More News
              <Icon icon='tabler:arrow-right' className='ml-2 text-xl' />
            </button>
          </div>
        )}
        {/* Optional: "Show Less" button if you want to revert to showing only initial count */}
        {/* {!loading && showAllNews && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllNews(false)}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
            >
              Show Less
              <Icon icon='tabler:arrow-up' className='ml-2 text-xl' />
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default EVNews;