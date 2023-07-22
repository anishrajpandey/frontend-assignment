"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <Head>
        <title>Online Store</title>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>

        <Footer />
      </body>
    </html>
  );
}
