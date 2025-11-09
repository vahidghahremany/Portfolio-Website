<template>
  <div class="container">
    <div class="left-side">
      <div
        v-for="(columnIndex) in 3"
        :key="'left-col-' + columnIndex"
        class="column"
      >
        <p
          v-for="(rowIndex) in 20"
          :key="'left-bit-' + rowIndex"
          class="binary-text"
          :style="{ animationDelay: `${rowIndex * 0.1}s` }"
        >
          {{ generateRandomBit() }}
        </p>
      </div>
    </div>

    <div class="right-side">
      <div
        v-for="(columnIndex) in 3"
        :key="'right-col-' + columnIndex"
        class="column"
      >
        <p
          v-for="(rowIndex) in 20"
          :key="'right-bit-' + rowIndex"
          class="binary-text"
          :style="{ animationDelay: `${rowIndex * 0.1}s` }"
        >
          {{ generateRandomBit() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

function generateRandomBit() {
  return Math.round(Math.random()).toString();
}

const falling = ref(false);

onMounted(() => {
  falling.value = true;
});
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.binary-text {
  color: #0f0;
  font-family: "binaryFont";
  font-size: 24px;
  white-space: nowrap;
  opacity: 1; /* Start fully visible */
  animation: fadeInOut 1s linear infinite; /* Apply the animation */
}

@keyframes fadeInOut {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 0; } /* Fade out */
}

.left-side,
.right-side {
  padding: 1rem 2rem;
  display: flex;
  gap: 24px;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
