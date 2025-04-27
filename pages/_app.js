import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}