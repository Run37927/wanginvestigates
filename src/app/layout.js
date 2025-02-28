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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qgr6eaa0hc");
            `
          }}
        />
      </head>
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
