<template>
  <header>
    <div class="logo">
      <h2 class="logo-text" @click="home()">kompost</h2>
    </div>
    <div class="actions">
      <div class="buttons">
        <v-menu class="btn-menu" offset-y>
          <template class="btn-template" v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              large
              class="btn-secondary"
              depressed
              icon
              ><v-icon>mdi-account</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item @click="login()" v-if="!auth">
              <v-list-item-title class="li-title">Login</v-list-item-title>
            </v-list-item>
            <v-list-item @click="register()" v-if="!auth">
              <v-list-item-title class="li-title">Register</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="store()" class="li-title"
                >Store</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="li-title"
                >Leaderboard</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    leaderboard() {
      this.$router.push("/leaderboard");
    },
    store() {
      this.$router.push("/store");
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  },
};
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 28px;
}

header .logo .logo-text {
  text-transform: uppercase;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height */

  color: #5cdb94;
}
.btn-secondary {
  background-color: #edf4e0;
  color: #5cdb94 !important;
  border-radius: 13px;
}

.li-title {
  font-family: "Lexend Deca";
}
</style>