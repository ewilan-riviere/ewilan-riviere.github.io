---
title: Vue GW Builds
description: ''
position: 1
category: 'Plugins'
---

:::tip GitHub & infos

[**ewilan-riviere/vvue-gw-builds**](https://github.com/ewilan-riviere/vue-gw-builds)

Package to easily display [Guild Wars game](https://www.guildwars.com/en/) builds into any Vue.js app. It's a Vue wrapper of [arnapou's gwbbcode](https://github.com/arnapou/gwbbcode) and this plugin use his API.

:::

## Display a skill

Display just a skill with skills points (here Meteor Shower is Fire Magic, so '@10' indicate 10 points in this attribute)

**Skill with icon**:

<gw-build>[meteor shower@10]</gw-build>

**Inline skill**:

<gw-build>[[meteor shower@10]</gw-build>

```vue
<template>
    <gw-build>[meteor shower@10]</gw-build>
    <gw-build>[[meteor shower@10]</gw-build>
</template>
```

## Display a build

<gw-build>[build prof=E/W fire=10 air=5 sword=1][searing flames][fireball][incendiary bonds][flare][glowing gaze][fire storm][shock][gale][/build]</gw-build>

```vue
<template>
    <gw-build>[build prof=E/W fire=10 air=5 sword=1][searing flames][fireball][incendiary bonds][flare][glowing gaze][fire storm][shock][gale][/build]</gw-build>
</template>
```

## Display build with template code

<gw-build>[build=OAAjooIFVM0NdxsQYMWLGnDRB]</gw-build>

```vue
<template>
    <gw-build>[build=OAAjooIFVM0NdxsQYMWLGnDRB]</gw-build>
</template>
```
