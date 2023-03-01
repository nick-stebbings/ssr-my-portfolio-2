<template>
  <section id="contact">
    <div id="contact-wrapper">
      <h1>contact me</h1>
      <button id="return-home" @click="scrollHome"></button>
      <ContactForm></ContactForm>
    </div>
  </section>
</template>

<script>
import ContactForm from '../ContactForm.vue'
export default {
  components: {
    ContactForm,
  },
  props: {
    slide: Function,
  },
  methods: {
    scrollHome: function () {
      document.querySelector('section.anim-to-nav').scrollIntoView()
    },
  },
}
</script>
<style scoped>
/* Contact form */
#contact-wrapper h1 {
  margin-top: 1rem;
  font-family: 'Londrina Solid', 'Roboto', 'Arial', 'sans-serif';
  font-size: 5.0625em;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 5.375rem;
  width: 50%;
  text-align: left;
  color: #3c3c3c;
  filter: sepia(1);
}

#contact-wrapper {
  position: relative;
  display: flex;
}

button#return-home {
  transform: rotate(180deg);
  position: absolute;
  right: 0;
  top: var(--margin-y);
}

button#return-home:hover {
  right: -1rem;
  top: calc(var(--margin-y) - 0.5rem);
}
</style>
