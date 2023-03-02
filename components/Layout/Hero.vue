<template>
  <div class="hero-container">
    <div>
      <h1 class="hero-header">{{ heading }}</h1>
      <h2 class="hero-subheader">{{ subheading }}</h2>
      <a href="#contact" class="btn btn-primary btn-lg">{{ buttonText }}</a>
    </div>
    <slot name="static-bg"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Book Me'
    }
  }
}
</script>


<style scoped>
div {
  background: transparent;
}

div.hero-container {
  min-height: var(--hero-height);
  padding: 0 var(--margin-x) 0 var(--header-left);
}

h1.hero-header,
h2.hero-subheader {
  text-align: right;
  font-family: "Rubik", "Roboto", "Arial", "sans-serif" !important;
}

h1.hero-header {
  margin-top: var(--h1-margin);
  font-size: 4rem;
  line-height: var(--h1-line-height);
  font-weight: 400;
}

h2.hero-subheader,
a {
  margin-top: var(--h2-margin);
  font-weight: 300;
}

div.hero-container>div:first-child {
  position: absolute;
  top: 3.5rem;
  padding: 0 var(--margin-x);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;
}

#animation-wrapper-static>* {
  cursor: initial !important;
}

#animation-wrapper-static {
  display: block;
  position: absolute;
  min-height: var(--hero-height);
  padding: 0;
  top: calc(-1 * var(--margin-x));
  left: 0;
  right: 0;
}

@media (min-width: 1280px) {
  div.container-fluid {
    padding: 0 var(--margin-x) 0 var(--header-left);
  }

  h1.hero-header {
    font-size: 4rem;
  }

  h2.lead {
    font-size: 2rem;
  }
}

@media (min-width: 1680px) {
  h1.hero-header {
    font-size: 5rem;
  }

  h2.hero-subheader {
    font-size: 2.5rem;
  }
}
</style>