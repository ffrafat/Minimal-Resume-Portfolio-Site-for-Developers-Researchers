# rafat.cc — my personal site, as a macOS desktop

My portfolio, reimagined as a macOS desktop experience in the browser: dock,
draggable windows, wallpapers, calculator, calendar, and an "About Me" app with
my actual data.

Live: https://rafat.cc

## Credits

The entire desktop experience is built on the wonderful open-source
[macos-web](https://github.com/PuruVJ/macos-web) project by
[Puru Vijay](https://puruvj.dev) (MIT licensed — see [LICENSE](LICENSE)).
I swapped in my own content, profile, and branding; all the macOS magic is his
work. Thank you, Puru!

## Development

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production build to ./dist
```

Built with Svelte 5 + Vite. The `public/` folder also serves my apps' privacy
policy pages at their original URLs.
