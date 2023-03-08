<template>
  <nav :class="computedNavClass">
    <button id="page-nav-1-1" class="page-nav-btn" @click="slide('next', 'first', $event)"></button>
    <button v-show="showSecondNavBtn" id="page-nav-1-2" class="page-nav-btn"
      @click="slide('next', 'second', $event)"></button>
    <button v-show="showThirdNavBtn" id="page-nav-1-3" class="page-nav-btn"
      @click="slide('next', 'third', $event)"></button>
  </nav>
</template>
<script>
export default {
  props: {
    slide: Function,
    hoveredLayer: String,
    activeLayer: String,
  },
  computed: {
    computedNavClass() {
      return this.activeLayer
        ? 'page-nav-container ' + this.activeLayer
        : 'page-nav-container web3'
    },
    showSecondNavBtn() {
      return ['web3', 'ecommerce', 'elearning'].includes(this.hoveredLayer)
    },
    showThirdNavBtn() {
      return this.hoveredLayer == 'web3'
    },
  },
  mounted: function () {
    // const navBtns = document.querySelectorAll('.page-nav-btn')
    // const headerLinks = document.querySelectorAll('span.header-link')

    // if (!navBtns?.length || !headerLinks?.length) return;
    // navBtns.forEach((btn, i) => {
    //   btn.addEventListener('mouseover', () => {
    //     headerLinks[i].style['text-decoration'] = 'underline'
    //   })
    //   btn.addEventListener('mouseout', () => {
    //     headerLinks[i].style['text-decoration'] = 'initial'
    //   })
    // })

  },
}
</script>
<style>
/* Navigation Bar */
.page-nav-container {
  display: flex;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in 0s, right 0.5s ease-out 0s;
  bottom: clamp(14vh, 8vh, 12vh);
  gap: 2rem;
  max-width: 33vw;
  background: url('~/assets/images/bg/page-nav-bg-bottom.png') repeat-x right bottom;
  background-size: var(--bg-size);
}

.page-nav-btn {
  border: 0;
  width: 33%;
  height: 15vh;
  background-position: center !important;
  opacity: 0.75;
  cursor: pointer;
  margin: 1rem;
  transition: all 0.5s ease-in;
  transition-delay: background-image 1s;
}

.page-nav-btn:hover {
  opacity: 0.8;
  transform: scale(1.25);
}

header.inactive+.page-nav-container {
  width: 45%;
  margin-bottom: 12rem;
  gap: 4rem;
  padding: 2rem 3rem;
}

header.inactive+.page-nav-container .page-nav-btn {
  transform: scale(1.35);
  cursor: initial;
}

.elearning.page-nav-container .page-nav-btn,
.ecommerce.page-nav-container .page-nav-btn,
.web3.page-nav-container .page-nav-btn {
  animation: fade-in-img 2s;
}

.page-nav-container .page-nav-btn {
  animation: fade-out-img 1s;
}

.elearning.page-nav-container .page-nav-btn:first-of-type {
  background: url('~/assets/images/icons/nuku-icon.png') no-repeat center/contain;
}

.elearning.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url('~/assets/images/pyramid.png') no-repeat center/contain;
}

.ecommerce.page-nav-container .page-nav-btn:first-of-type {
  background: url('~/assets/images/icons/bike-icon.png') no-repeat center/contain;
}

.ecommerce.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url('~/assets/images/icons/spinning-icon.png') no-repeat center/contain;
}

.web3.page-nav-container .page-nav-btn:first-of-type {
  background: url('~/assets/images/icons/atom-small.png') no-repeat center/contain;
}

.web3.page-nav-container .page-nav-btn:nth-of-type(2) {
  background: url('~/assets/images/sphere.png') no-repeat center/contain;
}

.page-nav-btn:nth-of-type(3) {
  background: url('~/assets/images/icons/veg-icon.png') no-repeat center/contain;
}


.page-nav-container::before,
.page-nav-container::after {
  position: absolute;
  top: 2rem;
  left: 0;
  height: 4rem;
  width: 4rem;
  font-size: 2rem;
  font-weight: bold;
  color: #0069d9;
}

.page-nav-container::before,
.page-nav-container::after {
  content: 'Navigate';
  left: -25%;
  top: 2rem;
  text-transform: capitalize;
}

.page-nav-container::after {
  content: '->';
  transform: rotate(45deg);
  top: 6rem;
  left: -15%;
  text-transform: capitalize;
}

.page-nav-container.hovered {
  transition: all 0.3s;
}

.page-nav-container.hovered::before,
.page-nav-container.hovered::after {
  content: ''
}

/* Short viewport */
@media (max-height: 1280px) {
  .page-nav-container {
    flex-direction: column;
    right: 0;
    width: 8vw;
    align-items: flex-end;
    z-index: 104;
    gap: 0;
    width: 4vw;
  }

  .page-nav-container::before,
  .page-nav-container::after {
    top: 0rem;
    left: 2rem;
  }

  .page-nav-container::after {
    transform: rotate(120deg);
    top: -1rem;
  }

  .page-nav-container::before {
    top: -4rem;
  }

  .page-nav-container .page-nav-btn {
    width: 100%;
  }
}
</style>
