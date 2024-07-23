<template>
  <div>
    <section class="hero">
      <div class="content">
        <h1>Revolutionize Your League Management</h1>
        <p>Create, manage, and join leagues with ease.</p>
        <button class="button">Get Started</button>
      </div>
      <div class="triangles" ref="trianglesContainer">
        <div class="triangle" v-for="n in 20" :key="n" :style="triangleStyle(n)"></div>
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
  </div>
</template>

<script>
export default {
  mounted() {
    // Dreiecke werden nach dem Laden der Seite aktiviert
    this.$nextTick(() => {
      const triangles = this.$refs.trianglesContainer.querySelectorAll('.triangle');
      triangles.forEach(triangle => {
        triangle.style.animationPlayState = 'running';
      });
    });
  },
  methods: {
    triangleStyle(n) {
      return {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 10}s`,
        animationPlayState: 'paused'
      };
    }
  }
}
</script>

<style scoped>
/* Styles are handled in the main.css */
</style>
