import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

interface PostCardProps {
	post: Post;
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Card className="hover:shadow-lg transition">
			<CardHeader>
				<CardTitle className="text-xl text-blue-700">{post.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-gray-600">{post.body}</p>
			</CardContent>
			<CardFooter className="flex justify-between items-center">
				<div className="flex gap-2">
					<Badge variant="outline">Post #{post.id}</Badge>
					<Badge variant="secondary">User #{post.userId}</Badge>
				</div>
				<Button size="sm" variant="outline">Read More</Button>
			</CardFooter>
		</Card>
	);
}