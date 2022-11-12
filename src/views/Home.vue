<template>
  <v-container fluid>
    <v-row>
      <v-col class="top-container">
        <div class="text-content">
          <h1>Got Trash?</h1>
          <p>
            Innovative Waste Management Solutions for Kathmandu's Waste Problems
          </p>
        </div>
        <div class="pickup-form">
          <div class="form-title">Request A Pickup</div>
          <v-form>
            <v-container>
              <v-row>
                <!-- Mobile Number Input -->
                <v-col
                  cols="12"
                  style="margin-bottom: 0px; padding-bottom: 0px"
                >
                  <v-text-field
                    v-model="pickup.mobileNumber"
                    label="Mobile Number"
                    filled
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <!-- Address Input -->
                <v-col
                  cols="12"
                  style="margin-bottom: 0px; padding-bottom: 0px"
                >
                  <v-text-field
                    v-model="pickup.address"
                    label="Address"
                    filled
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <!-- Address Input -->
                <v-col
                  cols="12"
                  style="margin-bottom: 0px; padding-bottom: 0px"
                >
                  <v-menu
                    ref="pickupDate"
                    v-model="pickup.pickupDate"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="newPickupDate"
                        placeholder="Pickup Date"
                        filled
                        rounded
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="dateRules"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="newPickupDate"
                      @change="pickupDate = false"
                      no-title
                      scrollable
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <!-- Weight Input -->
                <v-col
                  cols="12"
                  style="margin-bottom: 0px; padding-bottom: 0px"
                >
                  <v-text-field
                    v-model="pickup.weight"
                    label="Weight"
                    filled
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <!-- SUbmit Button -->
                <v-col
                  cols="12"
                  style="margin-bottom: 0px; padding-bottom: 0px"
                >
                  <v-btn
                    class="submit-btn"
                    elevation="0"
                    rounded
                    width="100%"
                    icon
                    >Continue
                    <v-icon color="#edf4e0" dark
                      >mdi-chevron-right</v-icon
                    ></v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="second-container"
        style="padding-inline: 0px; padding-block: 30px; margin-inline: 0px"
      >
        <div class="why-container">
          <div class="section-title">
            <h3>Why KOMPOST?</h3>
          </div>
          <div class="section-image"></div>
          <div class="section-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              earum magni eum magnam adipisci! Doloribus nulla amet earum saepe
              voluptates quidem, non, reprehenderit voluptas vero error, fuga
              fugiat provident corrupti.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="second-container"
        style="padding-inline: 0px; padding-block: 30px; margin-inline: 0px"
      >
        <div class="how-container">
          <div class="section-title">
            <h3>How it works?</h3>
          </div>
          <div class="section-image"></div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="second-container"
        style="padding-inline: 0px; padding-block: 30px; margin-inline: 0px"
      >
        <div class="buy-container">
          <div class="section-title">
            <h3>Get Your KOMPOST</h3>
          </div>
          <div class="section-image"></div>
          <div class="section-product">
            <div @click="click()" class="product-card mx-2">
              <v-icon style="font-size: 3rem" color="#5cdb94">mdi-sack</v-icon>
              <span>5kg</span>
            </div>
            <div @click="click()" class="product-card mx-2">
              <v-icon style="font-size: 3rem" color="#5cdb94">mdi-sack</v-icon>
              <span>10kg</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pickup: {
        mobileNumber: null,
        address: null,
        weight: null,
        pickupDate: null,
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    click() {
      this.$router.push("/store");
    },
  },
  components: {},
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

.second-container .why-container .section-image {
  display: block;
  height: 350px;
  background-position: center;
  background-image: url("https://raw.githubusercontent.com/AnweshDahal/project-image-host/main/e35bfbdacf5db41e40ba87e49ebb5ebb.jpg");
}

.why-container .section-title {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */

  color: #000000;
  text-align: center;
  padding-bottom: 20px;
}

.how-container .section-title {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */

  color: #000000;
  text-align: center;
  padding-bottom: 20px;
}

.buy-container .section-title {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */

  color: #000000;
  text-align: center;
  padding-bottom: 20px;
}

.how-container .section-image {
  display: block;
  height: 350px;
  background-position: center;
  background-size: contain;
  background-image: url("https://raw.githubusercontent.com/AnweshDahal/project-image-host/ee41a1bb3b1277a1da6c75fd6c398c00650ee86c/Frame%2010.png");
}

.why-container .section-description p {
  padding-inline: 20px;
  padding-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #000000;
}

.section-product {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #05396b;
  border-radius: 21px;
  min-width: 100px;
  min-height: 100px;
}

.product-card span {
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  /* identical to box height */

  color: #5cdb94;
}
</style>
