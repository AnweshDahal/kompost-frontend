<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center">
        <h1 style="color: #113259; font-weight: bold; font-family: Kanit">
          LEADERBOARD
        </h1>
      </v-col>
    </v-row>
    <v-row v-for="item in leaderboardList" :key="item">
      <v-col cols="12">
        <v-card>
          <v-card-text style="font-family: 'Lexend Deca'">
            <v-row>
              <v-col cols="10">
                <h2 style="color: #113259">{{ item.name }}</h2>
              </v-col>
              <v-col cols="2">
                <v-icon
                  right
                  slot="prependIcon"
                  color="#FFA000"
                  v-if="item.quantity == '1000 kg'"
                  >mdi-crown</v-icon
                >
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-chip style="background-color: #47765c; color: #ffffff" class="mt-n2">
              <span>{{ item.quantity }}</span>
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    leaderboardList: [
      { name: "Botanical Garden", quantity: "1000 kg" },
      { name: "Kalimati Market", quantity: "875 kg" },
      { name: "National Agricultural Research Council", quantity: "640 kg" },
      { name: "Balkhu Tarkari Bazaar", quantity: "530 kg" },
      { name: "Pratik Amatya", quantity: "335 kg" },
    ],
  }),
};
</script>

<style>
</style>