// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Sir-Mudkip's Marsh";
export const SITE_DESCRIPTION = "Sir-Mudkip's blog site";
export const SITE_TAGLINE = 'Find out more about me or read my blog by navigating below:';
export const AUTHOR_NAME = 'Luke Chapman';

export const SOCIAL_LINKS = {
	github: 'https://github.com/Sir-Mudkip',
	linkedin: 'https://www.linkedin.com/in/luke-chapman-770b85214',
	email: '',
} as const;

export type SocialKey = 'github' | 'linkedin' | 'email';
export interface SocialItem {
	key: SocialKey;
	href: string;
	label: string;
}

export const SOCIALS: SocialItem[] = [
	SOCIAL_LINKS.github && { key: 'github' as const, href: SOCIAL_LINKS.github, label: 'GitHub' },
	SOCIAL_LINKS.linkedin && { key: 'linkedin' as const, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
	SOCIAL_LINKS.email && { key: 'email' as const, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
].filter(Boolean) as SocialItem[];

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/sivablue', label: 'Sivablue' },
] as const;
