
import ConfigureProvider from "@/context/ConfigureProvider";
import CustomProductProvider from "@/context/CustomProductProvider";
import ImageSizeProvider from "@/context/imageSizeProvider";
import SessionProvider from "@/context/SessionProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Sen } from 'next/font/google';
import "./globals.css";

const ss = Sen({
  subsets: ['latin'],
  variable: '--ss',
  weight:['400','500','600','800']
})

export const metadata: Metadata = {
  title: "Snap Skin",
  description: "Generated by Panchami hehe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ss.className} scroll-smooth antialiased min-h-screen w-full box-border`}
      >
        
        <ThemeProvider  attribute="class"  defaultTheme="light">
            <SessionProvider>
              
                <ConfigureProvider>
                  <CustomProductProvider>
                    <ImageSizeProvider>
                      {children}
                    </ImageSizeProvider>
                    
                  </CustomProductProvider>
                </ConfigureProvider>
               
              
            </SessionProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
