<template>
  <v-container fluid>
    <v-row>
      <v-col class="top-container">
        <div class="text-content">
          <h1>Sign In!</h1>
          <p>Connect with us And turn your waste into Something Useful</p>
        </div>
        <div class="pickup-form">
          <div class="form-title mb-4">Request A Pickup</div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row row wrap>
              <v-col md12 xs12 class="pb-0" md="12" cols="12">
                <v-text-field
                  v-model="email"
                  type="email"
                  filled
                  rounded
                  dense
                  elevation="0"
                  required
                  placeholder="Email"
                  :rules="emailRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-spacer> </v-spacer>

            <v-row>
              <v-col md12 xs12 class="pb-0">
                <v-text-field
                  v-model="password"
                  filled
                  rounded
                  dense
                  type="password"
                  required
                  placeholder="Password"
                  :rules="passwordRules"
                  v-on:keyup.enter="accessLogin"
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-btn
                  class="submit-btn"
                  elevation="0"
                  rounded
                  width="100%"
                  icon
                  >Continue
                  <v-icon color="#edf4e0" dark>mdi-chevron-right</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginService from "../services/LoginService";
export default {
  name: "Login",
  components: {},
  data: () => ({
    login: false,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
    valid: false,
    errorSnackBar: false,
    errorText: `Incorrect Password`,
    message: "",
  }),

  methods: {
    accessLogin() {
      this.message = "";
      let formObj = {
        email: this.email,
        password: this.password,
      };
      LoginService.handleLogin(formObj).then((res) => {
        if (res == "Success") {
          this.$router.push("/");
        } else {
          this.errorSnackBar = true;
          this.message = "Incorrect Password";
        }
      });
    },
    validation() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.accessLogin();
      } else {
        this.valid = false;
      }
    },
  },
};
</script>
<style>
.top-container {
  background-color: #47765c;
  background-blend-mode: luminosity;
  background-image: url("https://raw.githubusercontent.com/AnweshDahal/project-image-host/main/3e52aabf5af799dc19e2abcd37b91348.jpg");
  background-size: cover;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  min-height: 700px;
}

.text-content h1 {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  /* identical to box height */

  color: #ffffff;
}

.text-content p {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
}

.pickup-form {
  background: #edf4e0;
  border-radius: 18px;
  padding: 20px;
}

.pickup-form .form-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
  text-align: center;
  text-transform: uppercase;
}

.submit-btn {
  background: #5cdb94 !important;
  font-family: "Kanit", sans-serif;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  /* identical to box height */

  color: #edf4e0 !important;
}
</style>
