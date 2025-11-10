<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const boxColumns = ref([
  {
    colClass: "box-col-1",
    boxes: [
      {
        boxClass: "box-1",
        title: "TECH STACK I USE",
        items: [
          { img: new URL("../assets/imgs/html-logo.webp", import.meta.url).href, label: "HTML" },
          { img: new URL("../assets/imgs/css-logo.webp", import.meta.url).href, label: "CSS" },
          {
            img: new URL("../assets/imgs/js-logo.webp", import.meta.url).href,
            label: "JAVASCRIPT",
          },
          { img: new URL("../assets/imgs/vue-logo.jpg", import.meta.url).href, label: "VUE.JS" },
          {
            img: new URL("../assets/imgs/react-logo.webp", import.meta.url).href,
            label: "REACT.JS",
          },
        ],
      },
      {
        boxClass: "box-2",
        title: "TOOLS FOR DESIGN",
        items: [
          { img: new URL("../assets/imgs/figma-logo.webp", import.meta.url).href, label: "FIGMA" },
          { img: new URL("../assets/imgs/psLogo.jpeg", import.meta.url).href, label: "PHOTOSHOP" },
        ],
      },
    ],
  },
  {
    colClass: "box-col-2",
    boxes: [
      {
        boxClass: "box-3",
        isImageBox: true,
      },
    ],
  },
  {
    colClass: "box-col-3",
    boxes: [
      {
        boxClass: "box-4",
        title: "OTHER SKILLS",
        items: [
          { img: new URL("../assets/imgs/git-logo.jpg", import.meta.url).href, label: "GIT" },
          { img: new URL("../assets/imgs/node-logo.png", import.meta.url).href, label: "NODE" },
        ],
      },
      {
        boxClass: "box-5",
        title: "FRAMEWORKS I USE",
        items: [
          {
            img: new URL("../assets/imgs/btLogo.jpeg", import.meta.url).href,
            label: "BOOTSTRAP",
            extraClass: "border-radius",
          },
          {
            img: new URL("../assets/imgs/tailwind-logo.webp", import.meta.url).href,
            label: "TAILWIND",
          },
          {
            img: new URL("../assets/imgs/express-logo.jpg", import.meta.url).href,
            label: "EXPRESS.JS",
          },
          {
            img: new URL("../assets/imgs/jquery-logo.PNG", import.meta.url).href,
            label: "",
            extraClass: "jq-logo",
          },
        ],
      },
    ],
  },
]);

let observer = null;

onMounted(() => {
  const container = document.querySelector(".small-container");
  const boxes = document.querySelectorAll(".box");

  if (!container) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          boxes.forEach((box, index) => {
            box.style.animationDelay = `${index * 0.15}s`;
            box.classList.add("fadeUp");
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="small-container">
    <div class="box-col" v-for="(col, cIndex) in boxColumns" :key="cIndex" :class="col.colClass">
      <div class="box" v-for="(box, bIndex) in col.boxes" :key="bIndex" :class="box.boxClass">
        <template v-if="box.isImageBox"></template>

        <template v-else>
          <div class="box-header">
            <h3>{{ box.title }}</h3>
          </div>

          <div class="box-content">
            <div class="group" v-for="(item, iIndex) in box.items" :key="iIndex">
              <img :src="item.img" class="logo-icon" :class="item.extraClass ?? ''" alt="logo" />
              <p class="img-title" v-if="item.label">{{ item.label }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.small-container {
  width: 85svw;
  height: 80%;

  background: var(--glassy-bg);
  backdrop-filter: var(--glassy-filter);
  border: var(--border);
  box-shadow: var(--box-shadow);
  display: flex;
  gap: 34px;
  padding: 34px;
  z-index: 999;
  scrollbar-width: none;
  border-radius: 89px;
}

.box-col {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 13px;
}

.box {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;
  padding: 34px;
  opacity: 0;
  transform: translateY(50px);
  border-radius: 55px;
}

.fadeUp {
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.box-1,
.box-5 {
  height: 60%;
}

.box-2,
.box-4 {
  height: 40%;
}

.box-3 {
  height: 400px;
  background-image: url(../assets/imgs/vahidAnimateProfile.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.logo-icon {
  width: 72px;
  height: 72px;
}

.jq-logo {
  scale: 2;
  margin-top: 8%;
}

.box-header h3 {
  font-family: "fontOne";
  font-size: 34px;
  color: #1a1a1a;
  text-align: center;
}

.box-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.img-title {
  font-family: "fontTwoThin";
  color: #666;
  font-size: 13px;
}

@media (400px < width <= 1100px) {
  .small-container {
    height: 85vh;
    overflow-y: scroll;
    flex-wrap: wrap;
  }
  .box-col-2 {
    height: 50%;
  }
  .box-3 {
    height: 100%;
  }
  .jq-logo {
    scale: 1;
  }
}

@media (992px < width <= 1100px) {
  .small-container {
    gap: 0;
  }
  .box-col-1 {
    flex-direction: row;
    padding: 0;
  }
  .box-col-3 {
    flex-direction: row;
    padding: 0;
  }
  .box-1 {
    width: 60%;
  }
  .box-2 {
    width: 40%;
    height: 60%;
  }
  .box-3 {
    width: 40%;
    background-size: contain;
  }
  .box-4 {
    height: 60%;
  }
}

@media (552px < width <= 992px) {
  .logo-icon {
    width: 144px;
    height: 144px;
  }
  .box-header h3 {
    font-size: 50px;
  }
  .box-3 {
    background-size: contain;
  }
}

@media (width <= 400px) {
  .small-container {
    height: 85vh;
    overflow-y: scroll;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .box-col-1 {
    height: 750px;
  }
  .box-col-3 {
    height: 650px;
  }
  .box-col {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .box-1 {
    height: 500px;
  }
  .box-2 {
    height: 250px;
  }
  .box-3 {
    height: 300px;
  }
  .box-4 {
    height: 250px;
  }
  .box-5 {
    height: 400px;
  }
}

@media (width <= 350px) {
  .box-col-1 {
    height: 850px;
  }
  .box-2 {
    height: 350px;
  }
}
</style>
