# **ewilan-riviere.github.io**

This repository build [**ewilan-riviere.github.io**](https://ewilan-riviere.github.io/), on branch `master` it's just files from `dist/` after `yarn nuxt generate`, dev files can be found on branch `dev`.

- You can find `src/` dir with **nuxt/content** files, you can run `yarn dev` in `src/` dir to deploy local app.
- To execute **production mode**, just execute `make deploy` at the root of the repository. **Makefile** will run generate on project, create temporary dir `deploy/`, allow git to track `deploy/` and push generated files on `master` branch. `deploy/` dir will be deleted and update will be push on `dev` branch.

You **cannot** run `make deploy` on Windows, you have to run this command on Linux. You can use **WSL** on Windows if you haven't Linux.

## Setup

Place prompt in `src/` dir, install dependencies

```bash
yarn
```

Launch Nuxt

```bash
yarn dev
```

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).
