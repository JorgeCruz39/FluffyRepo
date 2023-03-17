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

const users = ref(getUsers());

function toggledrop() {
  isdropActive.value = !isdropActive.value;
}

</script>

<template>
  <div class="navbar-item has-dropdown is-hoverable" v-if="session.user">
    <div class="navbar-item">Welcome, {{ session.user.name }}
    <a class="button is-primary" @click="logout2()"><strong>Log out</strong></a></div>
  </div>
  <div class="navbar-item" v-else>
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>

    <div :class="{ 'dropdown is-active': isdropActive }" @click="toggledrop">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
          <span>Log in</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu2" role="menu">
        <div class="dropdown-content" v-for=" user in users">
          <div class="dropdown-item">
            <p @click=login(user)>{{ user.name }}</p>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>