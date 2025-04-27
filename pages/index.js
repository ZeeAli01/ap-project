import Head from 'next/head';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>ShortlyURL - Professional URL Shortener</title>
        <meta name="description" content="Shorten, share, and track your links with ease using ShortlyURL, the professional URL shortening service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}