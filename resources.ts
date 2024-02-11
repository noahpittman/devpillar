import {
	LucideIcon,
	Image,
	Monitor,
	FileSearchIcon,
	Hammer,
	FileJsonIcon,
	Paintbrush,
	Camera,
	Smartphone,
	Code,
	KeyRound,
	Presentation,
	LayoutDashboard,
	Server,
	Bot,
	Database,
	BookOpenCheck,
	ShoppingBasket,
	PaintRoller,
	CaseSensitive,
	Laptop,
	Mail,
} from "lucide-react";

export interface Resource {
	name: string;
	description: string;
	category: (
		| "Boilerplate"
		| "CSS"
		| "Components"
		| "Documentation"
		| "Backgrounds"
		| "Images"
		| "Video"
		| "UI UX"
		| "Hooks"
		| "Authentication"
		| "Animations"
		| "CMS"
		| "API"
		| "AI"
		| "Database"
		| "Practice"
		| "SAAS"
		| "Design"
		| "Fonts"
		| "VSCode"
		| "Email"
	)[];
	url: string;
	paid: "Free" | "Paid" | "Free Plan Available";
	keywords?: string[];
	image: string;
}

export interface Category {
	name: string;
	icon: LucideIcon;
}

export const categories: Category[] = [
	{ icon: FileJsonIcon, name: "Boilerplate" },

	{ icon: Paintbrush, name: "CSS" },
	{ icon: Hammer, name: "Components" },
	{ icon: FileSearchIcon, name: "Documentation" },
	{ icon: Monitor, name: "Backgrounds" },
	{ icon: Image, name: "Images" },
	{ icon: Camera, name: "Video" },
	{ icon: Smartphone, name: "UI UX" },
	{ icon: Code, name: "Hooks" },
	{ icon: KeyRound, name: "Authentication" },
	{ icon: Presentation, name: "Animations" },
	{ icon: LayoutDashboard, name: "CMS" },
	{ icon: Server, name: "API" },
	{ icon: Bot, name: "AI" },
	{ icon: Database, name: "Database" },
	{ icon: BookOpenCheck, name: "Practice" },
	{ icon: ShoppingBasket, name: "SAAS" },
	{ icon: PaintRoller, name: "Design" },
	{ icon: CaseSensitive, name: "Fonts" },
	{ icon: Laptop, name: "VSCode" },
	{ icon: Mail, name: "Email" },
].sort((a, b) => {
	return a.name.localeCompare(b.name);
});

export const resources: Resource[] = [
	{
		name: "ShipFast",
		description: "A Next.js boilerplate for building SaaS applications",
		category: ["Boilerplate", "SAAS"],
		url: "https://shipfa.st/",
		paid: "Paid",
		keywords: ["next.js", "boilerplate", "sAAs"],
		image: "/resources/shipfast.jpg",
	},
	{
		name: "LogoFast",
		description: "Create your own logo in seconds for free.",
		category: ["Images"],
		url: "https://logofa.st/",
		paid: "Free",
		keywords: ["logo", "design", "images"],
		image: "/resources/logofast.jpg",
	},
	{
		name: "Precedent",
		description:
			"A Next.js starter template with framer motion and reusable hooks/components",
		category: ["Boilerplate", "Components", "Hooks"],
		url: "https://precedent.dev",
		paid: "Free",
		keywords: ["next.js", "boilerplate", "framer motion", "hooks"],
		image: "/resources/precedent.jpg",
	},
	{
		name: "useHooks",
		description: "Collection of React hooks curated by the community",
		category: ["Documentation", "Hooks"],
		url: "https://usehooks.com",
		paid: "Free",
		keywords: ["react", "hooks", "documentation"],
		image: "/resources/usehooks.jpg",
	},
	{
		name: "shadcn-ui",
		description:
			"A collection of UI components for React. Built with Tailwind CSS",
		category: ["Components", "UI UX", "CSS"],
		url: "https://ui.shadcn.com",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
		image: "/resources/shadcnui.jpg",
	},
	{
		name: "shadcn-ui Theme Generator",
		description: "A theme generator for shadcn-ui",
		category: ["UI UX", "CSS", "Components"],
		url: "https://zippystarter.com/tools/shadcn-ui-theme-generator",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "theme", "generator"],
		image: "/resources/shadcnthemes.jpg",
	},
	{
		name: "Ibelick UI",
		description: "A unique collection of modern UI components and effects",
		category: ["Components", "UI UX", "CSS"],
		url: "https://ui.ibelick.com",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
		image: "/resources/ibelickui.jpg",
	},
	{
		name: "Ibelick LAB",
		description: "A collection of experimental UI components and effects",
		category: ["Components", "CSS"],
		url: "https://www.julienthibeaut.xyz/lab",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "experimental"],
		image: "/resources/ibelicklab.jpg",
	},
	{
		name: "Ibelick Backgrounds",
		description:
			"A collection of modern and unique backgrounds for your website",
		category: ["Images", "UI UX", "CSS", "Backgrounds"],
		url: "https://bg.ibelick.com",
		paid: "Free",
		keywords: ["backgrounds", "images", "ui", "css", "web"],
		image: "/resources/ibelickbg.jpg",
	},
	{
		name: "Ibelick Buttons",
		description: "A collection of modern and unique buttons for your website",
		category: ["UI UX", "CSS", "Components"],
		url: "https://buttons.ibelick.com",
		paid: "Free",
		keywords: ["buttons", "ui", "css", "web"],
		image: "/resources/ibelickbuttons.jpg",
	},
	{
		name: "Ibelick Animations",
		description:
			"A curated collection of animations crafted exclusively with Tailwind CSS",
		category: ["Animations", "CSS", "UI UX"],
		url: "https://animation.ibelick.com",
		paid: "Free",
		keywords: ["animations", "css", "tailwind", "ui"],
		image: "/resources/ibelickanimations.jpg",
	},
	{
		name: "CSS Background Generator",
		description:
			"Beautiful pure CSS background patterns that you can actually use in your projects!",
		category: ["CSS", "UI UX", "Images", "Backgrounds"],
		url: "https://www.magicpattern.design/tools/css-backgrounds",
		paid: "Free",
		keywords: ["css", "background", "patterns", "images"],
		image: "/resources/cssbackgrounds.jpg",
	},
	{
		name: "MagicPattern",
		description: "10+ tools for designers and developers",
		category: ["Images", "UI UX", "CSS", "Backgrounds", "Design"],
		url: "https://www.magicpattern.design",
		paid: "Paid",
		keywords: [],
		image: "/resources/magicpattern.jpg",
	},
	{
		name: "UploadThing",
		description: "A simple file uploader for your web app",
		category: ["API", "CMS", "Images", "Video"],
		url: "https://uploadthing.com",
		paid: "Free Plan Available",
		keywords: ["file uploader", "api", "cms", "images", "video"],
		image: "/resources/uploadthing.jpg",
	},
	{
		name: "Tailwind UI",
		description:
			"Beautiful UI components, crafted by the creators of Tailwind CSS",
		category: ["UI UX", "CSS", "Components", "Boilerplate"],
		url: "https://tailwindui.com",
		paid: "Paid",
		keywords: ["tailwind", "ui", "components", "css", "boilerplate"],
		image: "/resources/tailwindui.jpg",
	},
	{
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building custom designs",
		category: ["CSS", "UI UX"],
		url: "https://tailwindcss.com",
		paid: "Free",
		keywords: ["tailwind", "css", "ui", "framework"],
		image: "/resources/tailwindcss.jpg",
	},
	{
		name: "DevUI",
		description: "A collection of modern UI components for developers",
		category: ["UI UX", "CSS", "Components"],
		url: "https://www.devui.io/",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "css"],
		image: "/resources/devui.jpg",
	},
	{
		name: "UIVerse",
		description: "Open-Source UI elements for any project",
		category: ["UI UX", "CSS", "Components"],
		url: "https://uiverse.io",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
		image: "/resources/uiverse.jpg",
	},
	{
		name: "Code Animations",
		description: "Beautiful code animations for social media and websites",
		category: ["Animations", "Video"],
		url: "https://www.animate-code.com",
		paid: "Free",
		keywords: ["code", "animations", "video", "social media", "websites"],
		image: "/resources/codeanimations.jpg",
	},
	{
		name: "sharpen.design",
		description: "Design prompts to sharpen your design skills",
		category: ["UI UX", "Practice", "Design"],
		url: "https://sharpen.design",
		paid: "Free",
		keywords: ["design prompts", "ui", "ux", "practice", "design"],
		image: "/resources/sharpendesign.jpg",
	},
	{
		name: "Design Resources",
		description: "A github repository with tons of design resources",
		category: ["UI UX", "Design", "Documentation"],
		url: "https://github.com/bradtraversy/design-resources-for-developers",
		paid: "Free",
		keywords: ["design resources", "ui", "ux", "design", "resources"],
		image: "/resources/designresources.jpg",
	},
	{
		name: "Figma",
		description: "Collaborative interface design tool",
		category: ["UI UX", "Design"],
		url: "https://www.figma.com",
		paid: "Free Plan Available",
		keywords: ["design tool", "ui", "ux", "figma"],
		image: "/resources/figma.jpg",
	},
	{
		name: "Spline - 3D Design Tool",
		description: "A 3D design tool for the web",
		category: ["UI UX", "Design", "Animations"],
		url: "https://spline.design",
		paid: "Free",
		keywords: ["3d design", "ui", "ux", "design", "animations"],
		image: "/resources/spline.jpg",
	},
	{
		name: "Stack Sorted",
		description: "A curated list of community components & element designs",
		category: ["UI UX", "Components", "CSS"],
		url: "https://stacksorted.com",
		paid: "Free",
		keywords: ["element designs", "ui", "ux", "components"],
		image: "/resources/stacksorted.jpg",
	},
	{
		name: "Dribbble",
		description: "Discover the world’s top designers & creatives",
		category: ["UI UX", "Design"],
		url: "https://dribbble.com",
		paid: "Free",
		keywords: ["designers", "creatives", "ui", "ux", "design"],
		image: "/resources/dribbble.jpg",
	},
	{
		name: "LogoShaper",
		description: "A simple logo maker for your projects",
		category: ["Images"],
		url: "https://www.logoshaper.co",
		paid: "Free",
		keywords: ["logo", "design", "images", "logoshaper"],
		image: "/resources/logoshaper.jpg",
	},
	{
		name: "Next-Auth",
		description: "Authentication for Next.js",
		category: ["Authentication"],
		url: "https://next-auth.js.org",
		paid: "Free",
		keywords: ["next.js", "authentication", "next-auth"],
		image: "/resources/nextauth.jpg",
	},
	{
		name: "Clerk",
		description: "The most comprehensive User Management Platform",
		category: ["Authentication"],
		url: "https://clerk.com",
		paid: "Free Plan Available",
		keywords: ["user management", "authentication", "clerk"],
		image: "/resources/clerk.jpg",
	},
	{
		name: "Lucide",
		description: "A simply beautiful open-source icon set",
		category: ["Images", "Components"],
		url: "https://lucide.dev",
		paid: "Free",
		keywords: ["icon set", "icons", "images", "components"],
		image: "/resources/lucide.jpg",
	},
	{
		name: "Strapi",
		description: "The leading open-source headless CMS",
		category: ["CMS"],
		url: "https://strapi.io",
		paid: "Free Plan Available",
		keywords: ["open-source", "headless", "cms", "strapi"],
		image: "/resources/strapi.jpg",
	},
	{
		name: "Replicate",
		description: "AI API for generating synthetic data",
		category: ["AI", "API"],
		url: "https://replicate.com/",
		paid: "Paid",
		keywords: ["ai", "api", "synthetic data", "replicate"],
		image: "/resources/replicate.jpg",
	},
	{
		name: "MongoDB",
		description: "The most popular database for modern apps",
		category: ["Database"],
		url: "https://www.mongodb.com",
		paid: "Free Plan Available",
		keywords: ["database", "mongodb"],
		image: "/resources/mongodb.jpg",
	},
	{
		name: "PlanetScale",
		description: "The database for developers",
		category: ["Database"],
		url: "https://planetscale.com",
		paid: "Free Plan Available",
		keywords: ["database", "planetscale", "mysql"],
		image: "/resources/planetscale.jpg",
	},
	{
		name: "Convex",
		description:
			"A better type of backend. Convex is the fullstack TypeScript development platform. Replace your database, server functions and glue code.",
		category: ["Database", "Authentication"],
		url: "https://www.convex.dev",
		paid: "Free Plan Available",
		keywords: ["database", "convex", "authentication", "api"],
		image: "/resources/convex.jpg",
	},
	{
		name: "Supabase",
		description: "The open source Firebase alternative",
		category: ["Database", "Authentication"],
		url: "https://supabase.com",
		paid: "Free Plan Available",
		keywords: ["database", "supabase", "authentication", "firebase"],
		image: "/resources/supabase.jpg",
	},
	{
		name: "BigDevSoon",
		description: "Discover new projects to practice your coding skills",
		category: ["Practice"],
		url: "https://app.bigdevsoon.me/projects",
		paid: "Free",
		keywords: ["coding projects", "projects", "coding", "bigdevsoon"],
		image: "/resources/bigdevsoon.jpg",
	},
	{
		name: "AI Skeletons",
		description: "AI generated skeletons based on your components",
		category: ["AI", "Components", "UI UX"],
		url: "https://gpt-skeleton.vercel.app",
		paid: "Free",
		keywords: ["ai", "skeletons", "components", "ui", "ux"],
		image: "/resources/aiskeletons.jpg",
	},
	{
		name: "Framer Motion",
		description: "A production-ready animation library for React",
		category: ["Animations", "UI UX"],
		url: "https://www.framer.com/motion/",
		paid: "Free",
		keywords: ["animation library", "react", "framer motion", "animations"],
		image: "/resources/framermotion.jpg",
	},
	// {
	// 	name: "Aceternity UI",
	// 	description:
	// 		"Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
	// 	category: ["UI UX", "Components", "Animations"],
	// 	url: "https://ui.aceternity.com",
	// 	paid: "Free",
	// 	keywords: ["react", "tailwind", "ui", "components", "css", "animations"],
	// 	image: "/resources/aceternityui.jpg",
	// },
	{
		name: "Squoosh",
		description: "Compress images without sacrificing quality",
		category: ["Images"],
		url: "https://squoosh.app",
		paid: "Free",
		keywords: ["compress", "images", "quality", "compress images", "squoosh"],
		image: "/resources/squoosh.jpg",
	},
	{
		name: "Google Fonts",
		description: "Free, open-source fonts optimized for the web",
		category: ["UI UX", "Fonts"],
		url: "https://fonts.google.com",
		paid: "Free",
		keywords: ["google fonts", "fonts", "open-source", "web", "google"],
		image: "/resources/googlefonts.jpg",
	},
	{
		name: "CodePen",
		description:
			"CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
		category: ["UI UX", "CSS", "Components", "Practice"],
		url: "https://codepen.io",
		paid: "Free",
		keywords: ["codepen", "front-end", "designers", "developers"],
		image: "/resources/codepen.jpg",
	},
	{
		name: "Clippy",
		description: "CSS clip-path maker",
		category: ["UI UX", "CSS", "Images"],
		url: "https://bennettfeely.com/clippy/",
		paid: "Free",
		keywords: ["css", "clip-path", "clip-path maker", "clippy"],
		image: "/resources/clippy.jpg",
	},
	{
		name: "godly.website",
		description:
			"Astronomically good web design inspiration from all over the internet.",
		category: ["UI UX", "Design"],
		url: "https://godly.website",
		paid: "Free",
		keywords: ["web design", "inspiration", "web", "design", "godly"],
		image: "/resources/godly.jpg",
	},
	{
		name: "Open Doodles",
		description:
			"Open Doodles is a set of free illustrations that embraces the idea of Open Design.",
		category: ["UI UX", "Design", "Images"],
		url: "https://www.opendoodles.com",
		paid: "Free",
		keywords: ["illustrations", "open design", "design", "images", "doodles"],
		image: "/resources/opendoodles.jpg",
	},
	{
		name: "Footer.design",
		description:
			"Footer fills the need for footer-specific inspiration in the web design space.",
		category: ["UI UX", "Design"],
		url: "https://www.footer.design",
		paid: "Free",
		keywords: ["footer", "inspiration", "web", "design", "footer.design"],
		image: "/resources/footer.jpg",
	},
	{
		name: "Blitz.js",
		description:
			"The Missing Fullstack Toolkit for Next.js. Providing battle-tested libraries and conventions for shipping and scaling world wide applications.",
		category: ["Boilerplate", "Components", "API", "Authentication"],
		url: "https://blitzjs.com",
		paid: "Free",
		keywords: ["next.js", "fullstack", "toolkit", "blitz.js"],
		image: "/resources/blitz.jpg",
	},
	{
		name: "Favicon.io",
		description:
			"The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis.",
		category: ["Images"],
		url: "https://favicon.io",
		paid: "Free",
		keywords: ["favicon", "generator", "favicon.io"],
		image: "/resources/faviconio.jpg",
	},
	{
		name: "Fontshare",
		description:
			"Fontshare is a free fonts service launched by the Indian Type Foundry (ITF). It’s a growing collection of professional grade fonts that are 100% free for personal and commercial use.",
		category: ["Fonts", "Design"],
		url: "https://www.fontshare.com",
		paid: "Free",
		keywords: ["fonts", "fontshare", "itf", "indian type foundry"],
		image: "/resources/fontshare.jpg",
	},
	{
		name: "React TS Cheatsheet",
		description:
			"Cheatsheets for experienced React developers getting started with TypeScript.",
		category: ["Documentation"],
		url: "https://react-typescript-cheatsheet.netlify.app",
		paid: "Free",
		keywords: [
			"react",
			"typescript",
			"cheatsheet",
			"documentation",
			"react-ts",
		],
		image: "/resources/reactts.jpg",
	},
	{
		name: "Flowbite",
		description:
			"Build websites even faster with components on top of Tailwind CSS.",
		category: ["Components", "UI UX", "CSS"],
		url: "",
		paid: "Free Plan Available",
		keywords: ["tailwind", "css", "components", "flowbite", "ui", "ux"],
		image: "/resources/flowbite.jpg",
	},
	{
		name: "Prettier",
		description: "An opinionated code formatter",
		category: ["VSCode"],
		url: "https://prettier.io",
		paid: "Free",
		keywords: ["prettier", "code", "formatter", "vscode"],
		image: "/resources/prettier.jpg",
	},
	{
		name: "Console Ninja",
		description:
			"Stop feeling lost and inefficient when debugging via logs. Use the right tool and debug using console.log like a ninja.",
		category: ["VSCode"],
		url: "https://console-ninja.com",
		paid: "Free",
		keywords: ["console", "ninja", "debugging", "vscode"],
		image: "/resources/consoleninja.jpg",
	},
	{
		name: "Error Lens",
		description:
			"ErrorLens turbo-charges language diagnostic features by making diagnostics stand out more prominently, highlighting the entire line wherever a diagnostic is generated by the language and also prints the message inline.",
		category: ["VSCode"],
		url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
		paid: "Free",
		keywords: ["error lens", "diagnostics", "vscode"],
		image: "/resources/errorlens.jpg",
	},
	{
		name: "Path Intellisense",
		description: "Visual Studio Code plugin that autocompletes filenames.",
		category: ["VSCode"],
		url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
		paid: "Free",
		keywords: ["path", "intellisense", "vscode"],
		image: "/resources/pathintellisense.jpg",
	},
	{
		name: "Tailwind CSS Intellisense",
		description:
			"Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.",
		category: ["VSCode"],
		url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
		paid: "Free",
		keywords: ["tailwind", "css", "intellisense", "vscode"],
		image: "/resources/tailwindintellisense.jpg",
	},
	{
		name: "npm Intellisense",
		description:
			"Visual Studio Code plugin that autocompletes npm modules in import statements.",
		category: ["VSCode"],
		url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense",
		paid: "Free",
		keywords: ["npm", "intellisense", "vscode"],
		image: "/resources/npmintellisense.jpg",
	},
	{
		name: "Readme.so",
		description: "",
		category: ["Documentation"],
		url: "https://readme.so",
		paid: "Free",
		keywords: [
			"readme",
			"documentation",
			"readme.so",
			"docs",
			"readme generator",
		],
		image: "/resources/readmeso.jpg",
	},
	{
		name: "React Email",
		description:
			"The next generation of writing emails. A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.",
		category: ["Email"],
		url: "https://react.email",
		paid: "Free",
		keywords: [
			"react",
			"email",
			"typescript",
			"components",
			"email components",
		],
		image: "/resources/reactemail.jpg",
	},
	{
		name: "Resend",
		description:
			"Email for developers. The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
		category: ["Email"],
		url: "https://resend.com",
		paid: "Free",
		keywords: ["email", "developers", "transactional", "marketing", "resend"],
		image: "/resources/resend.jpg",
	},
	{
		name: "EmailJS",
		description:
			"Send email directly from your code, no server side code required. Add static or dynamic attachments, dynamic parameters, captcha code and more. 200 free emails per month.",
		category: ["Email"],
		url: "https://www.emailjs.com",
		paid: "Free",
		keywords: ["email", "code", "attachments", "captcha", "emailjs"],
		image: "/resources/emailjs.jpg",
	},
	{
		name: "Mobbin",
		description:
			"Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.",
		category: ["UI UX", "Design"],
		url: "https://mobbin.com",
		paid: "Free Plan Available",
		keywords: ["ui", "ux", "design", "mobbin", "mobile"],
		image: "/resources/mobbin.jpg",
	},
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "/resources/",
	// },

	// https://recharts.org/en-US/
	// https://recharts.org/en-US/
	// https://recharts.org/en-US/

	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "/resources/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "/resources/",
	// },
];
