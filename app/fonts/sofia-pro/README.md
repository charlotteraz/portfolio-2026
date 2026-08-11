# Sofia Pro

The design (Figma: UX Portfolio, node 2037:39) uses Sofia Pro in four weights:
Light, Regular, Medium, and Semi Bold.

The licensed `.woff` files live in this folder and are wired up via
`next/font/local` in `app/layout.tsx` as the `--font-sofia-pro` variable,
which `--font-sofia` in `app/globals.css` points at. Components use the
`font-sofia` Tailwind utility with `font-light` / `font-normal` /
`font-medium` / `font-semibold` weight utilities.
