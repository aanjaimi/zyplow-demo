'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Navbar() {
	const pathname = usePathname();
	
	return (
		<nav className="bg-blue-600 text-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="text-xl font-bold">
						Zyplow Demo
					</Link>
					
					<Tabs defaultValue={pathname} className="w-auto text-black">
						<TabsList className="bg-blue-700">
							<TabsTrigger value="/" asChild>
								<Link href="/">
									Home
								</Link>
							</TabsTrigger>
							<TabsTrigger value="/users" asChild>
								<Link href="/users">
									Users (SSR + Redis)
								</Link>
							</TabsTrigger>
							<TabsTrigger value="/posts" asChild>
								<Link href="/posts">
									Posts (CSR)
								</Link>
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</div>
		</nav>
	);
}