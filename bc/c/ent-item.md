<script>
import {Ent} from "../model/ent.entity.js";

export default {
  name: "ent-item",
  props: {
    ent: {
      type: Ent,
      required: true
    }
  },
  //computed: {
  //  publishedAtAsString() {
  //    return this.article.publishedAt.toUTCString();
  //  }
  //}
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
    </template>
    <template #content>
    </template>
    <template #footer>
    </template>
  </pv-card>
</template>

<style scoped>

</style>