
export default function Loading() {
	return (
		<div className="fixed inset-0 bg-gray-50/80 backdrop-blur-sm flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center max-w-md w-full">
				<div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-700 mb-4"></div>
				<h2 className="text-xl font-semibold text-blue-700 mb-2">Loading Page...</h2>
				<p className="text-gray-600 text-center">
					Please wait while we prepare the content for you.
				</p>
			</div>
		</div>
	);
}