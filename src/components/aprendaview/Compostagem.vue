<template>
    <div>
        <section class="row mb-5 align-items-center">
            <div class="col-lg-7">
                <h2 class="section-title">O que é Compostagem?</h2>
                <p class="text-secondary">
                    A compostagem é um processo biológico de decomposição e reciclagem de matéria orgânica para formar
                    um composto rico em nutrientes que pode ser usado como fertilizante natural.
                </p>
                <p class="text-secondary">
                    Este processo transforma restos de alimentos, folhas, galhos e outros materiais orgânicos em um
                    adubo de alta qualidade, reduzindo significativamente a quantidade de resíduos enviados para aterros
                    sanitários.
                </p>
            </div>
            <div class="col-lg-5 mt-4 mt-lg-0">
                <div class="benefits-box">
                    <h5 class="fw-bold mb-3 d-flex align-items-center">
                        <span v-html="lightbulbIcon" class="me-2"></span>
                        Benefícios da Compostagem
                    </h5>
                    <ul class="list-unstyled">
                        <li v-for="benefit in beneficiosCompostagem" :key="benefit.text"
                            class="d-flex align-items-center mb-2">
                            <span v-html="benefit.icon" class="me-2 benefit-icon"></span>
                            {{ benefit.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="mb-5">
            <h2 class="section-title mb-4">O que pode e o que não pode ser compostado</h2>
            <div class="row g-4">
                <div class="col-lg-6 d-flex">
                    <div class="compost-list-card compost-pode flex-fill">
                        <h5 class="fw-bold d-flex align-items-center"><span v-html="checkIcon" class="me-2"></span>O que
                            PODE ser compostado</h5>
                        <div class="row mt-3">
                            <div class="col-sm-6">
                                <ul class="list-unstyled compost-list">
                                    <li v-for="item in podeCompostarCol1" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-unstyled compost-list">
                                    <li v-for="item in podeCompostarCol2" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex">
                    <div class="compost-list-card compost-nao-pode flex-fill">
                        <h5 class="fw-bold d-flex align-items-center"><span v-html="blockIcon" class="me-2"></span>O que
                            NÃO PODE ser compostado</h5>
                        <div class="row mt-3">
                            <div class="col-sm-6">
                                <ul class="list-unstyled compost-list">
                                    <li v-for="item in naoPodeCompostarCol1" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-unstyled compost-list">
                                    <li v-for="item in naoPodeCompostarCol2" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2 class="section-title mb-4">Como iniciar sua composteira doméstica</h2>
            <div class="row g-4">
                <div v-for="passo in passosComposteira" :key="passo.numero" class="col-md-6 col-lg-4 d-flex">
                    <div class="step-card flex-fill">
                        <div class="step-number">{{ passo.numero }}</div>
                        <div class="step-content">
                            <h6 class="fw-bold">{{ passo.titulo }}</h6>
                            <p class="mb-0">{{ passo.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// --- Ícones SVG ---
const lightbulbIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6 8.5a.5.5 0 0 0 .5-.5h-1a.5.5 0 0 0 .5.5z"/></svg>`);
const trashIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`);
const windIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`);
const plantIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-leaf"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`);
const checkIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#198754" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>`);
const blockIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#dc3545" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>`);

const beneficiosCompostagem = ref([
    { text: 'Produz adubo natural rico em nutrientes para plantas', icon: plantIcon.value },
    { text: 'Reduz até 30% do volume de resíduos domésticos', icon: trashIcon.value },
    { text: 'Diminui a produção de metano nos aterros sanitários', icon: windIcon.value }
]);

const podeCompostar = ref(['Cascas de frutas e vegetais', 'Sachês de chá', 'Restos de comida (sem óleo)', 'Folhas secas', 'Serragem pura', 'Papelão não impresso', 'Borra e filtro de café', 'Cascas de ovos', 'Pão velho', 'Grama cortada', 'Palitos de madeira', 'Papel sem tinta']);
const naoPodeCompostar = ref(['Carne, peixe e laticínios', 'Ossos', 'Plantas doentes', 'Cinzas de carvão', 'Plásticos biodegradáveis', 'Cigarros', 'Óleos e gorduras', 'Fezes de animais', 'Papel colorido', 'Produtos químicos', 'Madeira tratada', 'Medicamentos']);

const passosComposteira = ref([
    { numero: 1, titulo: 'Escolha o recipiente', descricao: 'Você pode usar baldes empilhados, uma composteira comercial ou construir uma caixa de madeira. O importante é que tenha ventilação e drenagem.' },
    { numero: 2, titulo: 'Prepare as camadas', descricao: 'Inicie com uma camada de material seco (folhas secas, serragem), seguida de uma camada de restos de alimentos, e cubra novamente com material seco.' },
    { numero: 3, titulo: 'Mantenha a umidade', descricao: 'A compostagem precisa de umidade para que os microorganismos trabalhem. A mistura deve estar úmida como uma esponja espremida, sem estar encharcada.' },
    { numero: 4, titulo: 'Revire regularmente', descricao: 'A cada semana, revire a mistura para garantir a aeração. Isso acelera o processo e evita odores desagradáveis.' },
    { numero: 5, titulo: 'Equilibre materiais', descricao: 'Mantenha um equilíbrio entre materiais ricos em carbono (secos) e em nitrogênio (úmidos) na proporção de aproximadamente 3:1.' },
    { numero: 6, titulo: 'Colha o composto', descricao: 'Em 3-6 meses, o composto estará pronto: escuro, com cheiro de terra e textura friável. Use-o em vasos, jardins ou hortas.' },
]);

const podeCompostarCol1 = computed(() => podeCompostar.value.slice(0, Math.ceil(podeCompostar.value.length / 2)));
const podeCompostarCol2 = computed(() => podeCompostar.value.slice(Math.ceil(podeCompostar.value.length / 2)));
const naoPodeCompostarCol1 = computed(() => naoPodeCompostar.value.slice(0, Math.ceil(naoPodeCompostar.value.length / 2)));
const naoPodeCompostarCol2 = computed(() => naoPodeCompostar.value.slice(Math.ceil(naoPodeCompostar.value.length / 2)));
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
    transition: all 0.2s ease-in-out; 
}

.benefits-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.07);
}

.benefit-icon {
    color: #198754;
}

.benefits-box :deep(svg) {
    min-width: 16px;
}

.compost-list-card {
    border-radius: 0.75rem;
    padding: 1.5rem;
    border: 1px solid #dee2e6;
    transition: all 0.2s ease-in-out; 
}

.compost-list-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.08);
}

.compost-list-card.compost-pode {
    border-top: 4px solid #198754;
}

.compost-list-card.compost-pode h5 {
    color: #198754;
}

.compost-list-card.compost-nao-pode {
    border-top: 4px solid #dc3545;
}

.compost-list-card.compost-nao-pode h5 {
    color: #dc3545;
}

.compost-list li {
    padding-left: 1.75rem;
    position: relative;
    margin-bottom: 0.5rem;
    color: #495057;
}

.compost-list li::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0.35rem;
}

.compost-pode .compost-list li::before {
    background-color: #198754;
}

.compost-nao-pode .compost-list li::before {
    background-color: #dc3545;
}

.step-card {
    background-color: #f8f9fa;
    border-left: 4px solid #198754;
    padding: 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: all 0.2s ease-in-out; 
}

.step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.08);
    border-color: #145a32; 
}

.step-number {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #198754;
    color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 1.25rem;
    font-weight: 700;
}

.step-content p {
    color: #6c757d;
    font-size: 0.95rem;
}
</style>