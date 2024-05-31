"use client";

import { cn } from "@/lib/utils";
import { URLS, headerNavLinks } from "@/shared/urls";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<ul className="flex gap-4 items-center text-muted-foreground">
			{headerNavLinks.map((link) => {
				const activeLink = URLS[link].href === pathname;

				return (
					<li key={link}>
						<Link
							href={URLS[link].href}
							className={cn(
								"hover:text-white transition-colors",
								activeLink && "text-white"
							)}
							title={URLS[link].title}
						>
							{URLS[link].title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
