<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the access screen at the index route and style its controls through semantic global tokens and Button variants, so the entry page remains consistent and accessible.
- Deploy target is Netlify: `vite.config.ts` pins `nitro: { preset: "netlify" }` so `npm run build` outputs static assets to `dist/` plus the SSR function in `.netlify/functions-internal/` (publish dir `dist`); the Lovable sandbox preview keeps its pinned Cloudflare preset and ignores this override, so don't remove it.
