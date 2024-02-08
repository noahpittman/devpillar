import Link from "next/link";
import { Separator } from "./ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Footer = () => {
	return (
		<footer className="mt-20 pb-16 flex gap-4 flex-col space-y-16">
			<Card
				id="newsletter"
				className="
					bg-muted/25 border text-center 
					bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
				"
			>
				<CardHeader className="space-y-4 py-16">
					<CardTitle className="text-3xl">Biweekly Updates</CardTitle>
					<CardDescription className="text-base max-w-prose mx-auto">
						Join our newsletter to be notified of major updates and new
						resources every two weeks.
					</CardDescription>
					<div className="max-w-sm w-full mx-auto">
						<iframe
							src="https://embeds.beehiiv.com/083e2abd-d1cb-4d50-b5d5-3146de92c860?slim=true"
							data-test-id="beehiiv-embed"
							height="52"
							className="scale-[80%] rounded-md w-full bg-black opacity-95"
						></iframe>
					</div>
				</CardHeader>
			</Card>
			<Separator />

			<div>
				<div className="flex items-end gap-4 justify-between">
					<ul className="flex leading-none flex-wrap gap-4">
						<Link
							className="hover:text-foreground font-medium
								line-through pointer-events-none text-muted"
							href="/contact"
						>
							Contact
						</Link>
						<Link
							className="hover:text-foreground font-medium
								line-through pointer-events-none text-muted"
							href="/contact"
						>
							Contribute
						</Link>
					</ul>

					<div className="flex items-end text-end gap-0.5 flex-col">
						<p>
							<span className="tracking-tight font-medium leading-none text-muted-foreground">
								Dev
							</span>
							Pillar
						</p>
						<p className="text-muted-foreground text-xs">
							© {new Date().getFullYear()} DevPillar
						</p>
						<p className="text-muted-foreground text-xs">
							Made with ❤️ by{" "}
							<Link
								target="_blank"
								className="text-foreground hover:underline"
								href={"https://twitter.com/_pittman"}
							>
								Noah Pittman
							</Link>
						</p>
						{/* <p className="text-muted-foreground text-xs">
                    Resources by{" "}
                    <Link className="text-foreground hover:underline" href={""}>
                        the community
                    </Link>
                </p> */}
					</div>
				</div>
			</div>
		</footer>
	);
};
