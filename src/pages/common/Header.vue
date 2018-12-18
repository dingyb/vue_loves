<template>
  <div class="container">
    <div class="icon">
     <slot name="icon"></slot>
    </div>
     <slot name="title" class="title"></slot>
  </div>
</template>
<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
} 
</script>
<style lang="stylus" scoped>
  .container
    position: fixed
    overflow: hidden
    z-index: 99
    top: 0
    width: 100%
    height: 6vh
    line-height: 6vh
    background: rgba(2, 127, 255, 1)
    text-align: center
    color: white
    font-size: .35rem
    .icon
      position: absolute
      left: .3rem
</style>