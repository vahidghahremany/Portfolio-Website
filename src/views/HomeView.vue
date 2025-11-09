<script setup>
import sectionOne from "@/components/sectionOne.vue";
import sectionTwo from "@/components/sectionTwo.vue";
import sectionThree from "@/components/sectionThree.vue";
import sectionFour from "@/components/sectionFour.vue";
import sectionFive from "@/components/sectionFive.vue";
</script>

<template>
  <section class="section-one">
    <sectionOne />
  </section>

  <section class="section-hero"></section>

  <section class="section-two">
    <sectionTwo />
  </section>

  <section class="section-three">
    <div class="img-overlay"></div>
    <sectionThree />
  </section>

  <section class="section-four">
    <sectionFour />
  </section>

  <section class="section-five">
    <sectionFive />
  </section>
</template>

<style scoped>
.section-one {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/imgs/body-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  transition: opacity 1s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(3rem, 5vw, 10rem);
}

.section-hero {
  width: 100vw;
  height: 100vh;
  position: relative;
  pointer-events: none;
}

.section-two {
  width: 100%;
  position: relative;
  margin-bottom: 10rem;
}

.section-three {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(../assets/imgs/sun-god-depicted-as-powerful-man-renaissance-setting1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    #1a1a1a 0%,
    rgba(18, 18, 28, 0) 25%,
    rgba(18, 18, 28, 0) 75%,
    #1a1a1a 100%
  );
}

.section-four {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10rem 0 0;
  position: -webkit-sticky;
  position: -ms-page;
  top: 0;
}

.section-five {
  margin: 0 auto;
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px;
}

@media (552px < width <= 992px) {
  .section-one {
    flex-direction: column;
  }
}

@media (width <= 552px) {
  .section-one {
    flex-direction: column;
    background-position: -200px 0;
  }
}

@media (width <= 768px) {
  .section-five {
    flex-direction: column;
    padding: 55px 0;
    gap: 55px;
  }
}
</style>
