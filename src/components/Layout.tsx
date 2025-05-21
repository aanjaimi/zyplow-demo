import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Navbar />
			<main className="container mx-auto px-4 py-8 flex-grow">
				{children}
			</main>
			<footer className="bg-gray-800 text-white py-4 text-center mt-auto">
				<p>Zyplow Demo - Created by Ayoub Anjaimi</p>
			</footer>
		</div>
	);
}