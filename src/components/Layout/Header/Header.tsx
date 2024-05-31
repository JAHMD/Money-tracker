import NavLinks from "@/components/NavLinks";
import { URLS } from "@/shared/urls";
import Link from "next/link";

export default function Header() {
	return (
		<header className="border-b h-fit border-white/5 backdrop-blur-md sticky top-0 z-50">
			<nav className="p-6 flex justify-between flex-wrap items-center container">
				<Link href={URLS.home.href} className="font-bold text-xl" title="Home">
					Money Tracker
				</Link>
				<NavLinks />
			</nav>
		</header>
	);
}
