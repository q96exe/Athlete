<template>
  <NuxtLayout>
    <div class="layout">
      <Sidebar />
      <main class="content">
        <NuxtPage />
      </main>
    </div>
  </NuxtLayout>
</template>
  
<script setup>
import Sidebar from '~/components/Sidebar.vue';
</script>
  
<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
  
.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}
</style>
  