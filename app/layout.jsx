import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";




export const metadata = {
  title: "Agronet",
  description: "Agronet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
