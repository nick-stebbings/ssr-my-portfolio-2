<template>
  <main class="layout">
    <slot name="nav"></slot>
    <!-- <slot name="logo"></slot> -->
    <slot name="hero"></slot>
    <slot name="animation"> </slot>
    <slot name="article-sections"></slot>
    <slot name="contact"></slot>
    <slot name="modal"></slot>
  </main>
</template>
<script>
export default {
  name: 'LayoutTemplate',
}
</script>
<style>
html,
body {
  padding: 0;
  margin: 0 !important;
}

body {
  font-family: 'Rubik', 'Roboto' !important;
}

body,
#app {
  overflow-x: hidden !important;
}

#app {
  overflow-y: hidden !important;
}

/* Default styles */
:root {
  --hero-height: 90vh;
  --hero-top-margin: 0;
  --margin-x: .75rem;
  --gutter-x: 1rem;
  --gutter-x-right: 1rem;
  --margin-y: 1.5rem;
  --bg-size: 12px;
  --btn-scale: scale(2);

  --p-font-size: 16px;
  --p-line-height: 1.5em;
  --p-tracking: 1px;
  --h1-line-height: 1.1;
  --h2-line-height: 1.1;
  --h1-margin: 4rem;
  --h2-margin: 1.5rem;
  --header-padding: 0;

  --section-padding: 2rem;
  --section-font-size: 1.2rem;
  --section-margin: var(--h1-margin);

  --svg-x: 80;
  --svg-x-px: 80px;
  --svg-max-w-px: 1680px;
  --svg-x-header-start: 400;
  --svg-x-header-start-px: 400px;

  --svg-height: 945;
  --svg-logo-y: 80;

  /* --svg-height-sm-md-l: calc((100vw / 1680) * 945); */
  --margin-top: calc(((var(--svg-logo-y) / var(--svg-height-sm-md-l)) * 100vh));
  --margin-top: calc(var(--svg-logo-y) / var(--svg-height) * 100vh);
}

.layout {
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: var(--margin-x);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

html {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 85%, rgba(60, 60, 60, 1) 80%);
}

main>* {
  flex: 1 0 100%;
  margin: 0;
  padding: 0;
}

main>section:not(.anim-to-nav) {
  padding: 0 var(--margin-x);
}

h1.hero-header {
  margin-left: 50%;
}

section[slot^="section-"]>* {
  margin: 0;
  padding: 0;
  font-size: var(--section-font-size, 1rem);
}

.project {
  max-width: 100vw;
}

.project.section-1 {
  margin-top: 0rem;
  transition: 1s all ease-out;
}

.page-nav-container {
  right: var(--margin-x) !important;
  transition: all 0.3s;
}

.page-nav-container.default {
  opacity: 0 !important;
  visibility: hidden !important;
}

/* Buttons */
button#skip-intro {
  width: 4rem;
  height: 4rem;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: calc(var(--margin-x));
  top: 2rem;
  z-index: 100;
  background-image: url('~/assets/images/icons/skip-icon.png');
  background-repeat: no-repeat;
  transition: .3s all ease-out;
}

button#skip-intro:hover {
  border: 2px dashed #846B63;
  padding: 1rem;
  height: 6rem;
  width: 6rem;
  background-position: center;
  border-radius: 1rem;
  top: 1rem;
  right: calc(var(--margin-x) - 1rem);
}

#contact-wrapper {
  flex-direction: column;
}

@media (min-width: 480px) {
  :root {
    --margin-x: 1rem;
  }

  h1.hero-header {
    margin-left: 25%;
  }

  .case-study-car {
    margin-top: -.5rem
  }
}

/* Medium viewport */
@media (min-width: 768px) {
  :root {
    --header-left: calc(var(--margin-x) + 320px);
    --margin-x: 1.5rem;
    --margin-y: 2rem;
    --h1-line-height: 1.3;
    --h2-line-height: 1.2;
    /* --h1-margin: 3rem 0 2rem;
    */
    --h2-margin: 2.5rem;
    --hero-height: 95vh;
  }

  h1.hero-header {
    margin-left: 8%;
  }
}

/* Large viewport */
@media (min-width: 1280px) {
  :root {
    --margin-x: calc(((var(--svg-x) / 1280) * 100vw));
    --bg-size: auto;
    --btn-scale: scale(3);
    --gutter-x: 2.5rem;
    --margin-y: 1rem;
    --h1-line-height: 1.4;
    --h2-line-height: 1.3;
    --h1-margin: 4rem 0 3rem;
    --h2-margin: 3.5rem;
    --header-padding: 0 6rem;

    --hero-height: auto;
  }

  main>section:not(.anim-to-nav) {
    padding: 0 var(--margin-x);
  }

  h1.hero-header {
    margin-left: 0%;
    margin-right: 15%;
    text-align: left !important;
  }

  #contact {
    height: 100vh;
  }

  #contact-wrapper {
    flex-direction: row;
  }

  .project.section-1 {
    /* margin-top: 24rem; */
    margin-top: 0rem;
    transition: 1s all ease-out;
  }
}

@media only screen and (max-height: 550px) {
  :root {
    --hero-height: 250vh;
  }
}

/* Extra large viewport */
@media (min-width: 1680px) {
  :root {
    --margin-x: calc((100vw - var(--svg-max-w-px)) / 2 + 1.2 * var(--svg-x-px));
    --header-left: calc(var(--margin-x) + 400px);
    --gutter-x: 3rem;
    --margin-y: 2rem;
    --h1-line-height: 1.5;
    --h2-line-height: 1.4;
    --h1-margin: 5rem 0 4rem;
    --h2-margin: 2.5rem;
    --header-padding: 0 8rem;
  }

  .page-nav-container {
    width: 36vw;
    margin-right: 26px;
  }
}
</style>
