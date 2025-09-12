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
  title: "Yogesh Rane | Portfolio",
  description:
    "Portfolio of Yogesh Rane – Backend Developer & Aspiring Data Engineer. Explore projects, skills, and my journey in tech.",
  keywords: [
    "Yogesh Rane",
    "Portfolio",
    "Backend Developer",
    "Data Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js"
  ],
  authors: [{ name: "Yogesh Rane", url: "https://portfolio-yogu.vercel.app/" }],
  icons: {
    icon: "/favicon.ico", // place favicon.ico inside /public
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
