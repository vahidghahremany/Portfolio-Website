<script setup>
import { onMounted, onUnmounted } from "vue";
import interactiveIcon from "@/components/icons/interactiveIcon.vue";

onMounted(() => {
  const sectionOne = document.querySelector(".section-one");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    sectionOne.style.opacity = scrollY > 250 ? 0 : 1;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <div class="left-side">
    <h3>PROGRAMER</h3>
    <h3>DESIGNER</h3>
  </div>
  <div class="right-side">
    <div class="right-side-content">
      <h1>Hi, I'm Vahid</h1>
      <p>
        I am a programmer and I designed this website to introduce myself and showcase my work. Here
        you can see my skills, projects, and contact information.
      </p>
      <div>
        <button type="button">
          <span>CONTACT ME</span>
          <interactiveIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-side,
.right-side {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 34px;
}

.left-side {
  width: 60%;
}

.right-side {
  width: 40%;
}

.right-side-content {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @supports (corner-shape: squircle) {
    border-radius: 89px;
    corner-shape: squircle;
  }
}

.left-side h3 {
  font-size: clamp(34px, 144px, 144px);
  font-family: "fontOne";
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: clamp(34px, 144px, 55px);
  font-family: "fontOne", sans-serif;
  margin-bottom: 13px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: #d3d3d3;
}

.right-side p {
  font-family: "fontTwoThin", sans-serif;
  font-size: 21px;
  line-height: 27.3px;
  margin-bottom: 21px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@media (992px < width <= 1100px) {
  .right-side {
    margin-left: 0;
  }
}

@media (552px < width <= 992px) {
  .section-one {
    flex-direction: column;
  }
  .left-side h3 {
    display: none;
  }
  .right-side {
    width: 100%;
    margin-left: 0;
  }
}

@media (width <= 552px) {
  .section-one {
    flex-direction: column;
    background-position: -200px 0;
  }
  .left-side h3 {
    display: none;
  }
  .right-side {
    width: 100%;
    margin-left: 0;
  }
}

@media (width < 390px) {
  .right-side {
    padding: 0 1rem;
  }
  .right-side p {
    line-height: 30px;
  }
}
</style>
