<template>
  <div>
    <section class="row mb-5 align-items-center">
      <div class="col-lg-7">
        <h2 class="section-title">O que é Reciclagem?</h2>
        <p class="text-secondary">
          A reciclagem é o processo de transformação de materiais usados em novos produtos para evitar o desperdício de
          materiais potencialmente úteis, reduzir o consumo de matérias-primas, energia e poluição do ar e da água.
        </p>
        <p class="text-secondary">
          Reciclar é diferente de reutilizar. Enquanto a reutilização usa o produto novamente sem alterá-lo
          significativamente, a reciclagem processa o material para criar novos produtos.
        </p>
      </div>
      <div class="col-lg-5 mt-4 mt-lg-0">
        <div class="benefits-box">
          <h5 class="fw-bold mb-3 d-flex align-items-center">
            <span v-html="lightbulbIcon" class="me-2"></span>
            Benefícios da Reciclagem
          </h5>
          <ul class="list-unstyled">
            <li v-for="benefit in beneficiosReciclagem" :key="benefit.text" class="d-flex align-items-center mb-2">
              <span v-html="benefit.icon" class="me-2 benefit-icon"></span>
              {{ benefit.text }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title mb-4">Como separar materiais recicláveis</h2>
      <div class="row g-4">
        <div v-for="material in materiais" :key="material.titulo" class="col-md-6 col-lg-4 d-flex">
          <div class="material-card flex-fill" :style="{ borderTopColor: material.cor }">
            <h5 class="fw-bold d-flex align-items-center">
              <span class="material-dot me-2" :style="{ backgroundColor: material.cor }"></span>
              {{ material.titulo }}
            </h5>
            <div class="card-content">
              <strong>O que incluir:</strong>
              <ul class="mt-2">
                <li v-for="item in material.inclui" :key="item">{{ item }}</li>
              </ul>
              <strong>Dicas:</strong>
              <p class="mt-2 tips">{{ material.dicas }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- Ícones SVG ---
const lightbulbIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6 8.5a.5.5 0 0 0 .5-.5h-1a.5.5 0 0 0 .5.5z"/></svg>`);
const waterIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`);
const trashIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`);
const windIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`);

// --- Dados de Conteúdo ---
const beneficiosReciclagem = ref([
  { text: 'Economiza água e energia na produção de novos materiais', icon: waterIcon.value },
  { text: 'Reduz a quantidade de resíduos enviados para aterros sanitários', icon: trashIcon.value },
  { text: 'Diminui a emissão de gases do efeito estufa', icon: windIcon.value }
]);

const materiais = ref([
  {
    titulo: 'Papel e Papelão', cor: '#0d6efd',
    inclui: ['Jornais e revistas', 'Caixas de papelão', 'Folhas de papel', 'Envelopes', 'Livros', 'Cadernos'],
    dicas: 'Remova fitas adesivas, grampos e clipes. Papéis engordurados não são recicláveis.'
  },
  {
    titulo: 'Plástico', cor: '#dc3545',
    inclui: ['Garrafas PET', 'Embalagens de produtos de limpeza', 'Potes de alimentos', 'Sacolas plásticas', 'Tubos e canos', 'Brinquedos sem componentes de outros materiais'],
    dicas: 'Lave levemente para remover resíduos. Tampas podem ser recicladas separadamente.'
  },
  {
    titulo: 'Vidro', cor: '#198754',
    inclui: ['Garrafas de bebidas', 'Potes de conservas', 'Frascos de perfumes', 'Copos e taças', 'Vidros de janelas'],
    dicas: 'Separe as tampas e lave os recipientes. Vidros de janelas e espelhos devem ser separados.'
  },
  {
    titulo: 'Metal', cor: '#ffc107',
    inclui: ['Latas de alumínio', 'Latas de aço (conservas)', 'Tampas de metal', 'Panelas sem cabo', 'Ferragens', 'Arames'],
    dicas: 'Latas de alimentos devem ser lavadas. Peças grandes devem ser levadas diretamente a sucateiros.'
  },
  {
    titulo: 'Eletrônicos', cor: '#6f42c1',
    inclui: ['Computadores', 'Celulares', 'Impressoras', 'Televisores', 'Pilhas e baterias', 'Eletrodomésticos'],
    dicas: 'Estes itens contêm substâncias tóxicas e devem ser levados a pontos de coleta específicos.'
  },
  {
    titulo: 'Não Recicláveis', cor: '#6c757d',
    inclui: ['Papel higiênico e guardanapos usados', 'Fotografias', 'Papel-carbono', 'Adesivos', 'Espelhos', 'Cerâmicas e porcelanas'],
    dicas: 'Estes materiais não são recicláveis e devem ser descartados no lixo comum.'
  }
]);
</script>

<style scoped>
.section-title {
  font-weight: 700;
  color: #212529;
}

.benefits-box {
  background-color: #eef7f2;
  border-radius: 0.75rem;
  padding: 1.5rem;
  color: #3d5245;
}

.benefit-icon {
  color: #198754;
}

.benefits-box :deep(svg) {
  min-width: 16px;
}

.material-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-top-width: 4px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.material-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
}

.material-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: inline-block;
}

.card-content {
  font-size: 0.95rem;
  color: #6c757d;
}

.card-content ul {
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}

.card-content .tips {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0;
}
</style>