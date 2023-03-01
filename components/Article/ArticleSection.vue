<template>
  <section :class="[sectionType, 'article-section']">
    <div v-if="computedSectionIsSummary()" class="image">
      <img :src="getImageUrl()" :alt="getImgAltText()" srcset="" />
    </div>
    <div v-else class="figure">
      <figure>
        <img :src="getImageUrl()" :alt="getImgAltText()" srcset="" />
      </figure>
      <figcaption>
        {{ imgCaption }}
      </figcaption>
    </div>
    <div class="copy">
      <p v-for="(p, i) in computedParas()" :key="i">{{ p }}</p>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  paragraphs: { type: String },
  imgPath: { type: String },
  imgAlt: { type: String },
  imgCaption: { type: String },
  sectionType: { type: String },
})
function computedSectionIsSummary() {
  return props.sectionType === 'summary'
}
function computedParas() {
  return props.paragraphs.split('\\r\\n\\r\\n')
}
function getImgAltText() {
  return `${props.imgAlt}`
}
function getImageUrl() {
  return require(`~/assets/images/${props.imgPath}`)
}
</script>
<style>
section.article-section {
  background-repeat: repeat-y;
  display: flex;
  justify-content: flex-end;
}

section.article-section img {
  object-fit: cover;
  width: 100%;
}

section.article-section.summary {
  background-image: url('~/assets/images/bg/page-nav-bg-right.png');
  background-size: var(--bg-size);
  background-position: right;
}

section.article-section.para:nth-of-type(2n) {
  background-position: right;
  background-image: url('~/assets/images/bg/page-nav-bg-right.png');
  background-size: var(--bg-size);
}

section.article-section.paras {
  margin-bottom: 6rem;
}

section.article-section.para:nth-of-type(2n + 1) {
  padding: 0 var(--gutter-x-right) 0 var(--gutter-x);
}

section.article-section .copy {
  display: flex;
  flex-direction: column;
}

section.article-section .image {
  max-width: calc(100vw - 40px);
}

section.page:nth-of-type(2n + 1) article section.summary.article-section {
  flex-direction: row-reverse;
}

.page article .article-section.para {
  flex-direction: column !important;
}

section.page:nth-of-type(2n + 1) article section.summary.article-section .copy {
  padding-left: 0;
}

.article-section .figure {
  padding: 0 var(--gutter-x-right) var(--margin-y) var(--gutter-x);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3c3c3c;
  font-size: 1rem;
  letter-spacing: 1px;
  font-family: 'Ropa Sans', 'Roboto', 'Arial', sans-serif;
}

.article-section .figure img {
  object-fit: cover;
}

.article-section .figure figcaption {
  max-width: 80%;
}

p {
  font-size: var(--p-font-size);
  line-height: var(--p-line-height);
  letter-spacing: var(--p-tracking);
  margin-bottom: 0.75rem;
  font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
  color: #3c3c3c;
  padding: 0 var(--gutter-x);
}

main>section[data-active='true'] h1,
main>section[data-active='true'] h2,
main>section[data-active='true'] p {
  transition: all 0.5s;
}

main>section[data-active='false'] h1,
main>section[data-active='false'] h2,
main>section[data-active='false'] p,
main>section[data-active='false'] li,
main>section[data-active='false'] figcaption {
  color: transparent;
  text-shadow: 0 0 45px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
}

main>section[data-active='false'] img {
  filter: blur(var(--margin-x));
}

@media (min-width: 768px) {
  section.article-section {
    display: flex;
  }

  .page article .summary.article-section {
    flex-wrap: nowrap !important;
  }

  section.article-section .image img {
    width: 50vw;
  }
}

@media (min-width: 1281px) {
  section.article-section .image {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
  }

  section.article-section .copy {
    padding: 0 var(--gutter-x);
    flex-basis: 80%;
  }

  section.article-section .image img {
    max-width: 25vw;
  }

  section.article-section img {
    object-fit: contain;
  }

  section.article-section {
    display: flex;
    position: relative;
    justify-content: space-between;
    background-image: url('~/assets/images/bg/page-nav-bg-left.png');
    background-size: var(--bg-size);
    background-repeat: repeat-y;
    background-position: left;
    padding: 0 3rem 0 0;
    gap: 3rem;
  }

  .page article .article-section:nth-child(2n + 1) {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  .page article .article-section:nth-child(2n) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .page article .article-section.para {
    flex-direction: row;
  }

  .page article .article-section.para:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }

  .page article .article-section .figure {
    padding-right: 3rem;
    max-width: 20vw;
    background-repeat: repeat-y;
    background-position: right;
    justify-content: flex-end;
  }

  .page article .article-section:nth-child(2n + 1) .figure {
    padding-right: initial;
    padding-left: 3rem;
    background-position: left;
    align-items: flex-end;
    justify-content: center;
  }

  .page article .article-section.summary:nth-child(2n),
  .page article .article-section.summary:nth-child(2n + 1) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.75em;
    margin-bottom: 1rem;
  }
}
</style>
