import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}