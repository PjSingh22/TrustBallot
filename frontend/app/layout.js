import { Inter } from "next/font/google";
import "./globals.css";
// import { Providers } from './providers'
import { UserProvider } from "../context";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "California TrustBallot",
  description: "California TrustBallot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <UserProvider>
          <body className={inter.className}>
            <div className="container">
              <NavBar />
              <ChakraProvider>{children}</ChakraProvider>
            </div>
          </body>
        </UserProvider>
    </html>
  );
}
