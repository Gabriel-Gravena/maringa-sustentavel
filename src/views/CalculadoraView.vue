<template>
    <div class="container py-5">
        <div class="calculator-wrapper mx-auto">
            <div class="text-center mb-5">
                <h2 class="section-title">Calculadora de Impacto Ambiental</h2>
                <p class="text-secondary">
                    Descubra o impacto positivo que suas ações de reciclagem geram para o planeta. Insira a quantidade
                    de
                    materiais que você reciclou (em quilogramas).
                </p>
            </div>

            <form @submit.prevent="calcularImpacto">
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-text icon-wrapper bg-primary text-white">
                                <span v-html="paperIcon"></span>
                            </span>
                            <div class="form-floating">
                                <input type="number" class="form-control" id="papel" placeholder="Papel (kg)"
                                    v-model.number="inputs.papel" min="0" step="0.1">
                                <label for="papel">Papel e Papelão (kg)</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-text icon-wrapper bg-danger text-white">
                                <span v-html="plasticIcon"></span>
                            </span>
                            <div class="form-floating">
                                <input type="number" class="form-control" id="plastico" placeholder="Plástico (kg)"
                                    v-model.number="inputs.plastico" min="0" step="0.1">
                                <label for="plastico">Plástico (kg)</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-text icon-wrapper bg-success text-white">
                                <span v-html="glassIcon"></span>
                            </span>
                            <div class="form-floating">
                                <input type="number" class="form-control" id="vidro" placeholder="Vidro (kg)"
                                    v-model.number="inputs.vidro" min="0" step="0.1">
                                <label for="vidro">Vidro (kg)</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-text icon-wrapper bg-warning text-white">
                                <span v-html="metalIcon"></span>
                            </span>
                            <div class="form-floating">
                                <input type="number" class="form-control" id="metal" placeholder="Metal (kg)"
                                    v-model.number="inputs.metal" min="0" step="0.1">
                                <label for="metal">Metal (Alumínio e Aço) (kg)</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-grid mt-4">
                    <button type="submit" class="btn btn-primary btn-lg">
                        <span v-html="calculatorIcon" class="me-2"></span>
                        Calcular meu impacto
                    </button>
                </div>
            </form>

            <transition name="fade">
                <div v-if="resultadoVisivel" class="results-wrapper mt-5">
                    <h3 class="text-center mb-4 section-title">Seu impacto positivo:</h3>
                    <div class="row g-4">
                        <div class="col-12 col-md-6 col-lg-3 d-flex">
                            <div class="result-card">
                                <div class="result-icon" v-html="waterDropIcon"></div>
                                <div class="result-value">{{ formatNumber(resultados.agua) }}</div>
                                <div class="result-label">Litros de água economizados</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 d-flex">
                            <div class="result-card">
                                <div class="result-icon" v-html="energyIcon"></div>
                                <div class="result-value">{{ formatNumber(resultados.energia) }}</div>
                                <div class="result-label">kWh de energia economizados</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 d-flex">
                            <div class="result-card">
                                <div class="result-icon" v-html="co2Icon"></div>
                                <div class="result-value">{{ formatNumber(resultados.co2) }}</div>
                                <div class="result-label">kg de CO₂ evitados</div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 d-flex">
                            <div class="result-card">
                                <div class="result-icon" v-html="treeIcon"></div>
                                <div class="result-value">{{ formatNumber(resultados.arvores, 3) }}</div>
                                <div class="result-label">Árvores salvas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputs = ref({
    papel: null,
    plastico: null,
    vidro: null,
    metal: null,
});

const resultados = ref({
    agua: 0,
    energia: 0,
    co2: 0,
    arvores: 0,
});

const resultadoVisivel = ref(false);

const fatores = {
    papel: { agua: 26.5, energia: 4.1, co2: 0.9, arvores: 0.017 },
    plastico: { agua: 0, energia: 5.7, co2: 1.5, arvores: 0 },
    vidro: { agua: 0, energia: 0.6, co2: 0.3, arvores: 0 },
    metal: { agua: 0, energia: 14, co2: 9.1, arvores: 0 },
};

const calcularImpacto = () => {
    const totalKg = Object.values(inputs.value).reduce((sum, val) => sum + (val || 0), 0);

    if (totalKg <= 0) {
        resultadoVisivel.value = false;
        return;
    }

    resultados.value = { agua: 0, energia: 0, co2: 0, arvores: 0 };

    for (const material in inputs.value) {
        const quantidade = inputs.value[material] || 0;
        if (quantidade > 0) {
            resultados.value.agua += quantidade * fatores[material].agua;
            resultados.value.energia += quantidade * fatores[material].energia;
            resultados.value.co2 += quantidade * fatores[material].co2;
            resultados.value.arvores += quantidade * fatores[material].arvores;
        }
    }

    resultadoVisivel.value = true;
};

const formatNumber = (num, precision = 2) => {
    if (num === 0) return '0';
    const roundedNum = parseFloat(num.toFixed(precision));
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: precision }).format(roundedNum);
};

const paperIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`);
const plasticIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3l-1-2.5a2.5 2.5 0 0 0-5 0L3 9c-.5 1-1 1.62-1 3a2.5 2.5 0 0 0 2.5 2.5h3zm7.5-1.03V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5.53"></path></svg>`);
const glassIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 3v9a5 5 0 0 0 10 0V3"></path></svg>`);
const metalIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path></svg>`);
const calculatorIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16"><path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/><path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/></svg>`);
const waterDropIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>`);
const energyIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`);
const co2Icon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.61 16.95A5 5 0 0 0 18 15h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path></svg>`);
const treeIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V10m0-4V2m-4 8a4 4 0 1 0 8 0c0-2.2-1.8-4-4-4s-4 1.8-4 4zM8 14h8"></path></svg>`);
</script>

<style scoped>
.calculator-wrapper {
    max-width: 800px;
}

.section-title {
    font-weight: 700;
    color: #212529;
}

.icon-wrapper {
    padding: 0 1.25rem;
    display: grid;
    place-items: center;
}

.icon-wrapper :deep(svg) {
    width: 24px;
    height: 24px;
}

.btn-primary {
    background-color: #4CAF50;
    border-color: #4CAF50;
    padding: 0.75rem;
    font-weight: 600;
}

.btn-primary:hover {
    background-color: #45a049;
    border-color: #45a049;
}

.results-wrapper {
    background-color: #f8f9fa;
    border-radius: 0.75rem;
    padding: 2rem;
    border: 1px solid #e9ecef;
}

.result-card {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 1rem;
    text-align: center;
    border-bottom: 4px solid #4CAF50;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    width: 100%;
}

.result-card:hover {
    transform: translateY(-5px);
}

.result-icon {
    margin-bottom: 0.5rem;
    display: block;
    line-height: 1;
}

.result-icon :deep(svg) {
    width: 40px;
    height: 40px;
    color: #4CAF50;
}

.result-value {
    font-size: 2rem;
    font-weight: 700;
    color: #212529;
    line-height: 1.2;
}

.result-label {
    color: #6c757d;
    font-weight: 500;
    font-size: 0.9rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
