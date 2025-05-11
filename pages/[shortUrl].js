import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ShortUrlRedirect() {
  const router = useRouter();
  const { shortUrl } = router.query;

  useEffect(() => {
    const redirectToUrl = async () => {
      if (!shortUrl) return;

      try {
        // Redirect to the API endpoint that handles the redirect
        window.location.href = `/api/urls/redirect/${shortUrl}`;
      } catch (error) {
        console.error('Error redirecting:', error);
      }
    };

    redirectToUrl();
  }, [shortUrl]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Redirecting...</p>
        </div>
      </div>
    </>
  );
} 