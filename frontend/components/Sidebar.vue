<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li :class="{ active: isActive('dashboard') }">
            <NuxtLink to="/dashboard" @click="setActive('dashboard')">
              <span class="icon">🏠</span>
              <span class="text">Dashboard</span>
            </NuxtLink>
          </li>
          <li :class="{ active: isActive('profile') }">
            <NuxtLink to="/profile" @click="setActive('profile')">
              <span class="icon">👤</span>
              <span class="text">Profile</span>
            </NuxtLink>
          </li>
          <li :class="{ active: isActive('notifications') }">
            <NuxtLink to="/notifications" @click="setActive('notifications')">
              <span class="icon">🔔</span>
              <span class="text">Notifications</span>
            </NuxtLink>
          </li>
          <li>
            <a @click="logout">
              <span class="icon">🚪</span>
              <span class="text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeItem = ref('dashboard');
  
  const setActive = (item) => {
    activeItem.value = item;
  };
  
  const isActive = (item) => {
    return activeItem.value === item;
  };
  
  const logout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .sidebar nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar nav ul li {
    margin-bottom: 20px;
    position: relative;
  }
  
  .sidebar nav ul li a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .sidebar nav ul li a:hover {
    background-color: #34495e;
  }
  
  .sidebar nav ul li.active a,
  .sidebar nav ul li a:focus {
    background-color: #faa91c;
    color: #2c3e50;
  }
  
  .sidebar nav ul li a .icon {
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  .sidebar nav ul li a .text {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .sidebar nav ul li.active:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    background-color: #faa91c;
    left: 0;
    top: 0;
  }
  </style>
  