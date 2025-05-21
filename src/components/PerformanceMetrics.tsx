import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PerformanceMetricsProps {
	source: string;
	time: number;
	serverTime?: number;
}

export default function PerformanceMetrics({ source, time, serverTime }: PerformanceMetricsProps) {
	const apiTimeProgress = Math.min(100, (time / 500) * 100);
	const serverTimeProgress = serverTime ? Math.min(100, (serverTime / 100) * 100) : 0;
	
	const isCached = source === 'CACHE';
	
	return (
		<Alert className="bg-blue-50 border-blue-200">
			<AlertTitle className="text-blue-700 flex items-center gap-2">
				Performance Metrics
				<Badge variant={isCached ? "default" : "outline"} className={isCached ? "bg-green-600" : ""}>
					{source}
				</Badge>
			</AlertTitle>
			<AlertDescription className="space-y-2">
				<div className="flex justify-between items-center text-sm mt-2">
					<span className="font-medium">API Time:</span>
					<span>{time.toFixed(2)}ms</span>
				</div>
				<Progress value={apiTimeProgress} className="h-1.5" />
				
				{serverTime && (
					<>
						<div className="flex justify-between items-center text-sm">
							<span className="font-medium">Server Time:</span>
							<span>{serverTime.toFixed(2)}ms</span>
						</div>
						<Progress value={serverTimeProgress} className="h-1.5" />
					</>
				)}
			</AlertDescription>
		</Alert>
	);
}