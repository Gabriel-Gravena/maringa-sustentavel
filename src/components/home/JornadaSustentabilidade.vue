<template>
  <section class="jornada-section">
    <div class="container text-center py-5">
      <h2 class="fw-bold mb-3 display-6">
        Comece sua jornada de sustentabilidade
      </h2>
      
      <p class="lead text-secondary mb-4 mx-auto" style="max-width: 650px;">
        Juntos, podemos transformar Maringá em uma cidade mais sustentável. Aprenda sobre reciclagem e compostagem, encontre pontos de coleta e participe dos desafios mensais.
      </p>

      <div class="d-grid gap-3 d-sm-flex justify-content-center">
        <RouterLink to="/aprenda" class="btn btn-green-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center">
          Aprenda como reciclar
          <span v-html="arrowIcon" class="ms-2"></span>
        </RouterLink>

        <RouterLink to="/calculadora" class="btn btn-green-secondary btn-lg px-4">
          Calcule seu impacto
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.jornada-section {
  background-color: #f4f8f2;
  font-family: 'Poppins', sans-serif;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

h2 {
  color: #0d3d23;
}

.btn-green-primary,
.btn-green-secondary {
  background-color: #4CAF50;
  color: #ffffff;
  border: 1px solid #4CAF50;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.btn-green-primary:hover,
.btn-green-secondary:hover {
  background-color: #45a049;
  border-color: #45a049;
  transform: translateY(-2px);
}

.btn :deep(svg) {
  vertical-align: middle;
}
</style>