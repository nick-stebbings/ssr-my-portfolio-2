<template>
  <Layout>
    <template #nav>
      <HamburgerNav :switch-page="switchPage"></HamburgerNav>
    </template>
    <template #hero>
      <Hero heading="I make amazing interactive web experiences" button-text="Book Me"
        subheading="Lets talk about your next project"></Hero>
    </template>
    <template #animation>
      <section class="anim-to-nav">
        <AnimationWrapper :switch-to-layer="switchToLayer" :hover-layer-active="hoverLayerActive">
          <template #sub-nav>
            <SubNav :slide="slide" :hovered-layer="hoveredLayer" :active-layer="activeLayer" />
          </template>
        </AnimationWrapper>
        <Header :active-layer="activeLayer" :hovered-layer="hoveredLayer" :headerTitles="headerTitles"></Header>
      </section>
    </template>
    <template #article-sections>
      <section v-for="(project, i) in activeProjects" :id="'section-' + i" :key="i" :slot="'section-' + i"
        :class="'project section-' + +(i + 1)" :data-active="activeFirstSection">
        <Article :details="project" :slide="slide"></Article>
      </section>
    </template>
    <template #contact>
      <ContactSection :slide="slide" />
    </template>
  </Layout>
  <!-- <ContactConfirmationModal /> -->
</template>


<script>
import { ref, computed } from 'vue'

import Layout from '../components/Layout/Layout.vue'
import HamburgerNav from '../components/Layout/HamburgerNav.vue'
import SubNav from '../components/Layout/SubNav.vue'
import Hero from '../components/Layout/Hero.vue'
import AnimationWrapper from '../components/Animation/AnimationWrapper.vue'
import Header from '../components/Header.vue'
import Article from '../components/Article/Article.vue'
import ContactSection from '../components/Layout/Contact.vue'
import ContactConfirmationModal from '../components/Modal/ContactConfirmationModal.vue'

import projects from './projectData.js'
import projectHeaders from './headerData.js'
export default {
  mounted() {
    const observer = new IntersectionObserver(intersectionObsCallback, options)
    const targets = document.querySelectorAll('.project')
    targets.forEach((target) => observer.observe(target))
  },
  methods: {
    // Nav state controller functions
    // Hamburger
    switchPage(e) {
      const label = e.target.innerText.replace('-', '')
      if (label == 'book me') {
        const form = document.getElementById('contact-wrapper')
        form.scrollIntoView()
      }
      this.activeLayer.value = label
    },
    // Desktop
    switchToLayer(layerName) {
      getHeaderTitles(layerName)
      document.querySelectorAll('.bg-svg')[0].classList.remove('active')
      document.querySelectorAll('.bg-svg')[1].classList.remove('active')
      document.querySelectorAll('.bg-svg')[2].classList.add('active')

      this.activeLayer.value = layerName
    },
    hoverLayerActive(layerName) {
      const subNav = document.querySelector('nav')

      clearTimeout(this.currentHeaderChangeSetTimeout)
      this.currentHeaderChangeSetTimeout = setTimeout(
        () => {
          getHeaderTitles(layerName)
        },
        layerName !== this.activeLayer.value ? 0 : 0
      )

      this.hoveredLayer.value = layerName
      subNav.className = 'page-nav-container ' + layerName
    },

    slide(direction, articleName, event = null) {
      if (
        event &&
        event.target.parentNode.previousElementSibling.classList.contains(
          'inactive'
        )
      )
        return
      // if in hover state, change layer

      switch (articleName) {
        case 'bookme':
          const form = document.getElementById('contact-wrapper')
          form.scrollIntoView()
          break
        case 'first':
          const page1 = document.getElementById('section-0')
          page1.scrollIntoView()
          break
        case 'second':
          const page2 = document.getElementById('section-1')
          page2.scrollIntoView()
          break
        case 'third':
          const page3 = document.getElementById('section-2')
          page3.scrollIntoView()
          break
        case 'fourth':
          const page4 = document.getElementById('section-3')
          page4.scrollIntoView()
          break
      }

      if (direction == 'top') {
        const page0 = document.querySelector('.anim-to-nav')
        page0.scrollIntoView()
      }
    }
  },

  data() {
    return {
      currentHeaderChangeSetTimeout: 1,
      headerTitles: projectHeaders.web3,
      activeLayer: 'default',
      hoveredLayer: 'web3',
      activeLayer: 'default',
    }
  },
  computed: {
    isMobile() {
      return this.isMobile
    },
    activeProjects() {
      return ['web3', 'ecommerce', 'elearning'].includes(this.activeLayer.value) &&
        projects[this.activeLayer.value]
    }
  },
  setup() {
    const headerTitles = ref(projectHeaders.web3);
    function getHeaderTitles(pageName) {
      // Header state variables
      headerTitles.value = projectHeaders[pageName]
    };

    // // First articles title state
    // const activeFirstSection = computed(
    //     () => activeLayer.value === hoveredLayer.value
    // )

    // Lazy loading of images/buttons further down the page
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const makeVisible = (upBtn) => {
      upBtn.style.visibility = 'visible'
      upBtn.style.opacity = '1'
    };

    const intersectionObsCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetClassList = entry.target.classList
          const upBtns = document.querySelectorAll('.return-home-up')
          const targetIndex = [
            'section-0',
            'section-1',
            'section-2',
            'section-3',
          ].indexOf(targetClassList[1])
          if (targetIndex !== -1) {
            makeVisible(upBtns[targetIndex - 1])
          }
          observer.unobserve(entry.target)
        }
      })
    };

  },
}
</script>
<style scoped>
.anim-to-nav {
  padding: 0;
}
</style>
