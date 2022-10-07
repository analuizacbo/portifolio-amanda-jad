<template>
    <div class="row justify-content-between">
        <div class="row col-7 caixa-esquerda">
            <div class="col-6 d-flex justify-content-start">
                <img class="img-perfil" src="../img/foto-amanda-jad.svg" />
            </div>
            <div class="col-3 offset-3 d-flex justify-content-start">
                <img src="../img/amanda-jad-logo.svg" />
            </div>
        </div>
        <div class="col-3 caixa-linguagem texto-linguagem text-end">
            <p>
                BR&nbsp;&nbsp;&nbsp;&nbsp;EN
            </p>
            <ul class="lista-menu lista-menu-font">
                <li>
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'sobre'}">Sobre</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'contato'}">Contato</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
