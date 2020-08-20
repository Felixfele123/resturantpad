<template>
    <v-list class="grow pa-0">
        <v-card-title>Layout</v-card-title>
        <v-card-text>Tryck på pilarna</v-card-text>
        <v-list-item
          v-for="(type, i) in user.data.types"
          :key="i"
          link
        >
          <v-list-item-title v-text="type"></v-list-item-title>
          <v-btn @click="layoutUp(type)" text small><v-icon>mdi-arrow-up-bold</v-icon></v-btn>
          <v-btn @click="layoutDown(type)" text small><v-icon>mdi-arrow-down-bold</v-icon></v-btn>
        </v-list-item>
    </v-list>
</template>
  <script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    computed: mapGetters(['user']),
    methods: {
      layoutUp(type){
          let index = this.user.data.types.indexOf(type)
          let prevIndex = index - 1
          console.log(index + " : " + prevIndex)
          if(index > 0){
          let b = this.user.data.types[prevIndex];
          this.user.data.types[prevIndex] = this.user.data.types[index];
          this.user.data.types[index] = b;
          this.user.data.types.push()
          }
          console.log(this.types)
        },
        layoutDown(type){
          let index = this.user.data.types.indexOf(type)
          let prevIndex = index + 1
          console.log(index + " : " + prevIndex)
          if(index < this.user.data.types.length - 1){
          let b = this.user.data.types[prevIndex];
          this.user.data.types[prevIndex] = this.user.data.types[index];
          this.user.data.types[index] = b;
          this.user.data.types.push()
          }
          console.log(this.types)
        }
    },
  }
  </script>
  <style>
  </style>
  