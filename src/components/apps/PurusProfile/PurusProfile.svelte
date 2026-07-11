<script lang="ts">
	import { preferences } from '🍎/state/preferences.svelte.ts';
	import BlogIcon from '~icons/mdi/grease-pencil';
	import WorksIcon from '~icons/ic/round-workspaces';
	import GithubIcon from '~icons/mdi/github';
	import InstagramIcon from '~icons/mdi/instagram';
	import FacebookIcon from '~icons/mdi/facebook';
	import YoutubeIcon from '~icons/mdi/youtube';
	import EmailIcon from '~icons/mdi/email-outline';

	function external(node: HTMLAnchorElement) {
		node.rel = 'noopener noreferrer';
		node.target = '_blank';
	}
</script>

<section class="container">
	<header class="titlebar app-window-drag-handle">
		<span>About Me</span>
	</header>

	<aside class:light={preferences.theme.scheme === 'light'}>
		<nav>
			<a href="https://medium.com/@ffrafat" use:external> <BlogIcon /> Medium </a>
			<a href="https://www.fiverr.com/s/Gz3w972" use:external> <WorksIcon /> WordPress Gigs </a>

			<hr />

			<a href="https://github.com/ffrafat" use:external> <GithubIcon /> GitHub </a>
			<a href="https://instagram.com/fslfrqrft" use:external> <InstagramIcon /> Instagram </a>
			<a href="https://facebook.com/fslfrqrft" use:external> <FacebookIcon /> Facebook </a>
			<a href="https://www.youtube.com/channel/UCNFNUVYAH9uRYnPUbXcm3uw" use:external>
				<YoutubeIcon /> YouTube
			</a>

			<hr />

			<a href="mailto:ff@rafat.cc"> <EmailIcon /> ff@rafat.cc </a>
		</nav>
	</aside>

	<section class="content">
		<img height="200" width="200" src="/faisal-f-rafat-avatar.jpg" alt="Faisal F Rafat" />

		<br />

		<h1>Hi, I'm Faisal</h1>

		<h2>Welcome to my quiet corner of the web — no noise, just vibes.</h2>

		<br /><br />

		<p>
			I work as a Program Officer at the EBLICT Project under Dream71 Bangladesh Ltd., where my job
			description basically reads: “do everything.” On the side I take on WordPress gigs, build my
			own little apps, and tinker with anything digital I can poke under the hood.
		</p>

		<br /><br />

		<p>
			Civil Engineering grad from RUET, currently doing a professional Master's in Applied
			Statistics and Data Science at JU. Budget traveler, photographer, and ham radio operator —
			callsign S21NET.
		</p>

		<br /><br />

		<p class="credit">
			This desktop experience is built on the open-source
			<a href="https://github.com/PuruVJ/macos-web" use:external>macos-web</a> project by
			<a href="https://puruvj.dev" use:external>Puru Vijay</a> — thank you!
		</p>
	</section>
</section>

<style>
	.container {
		--color: var(--system-color-light-hsl);

		display: grid;
		grid-template-columns: 12rem 1fr;
		grid-template-rows: 3rem 1fr;

		border-radius: inherit;

		background-image: linear-gradient(
			to right,
			hsla(var(--color), 0.7) 12rem,
			hsla(var(--color), 1) 12rem 100%
		);

		transition: --color 200ms ease-in;

		color: var(--system-color-dark);
	}

	.titlebar {
		grid-area: 1 / 1 / span 1 / span 2;

		display: flex;
		justify-content: center;

		z-index: 1;

		padding: 0.9rem 1rem;

		width: 100%;

		border-top-left-radius: inherit;
		border-top-right-radius: inherit;

		user-select: none;

		span {
			color: hsla(var(--system-color-dark-hsl), 0.8);
			font-weight: 500;
			font-size: 0.9rem;
			letter-spacing: 0.5px;
		}
	}

	aside {
		grid-area: 1 / 1 / span 2 / span 1;

		transform: translateZ(0);

		height: calc(100% - 2.7px);
		width: calc(12rem - 2.27px);

		margin: 1.8px 0 0px 1.8px;

		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: inherit;

		&::before {
			content: '';

			width: inherit;
			height: inherit;

			border-radius: inherit;

			position: fixed;
			left: 0;
			top: 0;

			z-index: -1;
			backdrop-filter: blur(12px);
		}

		&.light {
			height: calc(100% - 3px);
			width: calc(12rem - 2.5px);

			margin: 1.7px 0 0px 1.7px;

			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}

		nav {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;

			margin: 4rem 0.6rem;

			hr {
				display: block;

				width: 100%;
				height: 1px;

				background-color: hsla(var(--system-color-dark-hsl), 0.2);

				border: none;
			}

			a {
				display: flex;
				gap: 0.4rem;
				align-items: center;

				color: hsla(var(--system-color-dark-hsl), 0.9);
				text-decoration: none;
				font-weight: 400;

				padding: 0.5rem 0.5rem;

				border-radius: 0.4rem;

				transition: background-color 100ms ease;

				&:hover {
					background-color: hsla(var(--system-color-dark-hsl), 0.2);
				}
			}
		}
	}

	.content {
		grid-area: 2 / 2 / span 1 / span 1;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 1rem 2rem;

		overflow-y: auto;

		img {
			border-radius: 50%;
		}
	}

	h1 {
		font-size: 2.618rem;
		line-height: 1.618;
	}

	h2 {
		font-size: 1.618rem;
		line-height: 1.2;
	}

	p {
		line-height: 1.618rem;
	}

	.credit {
		font-size: 0.85rem;
		color: hsla(var(--system-color-dark-hsl), 0.7);

		a {
			color: inherit;
		}
	}
</style>
