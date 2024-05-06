import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-200">
			<h1>Not found – 404!</h1>
			<div className="rounded bg-white px-9 py-14 shadow">
				<h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
				<p className="mt-6 text-sm font-light">Error Code: 404</p>
				<Link href="/">Go back to Home</Link>
			</div>
		</div>
	);
}
