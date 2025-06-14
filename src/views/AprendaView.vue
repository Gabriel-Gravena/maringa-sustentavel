<template>
  <div class="container py-5">
    <div class="tabs-container mb-5">
      <button type="button" class="tab-button" :class="{ active: activeTab === 'reciclagem' }"
        @click="activeTab = 'reciclagem'">
        <span v-html="recycleIcon" class="icon-fix"></span> Reciclagem
      </button>
      <button type="button" class="tab-button" :class="{ active: activeTab === 'compostagem' }"
        @click="activeTab = 'compostagem'">
        <span v-html="compostIcon" class="icon-fix"></span> Compostagem
      </button>
    </div>

    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import ReciclagemConteudo from '../components/aprendaview/Reciclagem.vue';
import CompostagemConteudo from '../components/aprendaview/Compostagem.vue';

const activeTab = ref('reciclagem');

const recycleIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16"><path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.532 4.431 1.704-2.982a.5.5 0 0 1 .868-.497l-1.703 2.981a.5.5 0 0 0 .869.497l2.54-4.444-1.256.337a.5.5 0 1 0 .26.966l2.415-.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431z"/></svg>`);
const compostIcon = ref(`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-leaf" viewBox="0 0 16 16"><path d="M8.414.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .707l-1.147 1.146a.5.5 0 0 1-.708-.708L10.293 3 8 1.414 5.707 3 4.561 4.146a.5.5 0 1 1-.707-.707l2.5-2.5a.5.5 0 0 1 .707 0zM12.146 5.854a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1 0 .707l-4.5 4.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8.293 10l3.147-3.146a.5.5 0 0 1 .707 0zM1 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>`);

const components = {
  reciclagem: ReciclagemConteudo,
  compostagem: CompostagemConteudo,
};

const activeComponent = computed(() => components[activeTab.value]);

</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.tab-button {
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #6c757d;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.tab-button.active {
  background-color: #3ca041;
  color: #dbfcdc;
  border-color: #e9ecef;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.tab-button:not(.active):hover {
  color: #343a40;
}

.icon-fix {
  display: inline-flex;
  align-self: center;
}
</style>