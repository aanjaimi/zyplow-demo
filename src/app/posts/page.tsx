"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import { Alert, AlertDescription } from "@/components/ui/alert";
import axios from 'axios';

export default function PostsPage() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [loadTime, setLoadTime] = useState(0);

	useEffect(() => {
		async function fetchPosts() {
			try {
				setLoading(true);
				const startTime = performance.now();
				
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
				
				const endTime = performance.now();
				setLoadTime(endTime - startTime);
				setPosts(response.data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchPosts();
	}, []);

	return (
		<Layout>
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-700">
						Posts (Client-Side Rendering)
					</h1>
					<div className="w-80">
						<PerformanceMetrics 
							source="API" 
							time={loadTime} 
						/>
					</div>
				</div>

				<Alert className="mb-6">
					<AlertDescription>
						This page uses <strong>Client-Side Rendering (CSR)</strong> without Redis caching.
						Data is fetched directly in the browser. This approach is simpler but typically
						slower than server-side rendering with caching for data-heavy applications.
					</AlertDescription>
				</Alert>
				
				{loading ? (
					<div className="flex justify-center items-center h-64">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{posts.slice(0, 10).map((post) => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</div>
		</Layout>
	);
}