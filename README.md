# 🎉 Nau's Next.js Boilerplate

This is a small Next.js 13 boilerplate that I like to use in my projects. It doesn't come with any UI framework/kit/whatever to allow you to setup whatever you prefer to use on each project (although it already comes with Tailwind ready to use, just in case).

## What are its features?

- It uses AppRouter
- Tailwind preconfigured
- Next Themes provider preconfigured
- E2E testing ready (with Playwright)
- Prettier and ESLint preconfigured
- Hooks for commits created and configured (including one to make sure the commit messages follow the standard commit style)

## Dependencies used

(Feel free to remove any you don't want/need)

- Next Themes (to simplify handling themes in your UI)
- Tailwind (to style your web or integrate a UI framework that uses it)
- Framer Motion (for beautiful animations)
- Playwright (for E2E testing)
- TS Reset (for improving some Typescript werid stuff)
- @antfu/ni (so you can run `ni`, `nr` and `nlx` instead of thinking the right command in your package manager to install, run or execute)
- Lint-staged (so linting is done only to staged files)
- Husky (for the hooks!)
- Commitlint (to enforce the right commit messages style)
- Several ESLint plugins (improve accessibility in JSX, better coding style in React and also in React hooks, better security and so on...)

## How to install?

It requires Node 20 or higher (although that is not a hard requirement, feel free to change the pinned version to whatever you need but at least Node 16).

(I recommend to use `pnpm` as the package manager, but feel free to use any you want)

1. Run `pnpm i` to install the dependencies
2. Run `pnpm run dev` or `nr dev` to run the project

You can use `ni` instead of `pnpm i`, `nr` instead of `pnpm run` and `nlx` instead of `pnpx`.
