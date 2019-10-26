<template lang="pug">
  section.desc
    h1.desc__title Starter pack
    img(src="img/owner.png").desc__img
    a(href="https://github.com/go-sanyaaa/gulp-wp-starter").desc__link GitHub
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="sass" scoped>
.desc
  width: 280px
  margin: 60px auto
  display: flex
  flex-direction: column
  &__title
    text-align: center
    font-size: 48px
    margin-bottom: 20px
    color: $secondary
  &__img
    object-fit: contain
    height: 200px
  &__link
    text-align: center
    margin-top: 20px
    font-weight: bold
    color: $primary
</style>