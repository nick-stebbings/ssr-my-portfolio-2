<template>
  <Layout>
    <template v-if="isMobile" #logo>
      <Logo></Logo>
    </template>
    <template v-if="isMobile" #nav>
      <HamburgerNav :switch-page="switchPage"></HamburgerNav>
    </template>
    <template v-if="isMobile" #hero>
      <Hero heading="I create innovative web solutions" button-text="Contact"
        subheading="Lets talk about your next project">
        <template #static-bg>
          <StaticNavSvg />
        </template>
      </Hero>
    </template>
    <template v-else #animation>
      <section class="anim-to-nav">
        <AnimationWrapper :showHero="showHero" :switch-to-layer="switchToLayer" :hover-layer-active="hoverLayerActive">
          <template #hero>
            <Hero heading="I create innovative web solutions" button-text="Contact"
              subheading="Lets talk about your next project in..." />
          </template> <template #sub-nav>
            <SubNav :slide="slide" :hovered-layer="hoveredLayer" :active-layer="activeLayer" />
          </template>
        </AnimationWrapper>
        <Header :active-layer="activeLayer" :hovered-layer="hoveredLayer" :header-titles="headerTitles"></Header>
      </section>
    </template>
    <template #article-sections>
      <section v-for="(project, i) in activeProjects" :id="'section-' + i" :name="'section-' + i" :key="i"
        :slot="'section-' + i" :class="'project section-' + +(i + 1)" :data-active="activeFirstSection">
        <Article :details="project" :slide="slide"></Article>
      </section>
    </template>
    <template #contact>
      <ContactSection :slide="slide" />
    </template>
    <template #modal>
      <ContactConfirmationModal />
    </template>
  </Layout>
</template>

<script>
import Layout from '../components/Layout/Layout.vue'
import Logo from '../components/Logo.vue'
import HamburgerNav from '../components/Layout/HamburgerNav.vue'
import SubNav from '../components/Layout/SubNav.vue'
import Hero from '../components/Layout/Hero.vue'
import AnimationWrapper from '../components/Animation/AnimationWrapper.vue'
import StaticNavSvg from '../components/Animation/StaticNavSvg.vue'
import Header from '../components/Header.vue'
import Article from '../components/Article/Article.vue'
import ContactSection from '../components/Layout/Contact.vue'
import ContactConfirmationModal from '../components/Modal/ContactConfirmationModal.vue'

import projects from './projectData.js'
import projectHeaders from './headerData.js'
export default {
  components: {
    Layout,
    Logo,
    HamburgerNav,
    SubNav,
    StaticNavSvg,
    Hero,
    AnimationWrapper,
    Header,
    Article,
    ContactConfirmationModal,
    ContactSection,
  },
  data() {
    return {
      currentHeaderChangeSetTimeout: 1,
      headerTitles: projectHeaders.default,
      hoveredLayer: 'default',
      activeLayer: 'default',
      projectHeaders
    }
  },
  computed: {
    isMobile() {
      return (this.$device.isMobile || this.$device.isTablet)
    },
    isDesktop() {
      return (this.$device.isDesktop)
    },
    activeProjects() {
      return (
        ['web3', 'ecommerce', 'elearning'].includes(this.activeLayer) &&
        projects[this.activeLayer]
      )
    },
    // // First articles title state
    activeFirstSection() { return this.activeLayer === this.hoveredLayer },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
    const observer = new IntersectionObserver(this.intersectionObsCallback, options)
    const targets = document.querySelectorAll('.project')
    targets.forEach((target) => observer.observe(target))

    const logo = document.getElementById('logo');
    if (!logo) return
    logo.addEventListener('click', () => {
      this.setHeaderTitles('default');
      this.showHero()
      this.activeLayer = "default";
      this.hoveredLayer = "default";

      const headerH1 = document.querySelector("header h1");
      const nav = document.querySelector(".page-nav-container");
      nav.className = "page-nav-container";
      headerH1.dataset.middle = false;
    })
  },
  methods: {
    setHeaderTitles(pageName) {
      this.headerTitles = this.projectHeaders[pageName]
      setTimeout(this.bindCaseStudies, 500);
    },
    // Nav state controller functions
    // Hamburger
    switchPage(e) {
      const label = e.target.innerText.replace('-', '')
      this.activeLayer = label

      setTimeout(this.bindCaseStudies, 500);
    },
    showHero() {
      const hero = document.querySelector(".hero-container");
      if (!hero) return;
      hero.style.visibility = 'visible'
      hero.style.opacity = '1'
    },
    // Desktop
    switchToLayer(layerName) {
      this.setHeaderTitles(layerName)
      document.querySelectorAll('.bg-svg')[0].classList.remove('active')
      document.querySelectorAll('.bg-svg')[1].classList.remove('active')
      document.querySelectorAll('.bg-svg')[2].classList.add('active')

      this.activeLayer = layerName
    },
    hoverLayerActive(layerName) {
      const subNav = document.querySelector('nav')

      clearTimeout(this.currentHeaderChangeSetTimeout)
      this.currentHeaderChangeSetTimeout = setTimeout(
        () => {
          this.setHeaderTitles(layerName)
        },
        layerName !== this.activeLayer ? 0 : 0
      )

      this.hoveredLayer = layerName
      subNav.className = 'page-nav-container hovered ' + layerName
    },

    bindCaseStudies() {
      const expandCaseStudy = document.querySelector('.case-study')
      const expandCaseStudyBtns = document.querySelectorAll('.case-study header')
      const carouselCaseStudies = document.querySelectorAll('.carousel.slide')
      expandCaseStudyBtns.forEach((btn, i) => {
        if (btn.getAttribute('listener') !== 'true') {
          btn.addEventListener('click', () => {
            carouselCaseStudies[i].style.height = btn.classList.contains('active')
              ? '0'
              : 'auto'
            // document.querySelector(".case-study").style['grid-column-start'] = btn.classList.contains('active')
            //   ? '1'
            //   : '-1'
            expandCaseStudy.classList.toggle('active')
            btn.classList.toggle('active')
          })
          btn.setAttribute('listener', 'true');
        }
      })
    },
    slide(direction, articleName, event = null) {
      if (
        direction == 'top'
      ) {
        document.querySelector('.layout').scrollTop = 0;

        window.location.replace("#");

        // slice off the remaining '#' in HTML5:    
        if (typeof window.history.replaceState == 'function') {
          history.replaceState({}, '', window.location.href.slice(0, -1));
        }
        return
      }
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
          if (!form) return
          form.scrollIntoView()
          break
        case 'first':
          const page1 = document.getElementById('section-0')
          if (!page1) return
          page1.scrollIntoView()
          break
        case 'second':
          const page2 = document.getElementById('section-1')
          if (!page2) return
          page2.scrollIntoView()
          break
        case 'third':
          const page3 = document.getElementById('section-2')
          if (!page3) return
          page3.scrollIntoView()
          break
        case 'fourth':
          const page4 = document.getElementById('section-3')
          if (!page4) return
          page4.scrollIntoView()
          break
      }
    },

    intersectionObsCallback(entries, observer) {
      // Lazy loading of images/buttons further down the page
      const makeVisible = (upBtn) => {
        upBtn.style.visibility = 'visible'
        upBtn.style.opacity = '1'
      }

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
    }
  },
}
</script>
<style scoped>
.anim-to-nav,
.anim-to-nav>div {
  padding: 0;
}
</style>
