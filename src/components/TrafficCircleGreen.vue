<template>
  <div :class="$route.meta.active == 'green' ? 'light green-active' : 'light'">

  </div>
</template>

<style scoped lang="scss">
  .light {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: #3d3d3d;
    border: 7px solid #000;
    &.red-active {
      background: #ff0000;
    }
    &.yellow-active {
      background: #ffff00;
    }
    &.green-active {
      background: #00ff00;
    }
  }
</style>