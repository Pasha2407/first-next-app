import "./globals.css";

export const metadata = {
  title: "Next App",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
