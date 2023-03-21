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
    <div class="avatar">
      <img :src="session.user.photo" alt="avatar">
    </div>
    <div class="navbar-item"><strong>{{ session.user.name }}</strong>
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
        <div class="dropdown-content" >
          <a class="dropdown-item" v-for=" user in users">
            <span @click=login(user)>{{ user.name }}</span>
          </a>

        
        <hr class="dropdown-divider">
        <a class="dropdown-item">
          <span>Other Account</span>
        </a>
      </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.avatar img{
    width: 48px;
    height: 52px;
    max-height: max-content;
    border-radius: 10%;
    overflow: hidden;
    max-width: 100%;
    
    
}

</style>