<template>
    <div class="container">
        <div class="d-flex justify-content-end caixa-linguagem texto-linguagem">
            BR&nbsp;&nbsp;&nbsp;&nbsp;EN
        </div>
        <div class="d-flex justify-content-end caixa-menu">
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