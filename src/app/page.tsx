import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: "Home page",
};

export default function Home() {
	return (
		<main className="container py-20">
			<h1 className="text-2xl font-bold">Welcome to money tracker website</h1>
		</main>
	);
}
