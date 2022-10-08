<template>
  <div class="caixa-svg-rosa">
    <img class="img-fluid svg-rosa" src="/src/img/vetor-fundo-perfil.svg" />
  </div>
  <div class="row">
    <div class="col-4">
      <img class="img-fluid" src="/src/img/foto-amanda-jad.svg" />
    </div>
    <div class="col-3 offset-1 d-flex align-items-center">
      <img class="img-fluid" src="/src/img/amanda-jad-logo.svg" />
    </div>
    <div class="col-3 offset-1 text-end">
      <p>BR&nbsp;&nbsp;&nbsp;&nbsp;EN</p>
      <div class="caixa-menu">
        <ul class="d-flex justify-content-end menu">
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'sobre' }">Sobre</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contato' }">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


