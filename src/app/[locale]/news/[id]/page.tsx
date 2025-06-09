import { notFound } from 'next/navigation';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

// Mock database
const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
    content: 'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы...',
    date: 'Jan 16, 2025',
    image: '/imgs/gaz.png',
  },
  {
    id: '2',
    title: 'Новости о новых технологиях в энергетике',
    content: 'Новые технологии в энергетике позволяют снизить затраты и улучшить экологию...',
    date: 'Jan 17, 2025',
    image: '/imgs/gaz.png',
  },
  {
    id: '3',
    title: 'Энергетические компании внедряют инновации',
    content: 'Энергетические компании активно внедряют инновации для повышения эффективности...',
    date: 'Jan 18, 2025',
    image: '/imgs/gaz.png',
  },
];

// Function to fetch a news item by ID
async function getNewsItem(id: any): Promise<NewsItem | null> {
  if (!id) return null;
  return newsItems.find((item) => item.id === id) || null;
}

// Generate static paths for dynamic routes (SSG)
export function generateStaticParams(): any {
  return newsItems.map((news) => ({
    locale: 'en', // Ensure locales are included if needed
    id: news.id,
  }));
}

// Fix: Use `any` for params to bypass TypeScript errors
interface PageProps {
  params: any;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id, locale } = params;

  // Set the request locale to enable static rendering
  setRequestLocale(locale);

  if (!id) {
    return notFound();
  }

  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <div className="p-8 mt-12 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-[#0F1E3D]">{newsItem.title}</h1>
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        width={800}
        height={450}
        className="rounded-lg mb-6"
        priority
      />
      <p className="text-lg text-gray-700 mb-6">{newsItem.content}</p>
      <p className="text-md text-gray-500">Published on: {newsItem.date}</p>
    </div>
  );
}