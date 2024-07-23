<template>
    <Toast />
  </template>
  
  <script>
  import Toast from 'primevue/toast';
  
  export default {
    components: {
      Toast
    }
  };
  </script>
  
  <style scoped>
  /* Toast Custom Styles */
  .p-toast {
    position: fixed;
    top: 20px; /* Adjust as necessary */
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    animation: slide-in 0.5s ease-out, slide-out 0.5s ease-in forwards;
  }
  .p-toast-message {
    background: #faa91c;
    color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    padding: 1rem;
    display: flex;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    position: relative;
  }
  .p-toast-message-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  .p-toast-summary {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .p-toast-detail {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .p-toast-message-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
  }
  
  @keyframes slide-in {
    0% {
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-out {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
  }
  </style>
  