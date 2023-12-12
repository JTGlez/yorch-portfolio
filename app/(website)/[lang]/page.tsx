import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { getLocaleStrings } from "../../../localization/index"

export default function Home({ params }: { params: { lang: string } }) {

	const strings = getLocaleStrings(params.lang);

	return (
		<div className="grid grid-cols-10 gap-4">
			{/* Start sections */}
			<section className="col-span-10 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="flex flex-col max-w-2xl text-center justify-center gap-4">
					<h1 className={title()}>{strings.Start.title}</h1>
					<h1 className={title({ color: "blue" })}>{strings.Start.job}</h1>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						Documentation
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="flat">
						<span>
							Get started by editing <Code color="primary">app/page.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
			<section className="hidden lg:col-span-3 lg:flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="flex flex-col max-w-2xl text-center justify-center gap-4">
					<h1 className={title()}>{strings.Start.title}</h1>
					<h1 className={title({ color: "blue" })}>{strings.Start.job}</h1>
				</div>

				{/* Contact card section */}
				<div className="flex gap-3">
					<Link
						isExternal
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						Documentation
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="flat">
						<span>
							Get started by editing <Code color="primary">app/page.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
		</div>
	);
}
