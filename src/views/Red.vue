<template>
  <traffic-light></traffic-light>
</template>

<script>
  import TrafficLight from '../components/TrafficLight'

  export default {
    components: {TrafficLight},
      mounted() {
        setTimeout(this.nextRoute, 10000)
      },
      methods: {
        nextRoute() {
          this.$router.push('yellow')
        }
      }
  }
</script>