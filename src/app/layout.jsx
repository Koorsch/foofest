import "./globals.css";
import Book from '@/app/components/Book';

export const metadata = {
  title: "FooFest 2024",
  description: "The Festival that keeps going 24/7 365 days of every year!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gradient-to-b from-gray-900 to-black text-text font-sans">
        <header className="p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-b-lg shadow-lg">
          <h1 className="text-5xl font-bold">FooFest 2024</h1>
          <p className="text-lg mt-2">{metadata.description}</p>
        </header>
        <main className="p-6">
          <Book />
        </main>
        <footer className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-center rounded-t-lg shadow-lg mt-8">
          <p>© 2024 FooFest. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
