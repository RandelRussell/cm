npm i axios 
npm i vue-i18n@9 
npm i primevue 
npm i @primevue/themes
npm i primeicons 
npm i primeflex 
npm i json-server@0.17.4

### appv

<script>

//import {BcApiService} from "./news/services/bc-api.service.js";
//import {Ent} from "./news/model/ent.entity.js";
//import EntList from "./news/components/ent-list.component.vue";
//import ToolbarContent from "./public/components/toolbar-content.component.vue";
//import FooterContent from "./public/components/footer-content.component.vue";
export default {
  name: 'App',
  //components: {ToolbarContent, EntList, FooterContent},
  data() {
    return {
        ents: [],
        errors: [],
        bcApi: new BCApiService() 
    }
  },
  methods: {
    buildEntListFromResponseData(ents) {
        return ents.map(ent => new Ent(
            ent.at1,
            ent.at2,
            ent.at3,
            ent.at4
        ))
    },
    getEnts() {
        this.bcApi.getAllSources()
            .then(response => {
                let ents = response.data.ents;
                this.ents = this.buildEntListFromResponseData(ents);
                console.log(this.ents);
            })
            .catch(e => this.errors.push(e));
    }
  },
  created() {
    this.getEnts();
    console.log("App vue works");
  }
}
</script>

<template>
  <toolbar-content/>
    <div>
        <ent-list v-if="errors" :ents="ents"/>
    </div> 
  </div>
  <footer-content/>
</template>

<style scoped>

</style>
