<template>
  <section id="contact" name="contact">
    <div id="contact-wrapper">
      <button id="return-home" @click="scrollHome">
        <ArrowCircleUpIcon />
      </button>
      <h1>contact me</h1>
      <ContactForm></ContactForm>
    </div>
  </section>
</template>

<script>
import ContactForm from "../ContactForm.vue";
import { ArrowCircleUpIcon } from "@vue-hero-icons/outline";

export default {
  props: {
    slide: Function,
  },
  methods: {
    scrollHome: function () {
      document.querySelector('.layout').scrollIntoView();
    }
  },
  components: {
    ContactForm,
    ArrowCircleUpIcon
  }
}
</script>
<style scoped>
/* Contact form */
#contact {
  background-color: #3c3c3c;
  position: relative;
  z-index: 200;
}

#contact-wrapper h1 {
  margin: var(--margin-y) 0;
  font-family: "Rubik", "Roboto", "Arial", "sans-serif";
  font-size: 3.375rem;
  font-weight: 300;
  text-transform: capitalize;
  line-height: 5.375rem;
  width: 50%;
  text-align: left;
  color: #fefefe;
  filter: sepia(1);
}

#contact-wrapper {
  position: relative;
  display: flex;
}

button#return-home {
  transform: var(--btn-scale);
  background: transparent;
  color: white;
  border: 0;
  display: flex;
  margin-top: var(--margin-y);
  justify-content: flex-end;
  position: absolute;
  right: var(--margin-x);
  padding: 0;
}

@media (min-width: 1680px) {
  button#return-home {
    right: 0;
  }
}
</style>