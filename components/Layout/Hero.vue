<template>
  <div class="hero-container">
    <div>
      <h1 class="display-4">{{ heading }}</h1>
      <h2 class="lead my-4">{{ subheading }}</h2>
      <a href="#" class="btn btn-primary btn-lg">{{ buttonText }}</a>
    </div>

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
  /* margin-top: var(--margin-top); */
  padding: 0 var(--margin-x) 0 var(--header-left);
}

h1.display-4,
h2 {
  text-align: right;
}

div.hero-container>div {
  position: absolute;
  top: 3.5rem;
  padding: 0 var(--margin-x);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (min-width: 1280px) {
  div.container-fluid {
    padding: 0 var(--margin-x) 0 var(--header-left);
  }

  h1.display-4 {
    font-size: 4rem;
  }

  h2.lead {
    font-size: 2rem;
  }
}

@media (min-width: 1680px) {
  h1.display-4 {
    font-size: 5rem;
  }

  h2.lead {
    font-size: 2.5rem;
  }
}
</style>