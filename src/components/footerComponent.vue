<script setup lang="ts">
import mailIcon from "./icons/mailIcon.vue";
import telegramIcon from "./icons/telegramIcon.vue";
import whatsappIcon from "./icons/whatsappIcon.vue";
import instagramIcon from "./icons/instagramIcon.vue";
import { inject, provide } from "vue";
const user = inject("user");
provide("name", "test");
console.log("user => ", user);
</script>

<template>
  <div class="footer">
    <div class="col col-one"></div>
    <div class="col-two">
      <div class="row row-one">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">PORTFOLIOS</a>
        <a href="">SERVICES</a>
      </div>
      <div class="row line"></div>
      <div class="row row-two">
        <a href=""><mailIcon /></a>
        <a href=""><telegramIcon /></a>
        <a href=""><whatsappIcon /></a>
        <a href=""><instagramIcon /></a>
      </div>
    </div>
    <div class="col col-three"></div>
  </div>
</template>

<style scoped>
.footer {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}

.footer .col {
  width: 300px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: contain;
}

.footer .col-one {
  background-image: url(../assets/imgs/footer-left-side.PNG);
  margin-left: 1rem;
}

.footer .col-three {
  background-image: url(../assets/imgs/footer-right-side.PNG);
}

.col-two {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: self-end;
  padding-bottom: 2rem;
}

.col-two .row {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-family: "fontTwo", "fontFaOne", sans-serif;
  margin: 0 auto;
}

.col-two .line {
  height: 2px;
  background-color: #fff;
}

@media (width <= 768px) {
  .footer .col-one,
  .footer .col-three {
    display: none;
  }

  .col-two {
    width: 100%;
  }

  .col-two .line {
    width: 80%;
  }
}
</style>
