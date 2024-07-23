<template>
  <div class="card">
    <CustomToast />
    <div class="card-content">
      <div class="content">
        <h3 class="title">Login</h3>
        <form @submit.prevent="login">
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
            <div class="control">
              <button class="button is-primary" type="submit">Login</button>
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
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      let hasError = false;

      if (!this.email.includes('@')) {
        this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Bitte geben Sie eine gültige Email-Adresse ein.', life: 3000 });
        hasError = true;
      }

      if (!this.password) {
        this.toast.add({ severity: 'danger', summary: 'Fehler', detail: 'Bitte geben Sie ein Passwort ein.', life: 3000 });
        hasError = true;
      }

      if (!hasError) {
        // Login logic here
        console.log('Logging in with', this.email, this.password);
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
