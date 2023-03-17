<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login, useLogout } from '@/model/session';
import { getUsers, type User } from '../model/users'
const session = useSession();
const logout = useLogout();

function logout2() {
    logout();
}
const isdropActive = ref(false);

const users = ref( getUsers());

function toggledrop() {
        isdropActive.value = !isdropActive.value;
    }

</script>

<template>
    
        

    <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-dropdown">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable" v-if="session.user">
                Welcome, {{ session.user.name }}
                (<a @click="logout2()">logout</a>)
            </div>
            <div class="navbar-item" v-else>
                <a class="button is-info">
                    <span class="icon">
                        <i class="fas fa-user-plus"></i>
                    </span>
                    <strong>Sign up</strong>
                </a>
                
                <div :class="{ 'dropdown is-active': isdropActive }" @click="toggledrop" >
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>Login</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
    <div class="dropdown-content" v-for=" user in users">
        <div class="dropdown-item">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
            <button @click="login(user)">+</button>
        </div>
      
    </div>
  </div>
</div>

                
                <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-dropdown"> sda
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
            </div>



</template>

<style scoped>

</style>