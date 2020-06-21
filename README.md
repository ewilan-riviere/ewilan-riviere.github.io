# **ewilan-riviere.github.io**

Main branch on this project is `gh-page`, when app is ready to be deploy on `ewilan-riviere.github.io`, it's necessary to execute these commands

```bash
# Compile files into dist/ folder
yarn build
# Push subtree with dist/ folder to master branch
git subtree push --prefix dist origin master
```

GitHub pages use master branch to deploy app, no need to push all application on this branch, just `dist/` folder after `build` command.
