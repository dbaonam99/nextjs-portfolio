import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/App.css';
import '@/styles/Home.css';
import '@/styles/About.css';
import '@/styles/Contact.css';
import '@/styles/Header.css';
import '@/styles/LoadingPage.css';
import '@/styles/Portfolio.css';
import { CursorProvider } from '@/contexts/CursorContext';
import { LoadingProvider } from '@/contexts/Loading';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </LoadingProvider>
  );
}
