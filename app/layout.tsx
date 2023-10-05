import './global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
}

/**
 * This code defines a functional component named `RootLayout` that serves as the root layout for the application.
 * It takes a single prop `children` of type `React.ReactNode`, which represents the content to be rendered within the layout.
 *
 * @param children - The content to be rendered within the layout.
 * @returns The root layout structure with the provided children.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </html>
  );
}
