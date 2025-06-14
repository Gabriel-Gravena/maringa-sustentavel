<template>
  <section class="hero-section d-flex align-items-center text-white text-center">
    <div class="container">
      <h1 class="display-3 fw-bold">Maringá Sustentável</h1>

      <p class="lead my-4 mx-auto" style="max-width: 600px;">
        Transformando nossa cidade através da reciclagem e compostagem para um futuro mais sustentável.
      </p>

      <div class="d-grid gap-3 d-md-flex justify-content-center">
        <RouterLink to="/pontos-de-coleta" class="btn btn-hero-primary btn-lg px-4">
          Encontrar pontos de coleta
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const arrowIcon = ref(
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3-3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>`
);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.hero-section {
  background-image: url('https://embraed-empreendimentos.s3.sa-east-1.amazonaws.com/uploaded_files/2023/12/14-09-blog-maringa-thumb.jpg');
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.btn-hero-primary {
  background-color: #4CAF50;
  border-color: #4CAF50;
  color: #ffffff;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.btn-hero-primary:hover {
  background-color: #45a049;
  border-color: #45a049;
  transform: translateY(-2px);
}

.btn :deep(svg) {
  vertical-align: middle;
}
</style>