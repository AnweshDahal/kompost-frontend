<template>
  <header>
    <div class="logo">
      <h2 class="logo-text">kompost</h2>
    </div>
    <div class="actions">
      <div class="buttons">
        <v-btn class="btn-secondary" depressed icon
          ><v-icon>mdi-account</v-icon></v-btn
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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

header .actions .buttons .btn-secondary {
  background-color: #edf4e0;
  color: #5cdb94 !important;
  border-radius: 13px;
}
</style>