<template>
  <div>
    <h2>Component says {{ message }}</h2>
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: ""
      },
    },
    computed: {
      error() {
        return this.message.trim().length < 3 ? "Use longer words than that" : "";
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>