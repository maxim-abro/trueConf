<template>
  <div class="main">
    <traffic-circle-red></traffic-circle-red>
    <traffic-circle-yellow></traffic-circle-yellow>
    <traffic-circle-green></traffic-circle-green>
  </div>
</template>

<script>
  import TrafficCircleRed from './TrafficCircleRed'
  import TrafficCircleYellow from './TrafficCircleYellow'
  import TrafficCircleGreen from './TrafficCircleGreen'

  export default {
      components: {
          TrafficCircleRed,
          TrafficCircleYellow,
          TrafficCircleGreen
      }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 450px;
    height: 1350px;
    background: #242424;
    border-radius: 50px;
    border: 10px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

</style>