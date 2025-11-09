<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import imageOne from '../assets/imgs/Screenshot1.png'
import imageTwo from '../assets/imgs/pizzaCover.jpg'
import imageThree from '../assets/imgs/Screenshot14.png'

onMounted(() => {
    const sectionOne = document.querySelector('.section-one');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        sectionOne.style.opacity = scrollY > 200 ? 0 : 1;
    };

    window.addEventListener('scroll', handleScroll);

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
});

const cards = ref([
    {
        id: 1,
        image: imageOne,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
    {
        id: 2,
        image: imageTwo,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
    {
        id: 3,
        image: imageThree ,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
    {
        id: 4,
        image: imageOne,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
    {
        id: 5,
        image: imageTwo,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
    {
        id: 6,
        image: imageThree,
        title: 'Design Website UI For Online Shop',
        tags: ['WEBSITE', 'UI/UX']
    },
]);
</script>

<template>
    <section class="section-one">
        <h1>My Portfolios</h1>
        <h2>نمونه کار ها</h2>
    </section>

    <section class="section-hero"></section>

    <section class="section-two">
        <div v-for="card in cards" :key="card.id" class="card">
            <div class="card-content">
                <h3>{{ card.title }}</h3>
                <div class="card-tags">
                    <span class="tag" v-for="(tag, index) in card.tags" :key="index">{{ tag }}</span>
                </div>
            </div>

            <div class="card-img">
                <img :src='card.image' alt="Portfolios img" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-one {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/imgs/service-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    transition: opacity 1s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

h1 {
    font-size: clamp(3rem, 10vw, 8rem);
    font-family: 'fontOne', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
    font-size: clamp(3rem, 10vw, 8rem);
    font-family: 'fontFatwo', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.section-hero {
    width: 100vw;
    height: 100vh;
    position: relative;
    pointer-events: none;
}

.section-two {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 10rem 1rem 2rem;
}

.card {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 52px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card-content {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: .5rem;
}

.card-tags {
    display: flex;
    align-content: center;
    justify-content: start;
    gap: 1rem;
}

h3 {
    font-size: 16px;
    font-family: 'fontTwo', sans-serif;
}

.tag {
    padding: 4px 8px;
    font-family: 'fontTwo', sans-serif;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 12px;
}

.card-img {
    width: 200px;
    height: 150px;
    border-radius: 36px;
}

img {
    width: 100%;
    height: 100%;
    border-radius: 36px;
}
</style>