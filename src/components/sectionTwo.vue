<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const el = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      isVisible.value = entries[0].isIntersecting;
    },
    { threshold: 0.5 }
  );
  if (el.value) observer.observe(el.value);
});

onBeforeUnmount(() => {
  if (observer && el.value) observer.unobserve(el.value);
});
</script>

<template>
  <div ref="el" class="section-two-container">
    <div class="content-col">
      <h2 class="section-title animate-section" :class="{ visible: isVisible }">Who Am I?</h2>

      <p class="section-content animate-section" :class="{ visible: isVisible }">
        I am a programmer specializing in JavaScript, with a strong focus on creating engaging and
        responsive visual elements using JavaScript and its core libraries . My main expertise lies
        in writing clean, optimized code, turning ideas into digital realities, and building
        functional user experiences . In addition to programming, I also have experience in user
        interface (UI) design, which complements my technical skills . This website—developed
        entirely with Vue.js and without relying on any external frameworks or libraries for UI or
        animations—offers a closer look at my work and approach . My goal is to craft seamless,
        responsive user experiences through elegant design and efficient, professional code
      </p>

      <div class="section-tags animate-section" :class="{ visible: isVisible }">
        <div class="tag">Programmer</div>
        <div class="tag">UI/UX Designer</div>
        <div class="tag">Graphic Designer</div>
        <div class="tag">Branding</div>
      </div>
    </div>

    <div class="img-col animate-section" :class="{ visible: isVisible }">
      <div class="img-container"></div>
    </div>
  </div>
</template>

<style scoped>
.section-two-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 55px;
}

.animate-section {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 0.9s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-col,
.img-col {
  flex: 1 1 50%;
}

.content-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.section-tags {
  margin-top: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
}

.tag {
  padding: 8px 13px;
  font-size: clamp(8px, 1.2vw, 16px);
  font-family: "fontTwo", sans-serif;
  border: 1px solid #fff;
  border-radius: 44px;
  transition: 0.3s;
}

.tag:hover {
  color: black;
  background-color: #fff;
}

.section-title {
  font-family: "fontOne", sans-serif;
  font-size: clamp(64px, 6vw, 89px);
}

.section-content {
  font-family: "fontTwo", sans-serif;
  line-height: 38px;
  font-size: clamp(13px, 2vw, 18px);
  color: #a8a8a8;
}

.img-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.img-container {
  width: 610px;
  height: 610px;
  background-image: url(../assets/imgs/vahid.png);
  background-repeat: no-repeat;
  background-size: cover;

  @supports (corner-shape: squircle) {
    border-radius: 144px;
    corner-shape: squircle;
  }
}

@media (552px < width <= 992px) {
  .content-col {
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
  .img-col {
    justify-content: center;
  }
}

@media (width <= 552px) {
  .section-two-container {
    flex-direction: column;
    gap: 34px;
  }

  .content-col {
    align-items: center;
    text-align: center;
  }

  .img-container {
    width: 310px;
    height: 310px;
  }
}
</style>
