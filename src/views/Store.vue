<template>
  <div>
    <v-dialog v-model="checkoutModal" width="90%">
      <v-card>
        <v-layout>
          <v-flex wrap>
            <v-card>
              <v-card-title>
                <span class="checkout-headline">My Orders</span>
              </v-card-title>
              <v-card-text
                ><v-row style="padding: 20px">
                  <v-col cols="12">
                    <div
                      style="
                        border-left: 4px solid #5cdb94;
                        padding-left: 10px;
                        color: #5cdb94;
                      "
                    >
                      <h5
                        style="
                          font-family: 'Lexend Deca';
                          font-style: normal;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30px;
                        "
                      >
                        KOMPOST Organic Fertilizer
                      </h5>
                      <span
                        style="
                          font-family: 'Lexend Deca';
                          font-style: normal;
                          font-weight: 500;
                          font-size: 16px;
                          line-height: 25px;
                          color: #05396b;
                        "
                        >{{ size }}kg x {{ quantity }} Qty = Rs.
                        {{ total }}</span
                      >
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      elevation="0"
                      style="
                        background: #5cdb94;
                        border-radius: 8px;
                        font-family: 'Lexend Deca';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 15px;
                        line-height: 19px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        color: #edf4e0;
                        text-transform: uppercase;
                      "
                      >Pay with Khalti</v-btn
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      elevation="0"
                      style="
                        background: #5cdb94;
                        border-radius: 8px;
                        font-family: 'Lexend Deca';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 15px;
                        line-height: 19px;
                        display: flex;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        color: #edf4e0;
                        text-transform: uppercase;
                      "
                      >Cash on Delivery</v-btn
                    >
                  </v-col>
                </v-row></v-card-text
              >
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
    <div class="product-image"></div>
    <div class="product-title">KOMPOST Organic Fertilizer</div>
    <div class="quantity" style="padding: 20px">
      <v-select
        @change="update()"
        :items="sizes"
        item.text="text"
        item.value="value"
        filled
        rounded
        placeholder="Select Quantity"
        v-model="size"
      ></v-select>
    </div>
    <div class="total">
      <span class="amount">Rs. {{ total }}</span>
    </div>
    <div class="cart">
      <v-btn @click="subtract()" depressed icon class="cart-btn"
        ><v-icon color="#edf4e0">mdi-minus</v-icon></v-btn
      >
      <input
        @change="update()"
        readonly
        type="text"
        style="
          background-color: #5cdb94;
          border-radius: 7px;
          height: 40px;
          margin-inline: 10px;
          text-align: center;
          font-family: 'Kanit';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 24px;
          /* identical to box height */

          display: flex;
          align-items: center;
          text-align: center;

          color: #edf4e0;
          outline: none;
        "
        v-model="quantity"
      />
      <v-btn @click="add()" depressed icon class="cart-btn"
        ><v-icon color="#edf4e0">mdi-plus</v-icon></v-btn
      >
    </div>
    <div class="submit">
      <v-btn @click="displayCheckoutModal()" class="checkout-btn" elevation="0"
        >checkout</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    displayCheckoutModal() {
      this.checkoutModal = true;
    },
    add() {
      this.quantity += 1;
      this.update();
    },
    subtract() {
      if (this.quantity > 1) {
        this.quantity -= 1;
        this.update();
      }
    },
    update() {
      this.total = this.quantity * this.rate * this.size;
    },
  },
  data() {
    return {
      checkoutModal: false,
      rate: 105,
      total: 105,
      size: 5,
      quantity: 1,
      sizes: [
        {
          text: "5kg",
          value: 5,
        },
        {
          text: "10kg",
          value: 10,
        },
      ],
    };
  },
};
</script>

<style>
.product-image {
  display: block;
  height: 450px;
  background-image: url("https://raw.githubusercontent.com/AnweshDahal/project-image-host/main/heather-ford-nHTZLszh2No-unsplash.jpg");
  background-size: cover;
  background-position: bottom;
}

.product-title {
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  /* identical to box height */

  color: #5cdb94;
  padding: 20px;
}

.cart {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-btn {
  border-radius: 7px !important;
  background-color: #5cdb94 !important;
  color: #edf4e0 !important;
}

.submit {
  display: flex;
  padding: 20px;
}

.checkout-btn {
  background: #5cdb94 !important;
  border-radius: 9px !important;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 24px !important;
  line-height: 20px;
  padding: 30px 0px !important;
  width: 100%;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #edf4e0 !important;
}

.total {
  padding: 20px;
  font-family: "Kanit";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 36px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #5cdb94;
}

.checkout-headline {
  font-family: "Kanit" !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 24px !important;
  line-height: 36px !important;
  /* identical to box height */

  color: #05396b !important;
}
</style>