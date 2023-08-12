import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/App.css';
import '@/styles/About.css';
import '@/styles/Contact.css';
import '@/styles/Header.css';
import '@/styles/Portfolio.css';
import { CursorProvider } from '@/contexts/CursorContext';
import { LoadingProvider } from '@/contexts/LoadingContext';
import { ExpandCircleProvider } from '@/contexts/ExpandCircleContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <CursorProvider>
        <ExpandCircleProvider>
          <Component {...pageProps} />
        </ExpandCircleProvider>
      </CursorProvider>
    </LoadingProvider>
  );
}
