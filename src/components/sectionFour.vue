<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const rootEl = ref(null);
const isVisible = ref(false);
let observer = null;

const cards = [
  {
    id: 1,
    img: new URL("../assets/imgs/Screenshot1.png", import.meta.url).href,
    tags: ["UI/UX", "WEBSITE"],
    description: "Design Website UI For Online Shop",
  },
  {
    id: 2,
    img: new URL("../assets/imgs/pizzaCover.jpg", import.meta.url).href,
    tags: ["UI/UX", "WEBSITE"],
    description: "Design Website UI For Online Shop",
  },
  {
    id: 3,
    img: new URL("../assets/imgs/Screenshot14.png", import.meta.url).href,
    tags: ["UI/UX", "WEBSITE"],
    description: "Design Website UI For Online Shop",
  },
];

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const e = entries.find((en) => en.target === rootEl.value) ?? entries[0];
      isVisible.value = e.isIntersecting;
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  if (rootEl.value) observer.observe(rootEl.value);
});

onBeforeUnmount(() => {
  if (observer && rootEl.value) observer.unobserve(rootEl.value);
  observer = null;
});
</script>

<template>
  <div ref="rootEl" :class="['section-title-group', { visible: isVisible }]">
    <div class="title-group">
      <h2 class="reveal" :style="{ '--delay': '0ms' }" aria-hidden="false">PORTFOLIOS</h2>
      <p class="reveal" :style="{ '--delay': '120ms' }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero nesciunt perferendis
        amet optio doloremque nisi illum, natus voluptatibus.
      </p>
    </div>

    <div class="portfolios-card" role="list">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="card reveal"
        role="listitem"
        :style="{ '--delay': `${200 + index * 140}ms` }"
      >
        <div class="img" :style="{ backgroundImage: `url(${card.img})` }" />
        <div class="card-content">
          <div class="info-row">
            <div v-for="(t, i) in card.tags" :key="i" class="info-badge">
              {{ t }}
            </div>
          </div>
          <div class="description-row">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title-group {
  width: 80vw;
  height: 100%;
  padding: 13px 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  color: #fff;
  opacity: 1;
}

.reveal {
  opacity: 0;
  transform: translateY(20px) scale(0.995);
  animation-fill-mode: both;
  animation-duration: 560ms;
  animation-timing-function: cubic-bezier(0.22, 0.9, 0.2, 1);
  animation-name: none;
}

.section-title-group.visible .reveal {
  animation-name: fadeUp;
  animation-delay: var(--delay, 0ms);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.995);
  }
  60% {
    transform: translateY(-6px) scale(1.01);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.title-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
}

.title-group h2 {
  font-size: 55px;
  font-family: "fontOne", sans-serif;
  margin: 0;
}

.title-group p {
  font-size: 21px;
  line-height: 37px;
  font-family: "fontTwoThin", sans-serif;
  text-align: center;
  margin: 0;
}

.portfolios-card {
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 34px;
}

.portfolios-card .card {
  width: 320px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 8px;
  padding: 13px;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 280ms ease;

  @supports (corner-shape: squircle) {
    border-radius: 89px;
    corner-shape: squircle;
  }
}

.portfolios-card .card:hover {
  transform: translateY(-6px) scale(1.01);
}

.portfolios-card .card .img {
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;

  @supports (corner-shape: squircle) {
    border-radius: 76px;
    corner-shape: squircle;
  }
}

.portfolios-card .card .card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 13px;
  color: #fff;
  padding: 16px;
}

.info-row {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.info-badge {
  padding: 6px 10px;
  font-family: "fontTwo", sans-serif;
  font-size: 13px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

/* توضیحات */
.description-row p {
  font-family: "fontTwo", sans-serif;
  margin: 0;
  font-size: 15px;
}

/* Responsive */
@media (max-width: 900px) {
  .title-group h2 {
    font-size: 42px;
  }

  .portfolios-card .card {
    width: 90%;
    max-width: 420px;
  }

  .portfolios-card {
    width: 94vw;
  }
}

@media (max-width: 480px) {
  .title-group h2 {
    font-size: 30px;
  }
  .title-group p {
    font-size: 16px;
    line-height: 24px;
  }
  .portfolios-card .card .img {
    height: 160px;
  }
  .portfolios-card .card {
    padding: 10px;
    border-radius: 14px;
  }
}
</style>
