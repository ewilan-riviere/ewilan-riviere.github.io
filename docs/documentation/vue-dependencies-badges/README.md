# Introduction

Install it with Yarn or NPM

```bash
yarn add -D vue-dependencies-badges
```

**OR**

```bash
npm i vue-dependencies-badges --save-dev
```

Import it, ES6 way, in `main.js` / `app.js` file

```js
import VueDependenciesBadges from 'vue-dependencies-badges'

Vue.use(VueDependenciesBadges)
```

Use it in a `.vue` file

```vue
<template>
    <div>
        <vue-dep-badges :data='[["AndroidStudio"]]'></vue-dep-badges>
    </div>
</template>
```
