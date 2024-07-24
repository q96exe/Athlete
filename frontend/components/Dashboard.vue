<template>
    <div class="layout">
      <aside class="sidebar">
        <nav>
          <ul>
            <li><a href="#dashboard" @click.prevent="navigate('dashboard')">Dashboard</a></li>
          </ul>
        </nav>
      </aside>
      <main class="content">
        <component :is="currentComponent"></component>
      </main>
    </div>
  </template>
  
  <script>
  import Dashboard from './Dashboard.vue';
  
  export default {
    data() {
      return {
        currentComponent: 'Dashboard'
      };
    },
    components: {
      Dashboard,
    },
    methods: {
      navigate(component) {
        this.currentComponent = component.charAt(0).toUpperCase() + component.slice(1);
      },
      logout() {
        // Handle logout logic
      }
    }
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    padding: 20px;
    color: white;
  }
  
  .sidebar nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar nav ul li {
    margin-bottom: 20px;
  }
  
  .sidebar nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .sidebar nav ul li a:hover {
    text-decoration: underline;
  }
  
  .content {
    flex: 1;
    padding: 20px;
    background-color: #ecf0f1;
  }
  </style>
  