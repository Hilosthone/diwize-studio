import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  // ADD THIS LINE: It ensures all image paths become absolute
  metadataBase: new URL('https://diwize-studio.netlify.app'),

  title: 'Diwize Studio | Premium Graphics Design',
  description: 'Strategic visual storytelling and brand identity design.',
  icons: {
    icon: '/avartar01.jpg',
    apple: '/avartar01.jpg',
  },
  openGraph: {
    title: 'Diwize Studio',
    description: 'Elevating brands through strategic design.',
    url: 'https://diwize-studio.netlify.app/',
    siteName: 'Diwize Studio',
    images: [
      {
        url: '/avartar01.jpg', // Next.js will now prefix this with your URL
        width: 1200, // Standard OG width
        height: 630, // Standard OG height for better display
        alt: 'Diwize Studio Avatar',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diwize Studio',
    description: 'Strategic visual storytelling and brand identity design.',
    images: ['/avartar01.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <ClientLayout>{children}</ClientLayout>
    </html>
  )
}