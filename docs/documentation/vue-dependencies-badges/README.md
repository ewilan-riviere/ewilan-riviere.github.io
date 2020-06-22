# Introduction

Vue Dependencies badges is a small component to allow you to display which dependencies used by a project. We can find many badges project, I choose to use statics badges TODO builder of [**shields.io**](https://shields.io/) and icons from [**simpleicons.org**](https://simpleicons.org/). The aim is to build static badges with label, icon, colored by techs and the version.
I use a simple JSON file TODO to list all supported technologies by **Vue Dependencies badges** with label/icon/color/default version TODO. You can just indicate name of technology TODO to have a static badge with all features and default version TODO.

<vue-dep-badges
    :all="true"
></vue-dep-badges>

## Default version

Technologies evolve all the time, it's not possible to maintain all supported technologies up-to-date in JSON file. I often use a recent Long Time Supported version but it's not the last version. It's not a problem, you can indicate version in the prop, so you will see default version only if you use basic indication.

## Install it with Yarn or NPM

```bash
yarn add -D vue-dependencies-badges
```

**OR**

```bash
npm i vue-dependencies-badges --save-dev
```

## Import Vue Dependencies badges

Import it in main.js, app.js or enhanceApp.js file

:::tip Global: common JS

```js
var VueDependenciesBadges = require('vue-dependencies-badges');

new Vue({
  components: {
    'vue-dep-badges': VueDependenciesBadges
  }
})
```

:::

---

:::tip Global: ES6 (Vue-CLI users)

```js
import VueDependenciesBadges from 'vue-dependencies-badges'

Vue.use(VueDependenciesBadges)
```

:::

---

:::details Optional: local

If you want to import the component just for a specific component

```vue
<template>
  <div>
    <vue-dep-badges
      :deps='[["AndroidStudio"]]'
    ></vue-dep-badges>
  </div>
</template>

<script>
import VueDependenciesBadges from 'vue-dependencies-badges'

export default {
  components: {
    VueDepBadges: VueDependenciesBadges
  }
}

</script>
```

:::

---

## Props list

| Prop         | Type    | Default | Describe |
|--------------|---------|---------|----------|
| deps         | Array   | `[]`    | List of dependencies, see syntax below |
| iconsColored | Boolean | `false` | Set `true` if you want to have colored icons |
| all          | Boolean | `false` | Disable `deps` prop and list all techs supported |

You can use `deps` prop with different ways:

<vue-dep-badges
  :deps='[["node.js","11.15"]]'
></vue-dep-badges>

```js
// declare version
:deps='[
  ["node.js","11.15"]
]'
```

<vue-dep-badges
  :deps='[["node.js"]]'
></vue-dep-badges>

```js
// take default version
:deps='[
  ["node.js"]
]'
```

### List of supported techs

All techs are in `database.json`, you can check it on [**GitHub**](https://github.com/ewilan-riviere/vue-dependencies-badges/blob/master/lib/database.json)

<vue-dep-badges
    :all="true"
></vue-dep-badges>

#### Syntax of label

To add a supported tech, you have to add like it

```js
:deps='[
  ["label", "optionalVersion"]
]'
```

But what can we add for label with space ?

```bash
# just with spaces
label with spaces
# CamelCase
labelWithSpaces
# dashes
label-with-spaces
# underscores
label_with_spaces
```

:::tip Examples

Basic case

<vue-dep-badges
  :deps='[
    ["Visual Studio Code"]
  ]'
></vue-dep-badges>

```bash
To have "Visual Studio Code"
 - Visual Studio Code
 - visual-studio-code
 - visual_studio_code
 - VisualStudioCode
```

Specific case
> For js technologies, we can find different syntaxes, so these component will check if `js` is contain in label

<vue-dep-badges
  :deps='[
    ["NodeJS"]
  ]'
></vue-dep-badges>

```bash
To have "Node.js"
 - nodejs
 - nodeJS
 - node-js
 - node.js
```

:::

### To add not supported tech

:::tip Add definitively

If you use a tech on many documentation, it's could be more easily to add this tech to database.json. You have two options:

- [**Open an issue**](https://github.com/ewilan-riviere/vue-dependencies-badges/issues)
- Fork repository, update database.json and pull request
:::

Basic

<vue-dep-badges
  :deps='[
    ["My Tech", "2.3"]
  ]'
></vue-dep-badges>

```js
:deps='[
  ["My Tech", "2.3"]
]'
```

With details

<vue-dep-badges
  :deps='[
    [{
      label: "My Tech",
      version: "2.4",
      link: "http://my-domain.com",
      color: "3DDC84",
      colorIcon: "3DDC84",
      logo: "android",
    }]
  ]'
></vue-dep-badges>

```js
:deps='[
  [{
    label: "My Tech",
    version: "2.4",
    link: "http://my-domain.com",
    color: "3DDC84",
    colorIcon: "3DDC84",
    logo: "android",
  }]
]'
```

---

## Import in any component

If **Vue Dependencies badges** is *globally* imported, use it in a `.vue` file or `.md` file for Vuepress

<vue-dep-badges
  :deps='[["AndroidStudio"]]'
></vue-dep-badges>

```vue
<template>
  <div>
    <vue-dep-badges
      :deps='[["AndroidStudio"]]'
    ></vue-dep-badges>
  </div>
</template>
```

<vue-dep-badges
  :deps="[
    ['visual studio code', '1.4'],
    ['visual_studio_code', '1.2'],
    ['visual-studio-code'],
    ['nodejs'],
    ['node-js', '11.15'],
    ['node.js', '12.15'],
    ['php'],
    ['New tech'],
    ['my tech', '2.3'],
    [
      {
        label: 'My new tech',
        version: '2.4',
        color: '3DDC84',
        logo: 'android',
      },
    ],
  ]"
></vue-dep-badges>

```vue
<template>
  <div>
    <vue-dep-badges
      :deps="[
        ['visual studio code', '1.4'],
        ['visual_studio_code', '1.2'],
        ['visual-studio-code'],
        ['nodejs'],
        ['node-js', '11.15'],
        ['node.js', '12.15'],
        ['php'],
        ['New tech'],
        ['my tech', '2.3'],
        [
          {
            label: 'My new tech',
            version: '2.4',
            color: '3DDC84',
            logo: 'android',
          },
        ],
      ]"
    ></vue-dep-badges>
  </div>
</template>
```
