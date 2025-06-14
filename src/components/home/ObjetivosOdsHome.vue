<template>
  <section class="ods-section">
    <div class="container text-center">
      <h2 class="section-title">Objetivos de Desenvolvimento Sustentável 11</h2>
      <p class="section-subtitle">
        O ODS 11 tem como objetivo tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.
      </p>

      <div class="row justify-content-center gy-4">
        <div v-for="meta in metasOds" :key="meta.numero" class="col-lg-4 col-md-6 d-flex">
          <div class="ods-card">
            <div class="card-content">
              <div class="card-header">
                <span class="meta-number">{{ meta.numero }}</span>
                <h5 class="meta-title">{{ meta.titulo }}</h5>
              </div>
              <p class="meta-description">
                {{ meta.descricao }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <a href="https://brasil.un.org/pt-br/sdgs/11" target="_blank" class="btn btn-outline-secondary">
          Ver todos os objetivos da ODS 11 →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const metasOds = ref([
  {
    numero: '11.6',
    titulo: 'Reduzir impacto ambiental das cidades',
    descricao: 'Reduzir o impacto ambiental negativo per capita das cidades, incluindo prestando especial atenção à qualidade do ar, gestão de resíduos municipais e outros.'
  },
  {
    numero: '11.3',
    titulo: 'Urbanização sustentável',
    descricao: 'Aumentar a urbanização inclusiva e sustentável, e as capacidades para o planejamento e gestão de assentamentos humanos participativos.'
  },
  {
    numero: '11.7',
    titulo: 'Espaços públicos verdes',
    descricao: 'Proporcionar o acesso universal a espaços públicos seguros, inclusivos, acessíveis e verdes, particularmente para mulheres e crianças, pessoas idosas e pessoas com deficiência.'
  }
]);
</script>

<style scoped>
.ods-section {
  background-color: #f8f9fa; 
  padding: 4rem 0;
  font-family: 'Poppins', sans-serif;
}

.section-title {
  font-weight: 700;
  color: #212529;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto 3rem auto;
}

.ods-card {
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: left;
  width: 100%;
  transition: all 0.2s ease-in-out;
  display: flex; 
}

.ods-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
}

.card-content {
  border-left: 4px solid #4CAF50; 
  padding-left: 1.5rem;
  width: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.meta-number {
  border: 1px solid #4caf50a6;
  color: #198754;
  background-color: #eef7f2;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;
  margin-right: 0.75rem;
  white-space: nowrap;
}

.meta-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 0;
}

.meta-description {
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 0;
}
</style>