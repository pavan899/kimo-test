import './globals.css'
// import { Inter, IBM_Plex_Mono } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] });
// const baseFont = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>KIMO - Assignment</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['IBM_Plex_Mono']">{children}</body>
    </html>
  )
}
