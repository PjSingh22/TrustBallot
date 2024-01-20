import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "California TrustBallot",
  description: "California TrustBallot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav-bar">California TrustBallot</nav>
        <Providers>{children}</Providers>
        </body>
    </html>
  );
}
