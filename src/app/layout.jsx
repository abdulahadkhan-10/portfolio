import { Geist, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import ChatbotWidget from "../components/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "Abdul Ahad Khan | Portfolio",
  description:
    "Portfolio of Abdul Ahad Khan – Backend Developer & Aspiring Data Engineer. Explore projects, skills, and my journey in tech.",
  keywords: [
    "Abdul Ahad Khan",
    "Portfolio",
    "Backend Developer",
    "Data Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
  ],
  authors: [{ name: "Abdul Ahad Khan", url: "https://portfolio-yogu.vercel.app/" }],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} antialiased`}>
        {children}
        <footer>
          <ChatbotWidget />
        </footer>
      </body>
    </html>
  );
}
