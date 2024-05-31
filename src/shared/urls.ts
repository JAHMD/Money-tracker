export const URLS = {
	home: {
		href: "/",
		title: "Home",
	},
	dailyExpenses: {
		href: "/daily-expenses",
		title: "Daily Expenses",
	},
};

export const headerNavLinks: (keyof typeof URLS)[] = ["home", "dailyExpenses"];
