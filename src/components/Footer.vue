<template>
  <footer class="footer-custom mt-auto">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-brand">Maringá Sustentável</h5>
          <p class="footer-tagline">
            Promovendo práticas sustentáveis para uma cidade mais consciente e alinhada à ODS 11.
          </p>
        </div>

        <div class="col-lg-2 col-6">
          <h6 class="footer-heading">Navegação</h6>
          <ul class="list-unstyled footer-links">
            <li>
              <RouterLink to="/">Início</RouterLink>
            </li>
            <li>
              <RouterLink to="/aprenda">Aprenda</RouterLink>
            </li>
            <li>
              <RouterLink to="/calculadora">Calculadora</RouterLink>
            </li>
            <li>
              <RouterLink to="/pontos-de-coleta">Pontos de Coleta</RouterLink>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-6">
          <h6 class="footer-heading">Recursos</h6>
          <ul class="list-unstyled footer-links">
            <li><a href="https://brasil.un.org/pt-br/sdgs/11" target="_blank">Sobre a ODS 11</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading">Contato</h6>
          <ul class="list-unstyled footer-contact">
            <li class="d-flex align-items-start mb-2">
              <i class="bi bi-envelope-fill me-2 contact-icon"></i>
              <span>contato@maringasustentavel.org</span>
            </li>
            <li class="d-flex align-items-start">
              <i class="bi bi-geo-alt-fill me-2 contact-icon"></i>
              <div>
                Prefeitura de Maringá<br>
                Secretaria de Meio Ambiente<br>
                Avenida XV de Novembro, 701<br>
                Maringá – PR
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="mb-1">© 2025 Maringá Sustentável. Todos os direitos reservados.</p>
        <p>Desenvolvido para promover os Objetivos de Desenvolvimento Sustentável da ONU</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer-custom {
  background-color: #256428;
  color: #e0e0e0;
  padding: 4rem 0 2rem 0;
  font-size: 0.9rem;
}

.footer-brand {
  font-weight: 700;
  color: #ffffff;
}

.footer-tagline {
  color: #adb5bd;
}

.footer-heading {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a,
.footer-links .nav-link {
  color: #adb5bd;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.footer-links a:hover,
.footer-links .nav-link:hover {
  color: #ffffff;
  padding-left: 5px;
}

.social-icons {
  font-size: 1.25rem;
}

.social-link {
  color: #adb5bd;
  transition: all 0.2s ease-in-out;
}

.social-link:hover {
  color: #ffffff;
  transform: translateY(-3px);
}

.footer-contact {
  color: #adb5bd;
}

.contact-icon {
  margin-top: 5px;
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  color: #adb5bd;
}

.footer-bottom p {
  margin-bottom: 0.25rem;
}
</style>