import "./globals.css";




export const metadata = {
  title: "Agronet",
  description: "Agrontet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
