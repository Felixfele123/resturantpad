<template>
    <v-list class="grow pa-0">
        <v-card-title>Font</v-card-title>
        <v-card-text>Välj font</v-card-text>
        <v-list-item
          v-for="(font, i) in fonts"
          :key="i"
          link
          @click="selectFont(font)"
        >
            <v-list-item-title :style="`font-family: ${font.name} `"  v-text="font.name"></v-list-item-title>
            <v-icon v-if="font.marked" small color="#ffb84d" right>mdi-radiobox-marked</v-icon>
        </v-list-item>
        <v-card-text class="py-2 mt-4">tyngd</v-card-text>
        <v-slider
        v-model="weight"
        min="0"
        max="1000"
        class="px-2"
      ></v-slider>
        <v-card-text class="py-2">storlek</v-card-text>
        <v-slider
        v-model="min"
        min="-100"
        max="100"
        class="px-2"
      ></v-slider>
    </v-list>
</template>
  
  <script>
  import { mapGetters, mapActions} from 'vuex';
  export default {
    name: 'Font',
    computed: mapGetters(['font']),

    created: function(){
      this.selectFont(this.font)
    },
    watch: {
        weight (val) {
        this.updateFontWeight(val)
        }
    },
    data () {
      return {
        fonts: [
          { name: 'Arial', marked: false },
          { name: 'Arial Narrow', marked: false },
          { name: 'Times New Roman', marked: false },
          { name: 'Courier New', marked: false },
          { name: 'verdana', marked: false },
          { name: 'Helvetica', marked: false },
          { name: 'Times', marked: false },
          { name: 'Courier', marked: false },
        ],
        min: null,
        weight: null
      }
    },
    methods: {
      ...mapActions(["updateFont", 'updateFontWeight']),
      selectFont(font){
        this.updateFont(font)
        this.fonts.forEach(f => {
          f.marked = false
          if(f.name == font.name ||	f.name == font){
            f.marked = true
          }
        });
      },
      changeWeight(){
        console.log("works")
      }
    },
  }
  </script>
  <style>
    .noTransitions{
      transition: none !important;
      opacity: 1 !important;
    }
  </style>
  