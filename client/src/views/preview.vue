<template>
    <div>

        <v-row class="justify-center mt-12">
        <v-col sm="10" md="8" lg="8" cols="10" class="mx-8">
            <v-card :style="`font-family: ${font};`" :color="activeColors.primary">
                <v-card-title @click="log()" :style="`color: ${activeColors.secondary}; font-weight: ${fontWeight}`" class="justify-center">
                    <h4 class="text-center">Menu</h4>
                </v-card-title>
                <div v-for="(type, i) in user.data.types" :key="i">
                    <v-card-title class="justify-center red--text">
                        <p class="text-center" :style="`color: ${activeColors.third}`">{{type}}</p>
                    </v-card-title>
                    <div v-for="(dish, i) in menu" :key="i" :style="`color: ${activeColors.secondary}`">
                    <v-row  class="mb-0 justify-center" >
                        <v-col v-if="dish.type === type" class="text-left  px-0" cols="7">
                            <h6>1. {{dish.name}}</h6>
                        </v-col>
                        <v-col v-if="dish.type === type" cols="2" class="text-right  px-0">
                            <v-card-text>{{dish.price}} :-</v-card-text>
                        </v-col>
                    </v-row>      
                    <v-row class="justify-center" v-if="dish.type === type">
                        <v-col cols="9" class="text-left px-0">
                            <span class="caption pl-2" v-for="(ing, index) in dish.ingredients" :key="index">{{ing}}<span v-if="dish.ingredients[index + 1]">, </span></span>
                        </v-col>
                    </v-row>  
                    </div>
                </div>
          </v-card>
        </v-col>       
        </v-row>
    </div>
</template>
  
  <script>
    import { mapGetters } from 'vuex';
    export default {
      data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['menu', 'user', 'font', 'activeColors', 'fontWeight']),
        },
    created: function(){
        console.log(this.fontWeight)
        },
    methods: {
            log(){
                console.log(this.fontWeight)
            }        
        }
    }
  </script>
  <style >
      .full-height{
          height: 100px;
          overflow-y: scroll;
      }
      .sidenav {
        width: 130px;
        position: sticky;
        z-index: 1;
        top: 20px;
        left: 1000px;
        background: #eee;
        overflow-x: hidden;
        padding: 8px 0;
    }
    .thicker {
    font-weight: 900;
    }
    .border {
        border-bottom: 1px solid white;
    }

  </style>