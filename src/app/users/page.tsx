import { getUsers } from '@/lib/api';
import Layout from '@/components/Layout';
import UserCard from '@/components/UserCard';
import PerformanceMetrics from '@/components/PerformanceMetrics';
import { Alert, AlertDescription } from "@/components/ui/alert";

export default async function UsersPage() {
	const startTime = performance.now();
	const { data: users, source, time } = await getUsers(true);
	const serverTime = performance.now() - startTime;

	return (
		<Layout>
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold text-blue-700">
						Users (Server-Side Rendering with Redis)
					</h1>
					<div className="w-80">
						<PerformanceMetrics 
							source={source} 
							time={time} 
							serverTime={serverTime} 
						/>
					</div>
				</div>

				<Alert className="mb-6">
					<AlertDescription>
						This page uses <strong>Server-Side Rendering (SSR)</strong> with Redis caching.
						Data is fetched on the server and cached for subsequent requests.
						Refresh the page to see how caching affects load times!
					</AlertDescription>
				</Alert>
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{users.map((user: any) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</div>
		</Layout>
	);
}