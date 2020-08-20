
<template>

  <v-card width="300 justify-end">
    <v-navigation-drawer
      permanent
      right
      text app
    >
      <v-row class="fill-height justify-end" no-gutters>
        <transition name="fade">

          <Fonts v-if="show && font"/>
          <Layouts v-if="show && layout"/>
          <colors v-if="show && color"/>

        </transition>
        <v-navigation-drawer
        dark
        mini-variant
        mini-variant-width="56"
        permanent
        right
      >
        <v-list
          nav
          class="pa-0"
        >
        <v-list-item-group color="white pa-0">
          <v-list-item
            v-for="(tool, i) in tools"
            :key="i"
            class="pa-0 mb-0 font-arial"
            @click="selectTool(tool)"
          >
          <v-row class="justify-center text-center">
            <v-col class="px-2">
              <v-icon v-text="tool.icon"></v-icon>
            </v-col>
            <v-col>
              <v-list-item-content class="py-0">
                <v-list-item-title class="caption" v-text="tool.text"></v-list-item-title>
              </v-list-item-content>   
            </v-col>
          </v-row>
          </v-list-item>
        </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      </v-row>
    </v-navigation-drawer>
  </v-card>    

</template>
  <script>
    import Fonts from './Font.vue'
    import Layouts from './Layout.vue'
    import Colors from './Color.vue'
    import {mapGetters} from 'vuex';
    export default {
      components: { Fonts, Layouts, Colors },
      computed: mapGetters(['menu']),
      data () {
        return {
          show: true,
          font: false,
          color: false,
          tools: [
            { icon: 'mdi-format-text-variant', text: 'font' },
            { icon: 'mdi-palette', text: 'color' },
            { icon: 'mdi-format-list-bulleted', text: 'layout' },
            { icon: 'mdi-cog-outline', text: 'extra' },
          ],
          types: ['Pizza', 'Sallad', 'Meny'],
        layout: false,
        links: ['Home', 'Contacts', 'Settings'],
          mini: true
        }
      },
      methods: {
        selectTool(item){
          this.layout = false
          this.font = false
          if(item.text == 'font'){
            this.show = !this.show
            this.font = true
            setTimeout(() => {
              this.show = !this.show
            }, 250)
          }
          if(item.text == 'layout'){
            this.show = !this.show
            this.layout = true
            setTimeout(() => {
              this.show = !this.show
            }, 250)
          }
          if(item.text == 'color'){
            this.show = !this.show
            this.color = true
            setTimeout(() => {
              this.show = !this.show
            }, 250)
          }
        },
      }
    }
  </script>

  <style>
.tools-content{
    margin-top: 56px;
  }
  .v-list-item--active{
    color: red;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  
  </style>