'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import Image from 'next/image';
import { useTheme } from "next-themes";

import { link as linkStyles } from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	SearchIcon,
} from "@/components/icons";
import { getLocaleStrings } from "@/localization";
import { logo } from "../../image-path"
import { useState } from "react";
import Logo from "./Logo";

export const Navbar = (params: { lang: string }) => {

	const strings = getLocaleStrings(params.lang);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = useTheme();

	const siteConfig = {
		name: "JTGlez",
		description: "JTGlez Full-Stack Dev Portfolio",
		navItems: [
			{
				label: strings.Navbar.home,
				href: "/",
			},
			{
				label: strings.Navbar.aboutme,
				href: "/about-me",
			},
			{
				label: strings.Navbar.projects,
				href: "/projects",
			},
			{
				label: strings.Navbar.blog,
				href: "/blog",
			},
		],
		navMenuItems: [
			{
				label: strings.Navbar.home,
				href: "/",
			},
			{
				label: strings.Navbar.aboutme,
				href: "/about-me",
			},
			{
				label: strings.Navbar.projects,
				href: "/projects",
			},
			{
				label: strings.Navbar.blog,
				href: "/blog",
			},
		],
		links: {
			github: "https://github.com/nextui-org/nextui",
		},
	};

	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			{/* Content for full size*/}
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<div className="w-14">
							<Logo />
						</div>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								href="#"
								size="lg"
								color="foreground">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
