<template>
    <div>
      <CustomToast />
      <nav class="navbar">
        <div class="navbar-end">
          <div class="buttons">
            <a class="button is-light" @click="showLogin = true">Login</a>
            <a class="button is-primary" @click="showRegister = true">Registrieren</a>
          </div>
        </div>
      </nav>
      <section class="hero">
        <div class="content">
          <h1>Revolutionize Your League Management</h1>
          <p>Create, manage, and join leagues with ease.</p>
          <button class="button">Get Started</button>
        </div>
        <div class="triangles" ref="trianglesContainer">
          <div class="triangle" v-for="(triangle, index) in triangles" :key="index" :style="triangle.style"></div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="feature">
            <div class="text">
              <h2>Easy League Creation</h2>
              <p>Create leagues in minutes with our intuitive interface. Manage teams, schedules, and standings all in one place.</p>
            </div>
            <img src="/static/example.jpg" alt="Easy League Creation">
          </div>
          <div class="feature">
            <img src="/static/example.jpg" alt="Team Management">
            <div class="text">
              <h2>Seamless Team Management</h2>
              <p>Effortlessly manage team rosters, track player statistics, and communicate with team members.</p>
            </div>
          </div>
          <div class="feature">
            <div class="text">
              <h2>Comprehensive Analytics</h2>
              <p>Get detailed insights into league performance with our comprehensive analytics tools.</p>
            </div>
            <img src="/static/example.jpg" alt="Comprehensive Analytics">
          </div>
        </div>
      </section>
  
      <div v-if="showLogin" class="modal is-active">
        <div class="modal-background" @click="showLogin = false"></div>
        <div class="modal-content">
          <LoginCard />
        </div>
        <button class="modal-close is-large" aria-label="close" @click="showLogin = false"></button>
      </div>
  
      <div v-if="showRegister" class="modal is-active">
        <div class="modal-background" @click="showRegister = false"></div>
        <div class="modal-content">
          <RegisterCard />
        </div>
        <button class="modal-close is-large" aria-label="close" @click="showRegister = false"></button>
      </div>
    </div>
  </template>
  
  <script>
  import LoginCard from './LoginCard.vue';
  import RegisterCard from './RegisterCard.vue';
  import { ref, onMounted } from 'vue';
  import CustomToast from './CustomToast.vue';
  
  export default {
    components: {
      LoginCard,
      RegisterCard,
      CustomToast
    },
    setup() {
      const showLogin = ref(false);
      const showRegister = ref(false);
      const triangles = ref([]);
  
      const generateRandomStyle = () => ({
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 10}s`,
        animationPlayState: 'paused'
      });
  
      onMounted(() => {
        for (let i = 0; i < 30; i++) {
          triangles.value.push({ style: generateRandomStyle() });
        }
  
        setTimeout(() => {
          const triangleElements = document.querySelectorAll('.triangle');
          triangleElements.forEach(triangle => {
            triangle.style.animationPlayState = 'running';
          });
        }, 100);
      });
  
      return {
        showLogin,
        showRegister,
        triangles
      };
    }
  };
  </script>  