<template>
  <section class="impact-section text-white text-center py-5">
    <div class="container">
      <h2 class="fw-bold display-6 mb-3">O impacto da reciclagem e compostagem</h2>
      
      <p class="lead mb-5 mx-auto" style="max-width: 750px;">
        Pequenas ações podem gerar grandes impactos positivos para o meio ambiente. Veja o que suas práticas sustentáveis podem alcançar:
      </p>

      <div class="row g-4 justify-content-center">
        <div v-for="stat in impactStats" :key="stat.title" class="col-12 col-md-6 col-lg-3">
          <div class="stat-card h-100 d-flex flex-column align-items-center p-4 rounded-3">
            <div class="icon-wrapper mb-3" v-html="stat.icon"></div>
            <p class="stat-value fw-bold lh-1">{{ stat.value }}</p>
            <p class="fs-5 fw-semibold mb-2">{{ stat.title }}</p>
            <p class="small lh-sm">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const impactStats = ref([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`,
    value: '10.000L',
    title: 'de água economizados',
    description: 'para cada tonelada de papel reciclado',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V10m0-4V2m-4 8a4 4 0 1 0 8 0c0-2.2-1.8-4-4-4s-4 1.8-4 4zM8 14h8"></path></svg>`,
    value: '17 árvores',
    title: 'preservadas',
    description: 'para cada tonelada de papel reciclado',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`,
    value: '74%',
    title: 'menos poluição do ar',
    description: 'na reciclagem de alumínio vs. produção primária',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
    value: '30%',
    title: 'dos resíduos',
    description: 'podem virar adubo através da compostagem',
  },
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


.impact-section {
  background-color: #256428;
  font-family: 'Poppins', sans-serif;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.1); 
  transition: transform 0.2s ease-in-out;
}

.stat-card:hover {
  transform: translateY(-5px); 
}

.icon-wrapper :deep(svg) {
  width: 48px;
  height: 48px;
  stroke-width: 1.2;
}

.stat-value {
  font-size: 2.75rem;
}
</style>