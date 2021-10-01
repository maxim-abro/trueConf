<template>
  <traffic-light></traffic-light>
</template>

<script>
    import TrafficLight from '../components/TrafficLight'

    export default {
        components: {TrafficLight},
        mounted() {
          setInterval(this.nextRoute, 15000)
            console.log(setInterval)
        },
        methods: {
          nextRoute() {
              this.$router.push('/yellow')
          }
        }
    }
</script>

<style scoped lang="scss">

</style>