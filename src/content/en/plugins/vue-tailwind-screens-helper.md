---
title: Vue Tailwind Screens Helper
description: ''
position: 1
category: 'Plugins'
---

<vtsh-example></vtsh-example>

<alert>

**Vue Tailwind Screens Helper** is just an helper to use with [**tailwindcss.com**](https://tailwindcss.com/) to check directly in browser window current breakpoint (and some other features, see below). This helper use informations of `tailwind.config.js`.

</alert>

Look at the left corner of your browser window and you will see **tailwind's helper**, you can:

- Check current breakpoint (xs, sm, md, lg, xl)
- Check current width of browser window
- Hide helper, just click on it to disable it

The helper is available just in development mode, the component check `process.env.NODE_ENV` and display helper if it's in `development`.
