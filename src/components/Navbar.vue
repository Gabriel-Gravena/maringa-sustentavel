<script setup>
import Logo from './icons/logo.vue'


function fecharMenu() {
  const bsCollapse = document.getElementById('navbarSupportedContent')
  if (bsCollapse.classList.contains('show')) {
    const collapse = new bootstrap.Collapse(bsCollapse, {
      toggle: true
    })
    collapse.hide()
  }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
            <div class="container-fluid m-lg-2">
                <div class="d-flex align-items-center">
                    <Logo class="mx-1" />
                    <RouterLink to="/" class="logo">Maringá Sustentavel</RouterLink>
                </div>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-lg-0 ms-lg-2">
                        <li class="nav-item">
                            <RouterLink to="/" 
                            class="link" 
                            exact-active-class="active-link"
                            @click="fecharMenu"><HomeFilled class="icon p-1" />Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/AprendaView" 
                            class="link" 
                            exact-active-class="active-link"
                            @click="fecharMenu"><Reading class="icon p-1" />Aprenda</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/CalculadoraView" 
                            class="link" 
                            exact-active-class="active-link"
                            @click="fecharMenu"><Cellphone class="icon p-1"  />Calculadora</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/PontosDeColeta" 
                            class="link" 
                            exact-active-class="active-link"
                            @click="fecharMenu"><Location class="icon p-1" />Pontos de coleta</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/DashboardsView" 
                            class="link" 
                            exact-active-class="active-link"
                            @click="fecharMenu"><Histogram class="icon p-1" />Dashboards</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>


</template>

<style scoped>

.logo {
    font-weight: bold;
    font-size: 1.4rem;
    color: black;
    text-decoration: none;
    margin-right: 30px;
}

.nav-item {
  margin-right: 30px;
}

.link {
    border-radius: 5px;
    color: black;
    display: block;
    padding: 0.45rem 0.9rem; ;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
}

.active-link {
  background-color: #3ca041 !important;
  color: white !important;
}

.nav-item:hover .link{
    background-color: #3ca041 !important;
    color: white !important;
    transition: all 0.15s ease;
}

.icon { 
    width: 2em; 
    height: 2em; 
    margin-right: 8px
}

@media (max-width: 768px) {
    .navbar-nav {
        margin-top: 10px;
    }
    .nav-item {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
    

</style>