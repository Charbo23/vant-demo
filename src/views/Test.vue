<template>
  <div class="test">
    <h2 class="text-zone">
      {{$store.state.test}}
    </h2>
    <h3>Rate: {{$store.state.rate}}</h3>
    <rate/>
  </div>
</template>

<script>
import Rate from "@/components/Rate.vue";
export default {
  name: "Test",
  components: {
    Rate
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">

</style>