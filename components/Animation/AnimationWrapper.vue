<template>
  <div>
    <button id="skip-intro" @click="skipToNav()"></button>
    <div id="animation-wrapper">
      <AnimationScene1 :class="animationScene1Class" />
      <AnimationGlowingNLoopScene v-show="glowingNLoopSceneVisible" :launch="launch2" />
      <AnimationScene2 v-show="intro2Visible" :launch="launch3" />
      <AnimationMainLoopScene v-show="mainLoopVisible" :launch="launch4" />
      <AnimationNavScene v-show="navVisible" :hover-layer-active="hoverLayerActive" :switch-to-layer="switchToLayer"
        :showHero="showHero" />
    </div>
    <slot name="hero"></slot>
    <slot name="sub-nav"></slot>
  </div>
</template>

<script>
import AnimationScene1 from './AnimationScene1.vue'
import AnimationGlowingNLoopScene from './AnimationGlowingNLoopScene.vue'
import AnimationScene2 from './AnimationScene2.vue'
import AnimationMainLoopScene from './AnimationMainLoopScene.vue'
import AnimationNavScene from './AnimationNavScene.vue'

export default {
  components: {
    AnimationScene1,
    AnimationGlowingNLoopScene,
    AnimationScene2,
    AnimationMainLoopScene,
    AnimationNavScene,
    AnimationNavScene,
  },
  props: {
    switchToLayer: Function,
    hoverLayerActive: Function,
    showHero: Function,
  },
  data() {
    return {
      // Animation scene flags
      intro1Visible: true,
      glowingNLoopSceneVisible: false,
      intro2Visible: false,
      mainLoopVisible: false,
      navVisible: false,
      // Settimeout return values
      playNextSceneTimeout: undefined,
      launchNavAfterTimeout: undefined,
    }
  },
  computed: {
    animationScene1Class() {
      return this.intro1Visible ? 'active' : 'inactive'
    },
  },
  watch: {
    playNextSceneTimeout: function (newVal) {
      this.playNextSceneTimeout = newVal
    },
    launchNavAfterTimeout: function (newVal) {
      this.launchNavAfterTimeout = newVal
    },
  },
  mounted: function () {
    // Time the arrival of the first scene
    this.playNextSceneTimeout = setTimeout(() => {
      this.launchScene(1)
      // Time the arrival of the second scene (index 1)
      const scene2 = document.getElementById('eXJRUNPtokm1')
      scene2.style.display = 'none'
    }, 8000)
    // Assume the user will not click after this amount of time
    this.launchNavAfterTimeout = setTimeout(this.skipToNav.bind(null), 35000)
  },
  methods: {
    // Scene switch helper functions
    launchScene(animationId) {
      clearTimeout(this.playNextSceneTimeout)
      clearTimeout(this.launchNavAfterTimeout)

      this.intro1Visible = false
      this.glowingNLoopSceneVisible = false
      this.intro2Visible = false
      this.mainLoopVisible = false
      this.navVisible = false

      switch (animationId) {
        case 0:
          this.intro1Visible = true
          break
        case 1:
          this.glowingNLoopSceneVisible = true
          break
        case 2:
          this.intro2Visible = true
          break
        case 3:
          this.mainLoopVisible = true
          break
        case 4:
          this.navVisible = true
          break

        default:
          this.navVisible = true
          break
      }
    },
    launch2() {
      this.launchScene(2)
      const element = document.getElementById('ekFf3Z5Im6j1')
      element.svgatorPlayer.ready(function (el) {
        // Restart the animation too
        el.play()
      })
      this.playNextSceneTimeout = setTimeout(this.launch3, 5000)
    },
    launch3() {
      this.launchScene(3)
    },
    launch4() {
      this.launchScene(4)

      const skipBtn = document.querySelector('#skip-intro')
      const element = document.getElementById('e8VQ6wvtuBg1')
      element.svgatorPlayer.ready(function (el) {
        // Restart the animation too
        el.play()
      })
      skipBtn.style.opacity = '0'
      skipBtn.style.visibility = 'invisible'

      setTimeout(function () {
        const staticNav = document.getElementById('#animation-wrapper-static')
        if (staticNav) return

        const element = document.querySelector('nav.page-nav-container')

        element.style.opacity = '1'
        element.style.visibility = 'visible'

        const header = document.querySelector('.anim-to-nav header')
        header.style.opacity = '1'
        header.style.visibility = 'visible'

        const firstArticle = document.querySelector(".project.section-1");
        if (firstArticle) {
          firstArticle.style['margin-top'] = '-6rem';
        }

        const hero = document.querySelector(".hero-container");
        hero.style.visibility = 'visible'
        hero.style.opacity = '1'
      }, 4500)
    },
    skipToNav() {
      this.launch4()
      const element = document.getElementById('eXJRUNPtokm1')
      if (!element) return;
      element.style.display = 'none'
    },
  },
}
</script>
<style scoped>
#animation-wrapper {
  max-width: 1680px;
  margin: 0 auto;
  position: relative;
  flex-direction: column;
  display: none;
  padding: 0;
  display: block;
}

#animation-wrapper>svg {
  overflow: initial;
  width: 100%;
  max-width: 1680px;
}
</style>
