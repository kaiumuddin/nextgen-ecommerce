import './globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextGen Electronics: Elevate with Every Click',
  description: `At NextGen Electronics, we're immersed in the development of an innovative e-commerce project, with a mission to curate a diverse range of electronic products designed to elevate your digital lifestyle. We're your one-stop destination for cutting-edge mobile devices, laptops, desktop accessories, and networking peripherals.

  Our commitment to excellence is embedded in our technology stack. With React, Next.js, TypeScript, Prisma, and MongoDB as our foundation, we're crafting a secure, lightning-fast platform. For your peace of mind, we're implementing NextAuth, ensuring that your online shopping experience is as secure as it is seamless.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
