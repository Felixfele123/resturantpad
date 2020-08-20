<v-list v-else class="grow pa-0">
    <v-card-title>Layout</v-card-title>
    <v-card-text>Tryck på pilarna</v-card-text>
    <v-divider></v-divider>
    <v-list-item
      v-for="(type, i) in types"
      :key="i"
      link
      dense
    >
      <v-list-item-title  v-text="type"></v-list-item-title>
      <v-icon right @click="layoutUp(type)">mdi-arrow-up-bold</v-icon>
      <v-icon right @click="layoutDown(type)">mdi-arrow-down-bold</v-icon>
    </v-list-item>
</v-list>