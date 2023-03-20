<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { quantity } from '../model/cart';
import Cart from './Cart.vue';
import Flyout from './Flyout.vue';
import LoginBadge from './LoginBadge.vue';

const isMenuActive = ref(false);
const isCartActive = ref(false);
const isdropActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  console.log({ isMenuActive });
}

function toggledrop() {
  isdropActive.value = !isdropActive.value;
}
</script>

<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink class="navbar-item" to="/homeview">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="28" height="22" />
        </RouterLink>
          <RouterLink to="/MyActivity" class="navbar-item">
            <span class="icon">
              <i class="fas fa-running"></i>
            </span>
            <span>My Activity</span>
          </RouterLink>
          <RouterLink to="/stats" class="navbar-item">
            <span class="icon">
              <i class="fas fa-chart-line "></i>
            </span>
            <span>Statistics</span>
          </RouterLink>
          <RouterLink to="/friendsview" class="navbar-item">
            <span class="icon">
              <i class="fas fa-people-group"></i>
            </span>
            <span>Friends Activity</span>
          </RouterLink>
        <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <RouterLink to="/PeopleSearch" class="navbar-item">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>People Search</span>
          </RouterLink>
          <div class="navbar-item">
          <div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button is-primary navbar-link" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>Admin</span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
        <RouterLink to="/usersview" class="navbar-item">
            Users
          </RouterLink>
      
    </div>
  </div>
</div>
</div>
        </div>
        <div class="navbar-end">
          <LoginBadge />
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                  data-social-target="https://bulma.io" target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.quantity-tag {
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 1rem;
}
</style>