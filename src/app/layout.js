import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ThemeProvider from "@/components/ThemeProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Zouhair Machmacha Portfolio",
  description: "Welcome to Zouhair Machmacha's portfolio website showcasing services in domain consulting and web development.",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
        {children}
        <Footer/>
          </ThemeProvider>
        
        <script
  src="https://kit.fontawesome.com/4e7c4eb171.js"
  crossorigin="anonymous"
></script>
      </body>
    </html>
  );
}
