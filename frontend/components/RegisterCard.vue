<template>
    <div class="card">
      <CustomToast />
      <div class="card-content">
        <div class="content">
          <h3 class="title">Registrieren</h3>
          <form @submit.prevent="register">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" v-model="name" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="text" v-model="email" />
              </div>
            </div>
            <div class="field">
              <label class="label">Passwort</label>
              <div class="control">
                <input class="input" type="password" v-model="password" />
              </div>
            </div>
            <div class="field">
              <label class="label">Passwort bestätigen</label>
              <div class="control">
                <input class="input" type="password" v-model="confirmPassword" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit">Registrieren</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useToast } from 'primevue/usetoast';
  import CustomToast from './CustomToast.vue';
  
  export default {
    components: {
      CustomToast
    },
    setup() {
      const toast = useToast();
      return { toast };
    },
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        let hasError = false;
  
        if (!this.name) {
          this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Bitte geben Sie Ihren Namen ein.', life: 3000 });
          hasError = true;
        }
  
        if (!this.email.includes('@')) {
          this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Bitte geben Sie eine gültige Email-Adresse ein.', life: 3000 });
          hasError = true;
        }
  
        if (!this.password) {
          this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Bitte geben Sie ein Passwort ein.', life: 3000 });
          hasError = true;
        }
  
        if (this.password !== this.confirmPassword) {
          this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Die Passwörter stimmen nicht überein.', life: 3000 });
          hasError = true;
        }
  
        if (!hasError) {
          // Registrierungslogik hier
          console.log('Registering with', this.name, this.email, this.password);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 400px;
    margin: 2rem auto;
  }
  </style>
  