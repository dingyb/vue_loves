<template>
	<div id="app">
    <router-view />
    <common-footer></common-footer>
	</div>
</template>

<script>
import CommonFooter from '@/pages/common/Footer'
export default {
	name: 'App',
  methods: {
    left() {
      console.log('left')
    }
  },
  components: {
    CommonFooter
  }
}
</script>

<style>

</style>
