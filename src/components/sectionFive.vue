<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const contentElement = ref(null);

const isContentVisible = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === contentElement.value) {
          isContentVisible.value = entry.isIntersecting;
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  if (contentElement.value) observer.observe(contentElement.value);
});

onBeforeUnmount(() => {
  if (observer) {
    if (contentElement.value) observer.unobserve(contentElement.value);
  }
});
</script>

<template>
  <div class="img-side"></div>
  <div ref="contentElement" :class="['content-side', { visible: isContentVisible }]">
    <h4>SEND MESSAGE</h4>
    <div class="input-group">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div class="input-group">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="input-group">
      <label for="message">Message</label>
      <input type="text" name="message" id="message" />
    </div>
  </div>
</template>

<style>
.img-side {
  width: 500px;
  height: 500px;
  background-image: url(../assets/imgs/img-4.PNG);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: all 0.5s ease;
}

.content-side {
  width: 650px;
  background: var(--glassy-bg);
  backdrop-filter: var(--glssy-filter);
  border: var(--border);
  box-shadow: var(--box-shadow);
  scale: 1;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--light-color);
  padding: 2rem;
  border-radius: 64px;
}

.content-side h4 {
  font-family: "fontOne", "fontFaTwo", sans-serif;
  font-size: 34px;
  margin-bottom: 1rem;
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: "fontTwo", "fontFaOne", sans-serif;
}

.input-group input {
  width: 100%;
  height: 52px;
  border-radius: 30px;
}

input#message {
  height: 150px;
  border-radius: 55px;
}

@media (width <= 992px) {
  .content-side {
    width: 100%;
  }
  .img-side {
    width: 100%;
  }
}
</style>
