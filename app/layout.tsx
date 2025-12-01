import Static from "@/components/static";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Sebastian Inman" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href="/fonts/BebasNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Static />
        <div className="sticky top-0 min-h-dvh h-full w-1/6 lg:w-64 flex flex-row z-0">
            <div className="flex-1 bg-[#fcb622]" />
            <div className="flex-1 bg-[#ff642c]" />
            <div className="flex-1 bg-[#ed212f]" />
            <div className="flex-1 bg-[#bd2140]" />
            <div className="flex-1 bg-[#692153]" />
          </div>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
