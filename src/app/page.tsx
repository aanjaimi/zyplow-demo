import Layout from '@/components/Layout';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Zyplow Demo - Redis Caching with Next.js
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About This Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This application demonstrates the power of Redis caching with Next.js.
              It showcases both server-side rendering (SSR) and client-side rendering (CSR)
              techniques while leveraging Redis for performance optimization.
            </p>
            <p>
              Explore the different pages to see how caching impacts load times and overall
              application performance.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">Server-Side Rendering with Redis</CardTitle>
              <CardDescription>
                Optimized loading with server-side caching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Users page demonstrates server-side rendering with Redis caching.
                Data is fetched on the server and cached for improved performance.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/users">
                <Button>View Users</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">Client-Side Rendering</CardTitle>
              <CardDescription>
                Traditional client-side data fetching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The Posts page shows client-side rendering, where data is fetched
                directly in the browser. This demonstrates the difference between
                caching strategies.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/posts">
                <Button>View Posts</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
}