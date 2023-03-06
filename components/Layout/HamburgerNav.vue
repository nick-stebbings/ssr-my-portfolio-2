<template>
  <div class="hamburger-nav" :class="{ 'is-active': navOpen }">
    <button type="button" class="hamburger-icon" :class="{ 'is-active': navOpen }" @click="toggleNav">
      <MenuAlt3Icon />
    </button>
    <nav class="nav-menu" :class="{ 'is-active': navOpen }">
      <ul>
        <li><a href="#section-0" @click="toggleNav() && switchPage($event)">e-learning</a></li>
        <li><a href="#section-0" @click="toggleNav() && switchPage($event)">e-commerce</a></li>
        <li><a href="#section-0" @click="toggleNav() && switchPage($event)">web3</a></li>
        <li><a href="#contact" @click="toggleNav() && switchPage($event)">book me</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { MenuAlt3Icon } from "@vue-hero-icons/outline"

export default {
  data() {
    return {
      navOpen: false,
    };
  },
  props: {
    switchPage: Function,
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
      return true;
    },
  },
  components: {
    MenuAlt3Icon
  }
};
</script>

<style>
.hamburger-nav {
  display: none;
}

@media only screen and (max-width: 1280px) {
  .hamburger-nav {
    background-color: transparent;
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    padding: var(--margin-x);
    position: relative;
    z-index: 100;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .nav-menu.is-active {
    display: block;
  }

  .nav-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .hamburger-nav.is-active {
    background-color: white !important;
  }

  .nav-menu li {
    margin-bottom: 1rem;
  }

  .nav-menu a {
    display: block;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: #3c3c3c;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-align: right;
    padding-right: var(--margin-x);
  }

  .nav-menu a:hover {
    color: #846b63;
  }

  .hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    transform: scale(1.5);
    transition: all 0.3s ease-in-out;
  }



  .hamburger-icon.is-active {
    transform: scale(1.5) rotate(90deg);
  }
}
</style>
