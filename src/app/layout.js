import { Mulish, Nunito, Bebas_Neue } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Providers from '@/components/Providers';
import { cn, constructMetadata } from '@/lib/utils';
import NextTopLoader from 'nextjs-toploader';

// To add more fonts, go to https://fonts.google.com/variablefonts
const mulish = Mulish({
  subsets: ['latin'],
  variable: "--font-sans",
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: "--font-heading",
})

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  variable: "--font-display",
  weight: ["400"],
})

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={cn('min-h-screen font-sans antialiased', mulish.variable, nunito.variable, bebas_neue.variable)}>
        <NextTopLoader color="#dc2625" showSpinner={false} />
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
