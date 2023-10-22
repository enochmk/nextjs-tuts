import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './context/AuthProvider';
import Navbar from './components/Navbar';

type RootLayoutProps = {
	children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NextAuth Tutorial',
	description: 'Learn NextAuth.js By Enoch Klufio',
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<Navbar />
					<main className='flex justify-center items-start p-6 min-h-screen'>
						{children}
					</main>
				</AuthProvider>
			</body>
		</html>
	);
}
