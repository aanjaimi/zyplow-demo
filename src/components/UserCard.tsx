import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
	website: string;
	company: {
	name: string;
	};
}

interface UserCardProps {
	user: User;
}

export default function UserCard({ user }: UserCardProps) {
	// Get initials for avatar
	const initials = user.name
	.split(' ')
	.map(name => name[0])
	.join('')
	.toUpperCase()
	.substring(0, 2);

	return (
	<Card className="hover:shadow-lg transition">
		<CardHeader className="flex flex-row items-center gap-4">
		<Avatar className="h-12 w-12 bg-blue-100 text-blue-700">
			<AvatarFallback>{initials}</AvatarFallback>
		</Avatar>
		<div>
			<CardTitle className="text-xl text-blue-700">{user.name}</CardTitle>
			<CardDescription>@{user.email.split('@')[0]}</CardDescription>
		</div>
		</CardHeader>
		<CardContent className="space-y-2">
		<div className="flex items-center gap-2">
			<span className="font-medium">Email:</span> 
			<span className="text-gray-600">{user.email}</span>
		</div>
		<div className="flex items-center gap-2">
			<span className="font-medium">Phone:</span> 
			<span className="text-gray-600">{user.phone}</span>
		</div>
		<div className="flex items-center gap-2">
			<span className="font-medium">Website:</span> 
			<span className="text-gray-600">{user.website}</span>
		</div>
		<div className="flex items-center gap-2">
			<span className="font-medium">Company:</span> 
			<Badge variant="outline" className="font-normal">
			{user.company.name}
			</Badge>
		</div>
		</CardContent>
		<CardFooter>
		<Button variant="outline" className="w-full">View Profile</Button>
		</CardFooter>
	</Card>
	);
}