<template>
    <v-list dense class="grow pa-0">
        <v-card-title>Color</v-card-title>
        <v-card-text>Välj färg</v-card-text>
        <v-list-item @click="selectColor(color)" v-for="color in colors" :key="color.name" :style="`border: ${color.border} solid 2px`" class="color.class ma-4 px-0" link>
            <v-row class="ma-0">
                <v-col cols="6" class="px-0">
                    <v-card tile outlined :color="color.primary" height="40"></v-card>
                </v-col>
                <v-col cols="3" class="px-0">
                    <v-card tile outlined :color="color.secondary" height="40"></v-card>
                </v-col>
                <v-col cols="3" class="px-0">
                    <v-card tile outlined :color="color.third" height="40"></v-card>
                </v-col>
            </v-row>
        </v-list-item>
    </v-list>
</template>
  
  <script>
  import { mapGetters, mapActions} from 'vuex';
  export default {
    name: 'Font',
    computed: mapGetters(['activeColors']),
    created: function(){
      this.selectColor(this.activeColors)
      console.log(this.colors)
    },
    data () {
      return {
          colors: [
              {name: "color1", primary: "#4a4a49", secondary: "white", third: "white", border: 'black'},
              {name: "color2", primary: "white", secondary: "#363434", third: "#c97d02", border: 'black'},
              {name: "color3", primary: "white", secondary: "#4f4c4c", third: "red", border: 'black'},
              {name: "color4", primary: "black", secondary: "red", third: "red", border: 'black'},
          ]
      }
    },
    methods: {
      ...mapActions(["updateColors"]),
      selectColor(colors){
        this.updateColors(colors)
        this.colors.forEach(c => {
          c.border = 'grey'
          if(c.name == colors.name || c.name == colors){
            c.border = '#ffb84d'
          }
        });
      }
    },
  }
  </script>
  <style>
    .noTransitions{
      transition: none !important;
      opacity: 1 !important;
    }
    .colorWrap{
        border: 10px solid black;
    }
  </style>
  