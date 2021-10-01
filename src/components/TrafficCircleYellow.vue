<template>
  <div :class="$route.meta.active == 'yellow' ? 'light yellow-active' : 'light'">
    {{ count }}
  </div>
</template>

<script>

  export default {
      data() {
          return {
              count: null,
          }
      },
      mounted() {
          this.$route.name == 'red' ? this.count = 10 : this.count = 15
          setInterval(()=> this.count--, 1000)
          // console.log(this)
      },
      unmounted() {
          clearInterval(0)
      },
      computed: {
          incCount() {
              return --this.count
          }
      }
  }
</script>

<style scoped lang="scss">
  .light {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: #3d3d3d;
    border: 7px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffff00;
    font-size: 120px;
    &.yellow-active {
      background: #ffff00;
    }
  }
</style>