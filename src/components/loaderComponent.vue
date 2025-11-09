<script setup>
  document.addEventListener('DOMContentLoaded' , ()=> {
    const leftImg = document.querySelector('.left-img');
    const rightImg = document.querySelector('.right-img');
    const loaderContainer = document.querySelector('.loader');

    leftImg.classList.add('move-left');
    rightImg.classList.add('move-right');
    loaderContainer.classList.add('end-loader')
  })
</script>

<template>
  <div class="loader">
    <div class="left-img"></div>
    <div class="right-img"></div>
  </div>
</template>

<style>
  .loader {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #1a1a1a 0%, #12121c 100%);
    z-index: 99999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .left-img {
    width: 50%;
    height: 400px;
    background-image: url(../assets/imgs/left-hand.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    transition: all 1s ease;
  }

  .right-img {
    width: 50%;
    height: 400px;
    background-image: url(../assets/imgs/right-hand.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    transition: all 1s ease;
  }

  .move-left {
    animation: moveLeft 3s .5s ease-out forwards;
  }

  .move-right {
    animation: moveRight 3s .5s ease-out forwards;
  }

  .end-loader {
    animation: ending 1s 2s ease forwards ;
  }

  @keyframes moveLeft {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-1000px);
    }
  }

  @keyframes moveRight {
    0%{
      transform: translateX(0);
    }

    100%{
      transform: translateX(1000px);
    }
  }

  @keyframes ending {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }

  @media (width <= 552px) {
    .left-img {
      background-size: contain;
    }

    .right-img {
      background-size: contain;
    }
  }
</style>
