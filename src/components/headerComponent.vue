<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted , onBeforeUnmount} from 'vue';
import directionDown from './icons/direction-down.vue';

const isHidden = ref(false);
let lastScrollY = window.scrollY;

const handleScroll = ()=> {
  const currentScrollY = window.scrollY;
  if ( currentScrollY > window.innerHeight ) {
    isHidden.value = currentScrollY > lastScrollY
  } else {
    isHidden.value = false
  }
  lastScrollY = currentScrollY
}

const mobileNav = ref('close');
let showNavButton = null;
let mobileNavMenu = null;

onMounted(() => {
  showNavButton = document.querySelector('.show-nav-button');
  mobileNavMenu = document.querySelector('.mobile-navbar-menu');

  if (showNavButton && mobileNavMenu) {
    showNavButton.addEventListener('click', () => {
      if (mobileNav.value === 'close') {
        mobileNavMenu.classList.add('show-mobile-nav');
        mobileNavMenu.classList.remove('close-mobile-nav');
        mobileNav.value = 'open';
      } else {
        mobileNavMenu.classList.add('close-mobile-nav');
        mobileNavMenu.classList.remove('show-mobile-nav');
        mobileNav.value = 'close';
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
}
);

onBeforeUnmount(()=> {
  window.removeEventListener('scroll' ,handleScroll);
})
</script>

<template>
  <section class="mobile-navbar">
    <div class="mobile-navbar-menu"></div>
    <div class="show-nav-button">
      <directionDown />
    </div>
  </section>

  <nav class="header" :class="{ hide : isHidden }">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/About" class="link">About</router-link>
    <router-link to="/Portfolios" class="link">Portfolios</router-link>
    <a class="link">Services</a>
  </nav>
</template>

<style>
.mobile-navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.mobile-navbar-menu {
  width: 300px;
  border-radius: 24px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(1rem);
  overflow: hidden;
  position: absolute;
  top: 0;
}

.show-nav-button {
  width: 144px;
  height: 34px;
  border-radius: 4px 4px 24px 24px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.show-mobile-nav {
  animation: showMobileNav 0.5s ease-in forwards;
}

.close-mobile-nav {
  animation: closeMobileNav 0.5s ease-in forwards;
}

@keyframes showMobileNav {
  0% {
    height: 0;
  }
  50% {
    height: 150px;
  }
  100% {
    height: 300px;
  }
}

@keyframes closeMobileNav {
  0% {
    height: 300px;
  }
  50% {
    height: 150px;
  }
  100% {
    height: 0px;
  }
}

.header {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 34px;
  margin-top: 2rem;
  position: fixed;
  z-index: 9999;
  padding-right: 34px;
  transition: opacity 1s ease;
}

.header.hide {
  opacity: 0;
}

.link {
  font-size: 34px;
  color: #fff;
  font-family: "fontOne", sans-serif;
  cursor: pointer;
  z-index: 99;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .3);
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background-color: #fff;
  transform: translateY(8px);
}

.link:hover::after {
  animation: showLine 0.5s ease-out forwards;
}

@keyframes showLine {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/* Responsive rules */
@media (min-width: 553px) {
  .mobile-navbar {
    display: none;
  }
}

@media (max-width: 552px) {
  .header {
    display: none;
  }
}
</style>
