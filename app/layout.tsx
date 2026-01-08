import { Metadata } from 'next'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'Diwize Studio | Premium Graphics Design',
  description: 'Strategic visual storytelling and brand identity design.',
  // This makes your avatar show up in the browser tab
  icons: {
    icon: '/avartar01.jpg',
    apple: '/avartar01.jpg',
  },
  // This makes your avatar show up when pasting the link on Social Media
  openGraph: {
    title: 'Diwize Studio',
    description: 'Elevating brands through strategic design.',
    url: 'https://yourdomain.com',
    images: [
      {
        url: '/avartar01.jpg',
        width: 800,
        height: 800,
        alt: 'Diwize Studio Avatar',
      },
    ],
    type: 'website',
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