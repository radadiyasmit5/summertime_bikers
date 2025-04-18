import { SectionScrollContext } from '@/components/context/SectionScrollContext'
import icon from '../favicon2.ico'
import { Analytics } from "@vercel/analytics/react"
import StickyGformbtn from '@/components/buttons/StickyGformbtn'

export const metadata = {
  title: 'Summertime Bikers | Motorcycle Training in Nova Scotia',
  description: 'Premier motorcycle training school in Nova Scotia. Get your motorcycle license with professional instructors. Comprehensive courses for both beginners and advanced riders.',
  icons: [{ rel: 'icon', url: icon.src }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Summertime Bikers | Motorcycle Training in Nova Scotia',
    description: 'Premier motorcycle training school in Nova Scotia. Get your motorcycle license with professional instructors. Comprehensive courses for both beginners and advanced riders.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Summertime Bikers',
  },
  keywords: 'motorcycle training, Nova Scotia, motorcycle license, riding school, motorcycle courses, rider education, motorcycle safety, Halifax motorcycle training',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://summertimebikers.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("requested");
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <script src="https://kit.fontawesome.com/bfe3889fa9.js" crossOrigin="anonymous" defer></script>
      </head>
      <body>
        <SectionScrollContext>
          {children}
          <StickyGformbtn />
        </SectionScrollContext>
        <Analytics />
      </body>
    </html>
  )
}
