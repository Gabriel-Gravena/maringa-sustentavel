<script setup>
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-2 fixed-top">
            <div class="container-fluid m-lg-2">
                <RouterLink to="/" class="logo">Maringá Sustentavel</RouterLink>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-lg-0 ms-lg-2">
                        <li class="nav-item">
                            <RouterLink to="/HomeView" class="link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/AprendaView" class="link">Aprenda</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/CalculadoraView" class="link">Calculadora</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/PontosDeColeta" class="link">Pontos de coleta</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/DashboardsView" class="link">Dashboards</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div style="height: 1000px;"></div>
</template>

<style scoped>

.logo {
    font-weight: bold;
    font-size: 1.4rem;
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin-right: 20px;
}

.nav-item {
    margin-right: 20px;
}

.link {
    border-radius: 5px;
    color: black;
    display: block;
    padding: 0.55rem 1.2rem; ;
    font-size: 0.935rem;
    font-weight: 500;
    text-decoration: none;
}

.router-link-active {
  background-color: #2E7D32 !important;
  color: white !important;
}

.nav-item:hover .link{
    background-color: #2E7D32 !important;
    color: white !important;
    transition: all 0.15s ease;
}

</style>