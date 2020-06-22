<template>
  <div class="img-cp">
    <img
      :src="source"
      :alt="getImgName(source)"
      class="img-cp__img"
      :class="keepRatio ? 'object-cover' : ''"
      :height="size ? size : height"
      :width="size ? size : width"
    />
  </div>
</template>

<script>
export default {
  name: 'ImgCp',
  props: {
    source: {
      type: String,
      default: '/images/logo/book-documentation.png',
    },
    height: {
      type: Number,
      default: 150,
    },
    width: {
      type: Number,
      default: 150,
    },
    size: {
      type: Number,
      default: 0,
    },
    keepRatio: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getImgName(source) {
      let imgName = source.split('/')
      imgName = imgName[imgName.length - 1]
      imgName = imgName.split('.')
      imgName = imgName[0]

      return imgName
    },
  },
}
</script>

<style scoped>
.img-cp__img {
  @apply object-cover;
}
</style>
