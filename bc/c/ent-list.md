<script>
import EntItem from "./ent-item.component.vue";

export default {
  name: "ent-list",
  components: {entItem},
  props: {
    ents: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div v-for="ent in ents">
    <ent-item :ent="ent" />
  </div>
</template>

<style scoped>

</style>