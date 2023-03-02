<template>
  <article>
    <div class="article-content-wrapper">
      <ArticleTitle child-class="left" :h1text="details.title" :h2text="details.subtitle" />
      <section v-if="details.hasCaseStudy" class="case-study">
        <ArticleTitle child-class="right" h1text="Case Study" h2text=" " />
        <Carousel></Carousel>
      </section>
      <ArticleSection :paragraphs="details.summary.paragraphs" :img-path="details.summary.imgPath"
        section-type="summary" />
      <ArticleTools :libs="details.libs" :langs="details.langs" :demo-url="details.demoUrl"
        :codebase-url="details.codebaseUrl" :designs-url="details.designsUrl" :blog-url="details.blogUrl" />

      <div class="article-paras-wrapper">
        <ArticleSection v-for="(article, i) in details.articles" :key="i" :paragraphs="article.paragraphs"
          :img-path="article.imgPath" :img-caption="article.imgCaption" :img-alt="article.imgAlt" section-type="para" />
      </div>
      <div class="top-button">
        <button class="return-home-up" @click="slide('top', 'first')">
          <ArrowCircleUpIcon />
        </button>
      </div>
    </div>
  </article>
</template>
<script>
import ArticleSection from '../Article/ArticleSection.vue'
import ArticleTitle from '../Article/ArticleTitle.vue'
import ArticleTools from '../Article/ArticleTools.vue'
import Carousel from '../Carousel.vue'
import { ArrowCircleUpIcon } from "@vue-hero-icons/outline"

export default {
  components: {
    ArticleSection,
    ArticleTitle,
    ArticleTools,
    Carousel,
    ArrowCircleUpIcon
  },
  props: {
    details: Object,
    slide: Function,
  },
  mounted: () => {
    const expandCaseStudy = document.querySelector('.case-study')
    const expandCaseStudyBtns = document.querySelectorAll('.case-study header')
    const carouselCaseStudies = document.querySelectorAll('.carousel.slide')
    expandCaseStudyBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        console.log('Expanding case study...', expandCaseStudyBtns)
        carouselCaseStudies[i].style.height = btn.classList.contains('active')
          ? '0'
          : 'auto'

        expandCaseStudy.classList.toggle('active')
        btn.classList.toggle('active')
      })
    })
  },
}
</script>
<style>
article {
  /* width: 100%; */
  padding: 0;
  position: relative;
  min-height: 100vh;
}

button.return-home-up {
  transform: var(--btn-scale);
  background: transparent;
  color: #3c3c3c;
  opacity: 0.5 !important;
  border: 0;
}

button.return-home-up:hover {
  color: black;
}

.article-content-wrapper {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:
    6rem minmax(8rem, auto) minmax(8rem, auto) minmax(14rem, auto) minmax(8rem, auto);
  grid-template-areas: 'title title button' 'row1 row1 row1' 'row2 row2 row2' 'row3 row3 row3' 'row4 row4 row4';
  row-gap: 3rem;
}

article>.article-content-wrapper,
.top-button {
  background-image: url('~/assets/images/bg/page-nav-bg-white.png');
  background-repeat: repeat-y;
  background-position: right;
}

article .top-button {
  grid-area: button;
  border: none;
  background-color: #fff;
  justify-content: flex-end;
  display: flex;
  align-items: center;
}

article .article-title {
  grid-area: title;
}

article .summary.article-section {
  grid-area: row1;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: var(--margin-y)
}

.article-content-wrapper>section.case-study {
  grid-row: auto;
  grid-column: -2 / -1;
}

.article-content-wrapper>section.case-study.active {
  grid-column: 1 / -1;
}

article .article-tools {
  grid-row: auto;
  grid-column: 1/3;
}

.article-paras-wrapper {
  grid-row: auto;
  grid-column: 1/-1;
}

.case-study {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.article.para {
  display: flex;
}

.article-section.para:nth-of-type(2n+ 1) {
  flex-direction: row-reverse;
}

@media only screen and (max-width: 1280px) {
  section.article-section.para {
    margin-bottom: 0;
  }

  article .summary.article-section {
    margin-top: calc(-1 * var(--margin-y));
  }

  .case-study header {
    width: 100%;
  }

  article .top-button {
    position: absolute;
    right: 0px;
  }

  .case-study,
  .article-tools {
    width: 100%;
    height: auto;
    justify-content: start;
  }

  .article-content-wrapper {
    grid-template-columns: 100%;
    grid-template-rows: 6rem auto minmax(4rem, auto);
    grid-template-areas:
      'title'
      'row1'
      'row2'
      'row3'
      'row4'
      'row5'
      'row6';
    row-gap: var(--margin-y);
  }
}
</style>
