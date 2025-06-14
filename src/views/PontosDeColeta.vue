<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-8 mb-4 mb-lg-0">
        <div class="map-container">
          <l-map ref="map" v-model:zoom="zoom" :center="mapCenter">
            <l-tile-layer :url="tileUrl" :attribution="attribution"></l-tile-layer>
            <l-marker v-for="ponto in filteredPontos" :key="ponto.id" :lat-lng="ponto.latlng" :icon="getIconForPonto(ponto)">
              <l-tooltip>
                <div class="map-tooltip">
                  <strong>{{ ponto.nome }}</strong>
                </div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="sidebar">
          <h4 class="sidebar-title">Pontos de Coleta</h4>
          <div class="filter-buttons mb-3">
            <button v-for="cat in categorias" :key="cat.id" class="btn btn-sm me-2 mb-2"
              :class="activeCategory === cat.id ? 'btn-success' : 'btn-outline-secondary'"
              @click="activeCategory = cat.id">
              {{ cat.nome }}
            </button>
          </div>
          <div class="list-container">
            <div v-if="filteredPontos.length > 0">
              <div v-for="ponto in filteredPontos" :key="ponto.id" class="location-card"
                :style="{ borderLeftColor: categoryStyles[ponto.categoria]?.color || '#6c757d' }"
                @click="panTo(ponto.latlng)">
                <h6 class="location-name">{{ ponto.nome }}</h6>
                <p class="location-address">{{ ponto.endereco }}</p>
                <div v-if="ponto.telefone" class="location-phone">
                  <strong>Telefone:</strong> {{ ponto.telefone }}
                </div>
              </div>
            </div>
            <div v-else class="text-center p-4">
              <p class="text-secondary">Nenhum ponto encontrado para esta categoria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';

const accessToken = 'z4AYDht6AOBeX2VQjmA4b2TkOPELpBr8HwWNgJnBQLErLt89eJ8vFn0djbk9Kbwp';

const tileUrl = `https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${accessToken}`;
const attribution = '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const zoom = ref(13);
const map = ref(null);
const mapCenter = ref([-23.4253, -51.9386]);

const panTo = (latlng) => {
  if (map.value && map.value.leafletObject) {
    map.value.leafletObject.flyTo(latlng, 16, {
      animate: true,
      duration: 1.5
    });
  }
};

const categoryStyles = {
  ecoponto: { color: '#fd7e14' },
  eletronicos: { color: '#6f42c1' },
  cooperativa: { color: '#0d6efd' },
  oleo: { color: '#198754' },
  baterias: { color: '#dc3545' },
  entulho: { color: '#6c757d' },
};

const createColoredIcon = (color = '#6c757d') => {
  const markerHtml = `
    <div style="position: relative; width: 32px; height: 32px; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.4));">
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path d="M16,32 C16,32 30,20 30,12 C30,5.37 23.63,0 16,0 C8.37,0 2,5.37 2,12 C2,20 16,32 16,32 Z"
          fill="${color}"
          stroke="#FFFFFF"
          stroke-width="2"
        />
      </svg>
    </div>`;
  return L.divIcon({
    html: markerHtml,
    className: "custom-div-icon",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    tooltipAnchor: [0, -32],
  });
};

const iconCache = {};
const getIconForPonto = (ponto) => {
  const color = categoryStyles[ponto.categoria]?.color;
  if (!iconCache[color]) {
    iconCache[color] = createColoredIcon(color);
  }
  return iconCache[color];
};

const activeCategory = ref('todos');

const categorias = ref([
  { id: 'todos', nome: 'Todos' },
  { id: 'ecoponto', nome: 'Ecopontos' },
  { id: 'eletronicos', nome: 'Lixo Eletrônico' },
  { id: 'baterias', nome: 'Pilhas e Baterias' },
  { id: 'cooperativa', nome: 'Cooperativas' },
  { id: 'oleo', nome: 'Óleo Usado' },
  { id: 'entulho', nome: 'Entulhos' },
]);

const pontosDeColeta = ref([
  { id: 'ChIJZfHM2A7X7JQR4AkTwjTMeHg', categoria: 'ecoponto', nome: 'Ecoponto Maringá', endereco: 'Av. Brasil, 5788 - Zona 05, Maringá - PR', telefone: '', latlng: [-23.4208, -51.9472] },
  { id: 'ChIJ5dosHmHQ7JQRH7gi3U4RlGE', categoria: 'ecoponto', nome: 'Semusp "Secretaria Municipal de Serviços Públicos"', endereco: 'Av. das Indústrias, 748 - Jardim America, Maringá - PR', telefone: '+55 44 3261-5500', latlng: [-23.4475, -51.9056] },
  { id: 'ChIJKVs50_Lb7JQRuxsbH18mL1Q', categoria: 'eletronicos', nome: 'CENTRO DE RECICLAGEM DE ELETRÔNICO', endereco: 'R. Pion Gertrude H. Fritzen, 7115 - Jd. São Silvestre, Maringá - PR', telefone: '+55 44 99817-5096', latlng: [-23.4075, -52.0084] },
  { id: 'ChIJ053emCnX7JQR0SFuUPOsi7Q', categoria: 'baterias', nome: 'Atacadão das Baterias Maringá', endereco: 'Av. Brasil, 5194-b - zona 4, Maringá - PR', telefone: '+55 44 3046-0101', latlng: [-23.4214, -51.9431] },
  { id: 'ChIJb6DpbY3W7JQRuanfk1XGf7c', categoria: 'baterias', nome: 'Pele Baterias', endereco: 'R. Ruy Celidônio, 72b - Maringá, PR', telefone: '+55 44 98832-0320', latlng: [-23.3821, -51.9702] },
  { id: 'ChIJhTaxIYzX7JQRwVGVoi0mb5Y', categoria: 'cooperativa', nome: 'COOPERCICLA', endereco: 'Rua: Lobélia Nº1137 - Parque Industrial, Maringá - PR', telefone: '+55 44 3040-0291', latlng: [-23.4735, -51.9729] },
  { id: 'ChIJIySfa6XX7JQR0CNiMMoqKwY', categoria: 'cooperativa', nome: 'SVM Recicláveis - Comércio de papeis', endereco: 'R. Santa Edwirges, 113 - Parque Industrial, Maringá - PR', telefone: '+55 44 3226-4731', latlng: [-23.4688, -51.9686] },
  { id: 'ChIJ1c5I6vrR7JQRkNXHwnXRFyk', categoria: 'cooperativa', nome: 'Reciclagem Ricatto - Compra de Alumínio e Metais', endereco: 'R. José Toral Querubim, N:41 - Conj. Hab. Requiao, Maringá - PR', telefone: '+55 44 99900-4425', latlng: [-23.3888, -51.9137] },
  { id: 'ChIJQ6ld3WTX7JQRX0CM-j9RRGE', categoria: 'oleo', nome: 'Furio Recicla - Coleta de Óleo Usado', endereco: 'R. Pioneiro Mourvan Neves de Oliveira, 672a - Jd. Montreal, Maringá - PR', telefone: '+55 44 98406-2128', latlng: [-23.3853, -51.9692] },
  { id: 'ChIJFQMxIDOABAsRZUW24Uyhtp0', categoria: 'oleo', nome: 'A-WS Ambiental Coleta de Óleo Usado', endereco: 'R. Pion Gertrude H. Fritzen, 4273 - Jardim Universo, Maringá - PR', telefone: '+55 44 99918-6110', latlng: [-23.4144, -51.9839] },
  { id: 'ChIJ5xwmZYDR7JQRdmJCHGK1Oqw', categoria: 'entulho', nome: 'Líder Caçambas - Disk Entulho', endereco: 'Av. São Judas Tadeu, 3416 - Jardim Oriental, Maringá - PR', telefone: '+55 44 99111-9929', latlng: [-23.3949, -51.9165] },
  { id: 'ChIJ9R_8DhrR7JQR90jOm46Umik', categoria: 'entulho', nome: 'Canção Disk Entulho', endereco: 'Av. Dona Sophia Rasgulaeff, 1461 - Jardim Alvorada, Maringá - PR', telefone: '+55 44 3228-1300', latlng: [-23.4013, -51.9213] },
]);


const filteredPontos = computed(() => {
  if (activeCategory.value === 'todos') {
    return pontosDeColeta.value;
  }
  return pontosDeColeta.value.filter(p => p.categoria === activeCategory.value);
});
</script>

<style>
.map-tooltip {
  padding: 4px 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}
</style>

<style scoped>
.map-container {
  height: 80vh;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #dee2e6;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.sidebar {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.sidebar-title {
  font-weight: 700;
  margin-bottom: 1rem;
}

.filter-buttons {
  flex-shrink: 0;
}

.list-container {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
}

.location-card {
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-left-width: 4px;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.location-card:hover {
  transform: translateX(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.location-name {
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.25rem;
}

.location-address,
.location-phone {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0;
}

.custom-div-icon {
  background: none;
  border: none;
}
</style>