<template>
  <traffic-light></traffic-light>
</template>

<script>
    import TrafficLight from '../components/TrafficLight'

    export default {
        components: {TrafficLight},
        mounted() {
            setTimeout(this.nextRoute,3000)
            // this.nextRoute()
        },
        methods: {
            nextRoute() {
                this.$route.meta.from == 'red' ? this.$router.push('/green') : this.$router.push('/red')
            }
        }
    }
</script>