<script setup></script>
<template>
  <div class="case-study">
    <b-carousel ref="myCarousel" id="case-study-carousel" img-width="1024px">
      <b-carousel-slide alt="App screens Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/1.png"></b-carousel-slide>
      <b-carousel-slide alt="Title Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/2.png"></b-carousel-slide>
      <b-carousel-slide alt="Overview Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/3.png"></b-carousel-slide>
      <b-carousel-slide alt="Structure Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/4.png"></b-carousel-slide>
      <b-carousel-slide alt="Problem Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/5.png"></b-carousel-slide>
      <b-carousel-slide alt="Problem Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/6.png"></b-carousel-slide>
      <b-carousel-slide alt="Constraints Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/7.png"></b-carousel-slide>
      <b-carousel-slide alt="Desired Outcomes Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/8.png"></b-carousel-slide>
      <b-carousel-slide alt="Solutions Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/9.png"></b-carousel-slide>
      <b-carousel-slide alt="Solutions Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/10.png"></b-carousel-slide>
      <b-carousel-slide alt="Summary Slide" v-lazy-load
        img-src="~/assets/images/casestudyframes/habitfract1/11.png"></b-carousel-slide>
    </b-carousel>

    <button class="carousel-control-prev" type="button" data-bs-target="#case-study-carousel" data-bs-slide="prev"
      @click="prev">
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#case-study-carousel" data-bs-slide="next"
      @click="next">
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    prev() {
      this.$refs.myCarousel.prev()
    },
    next() {
      this.$refs.myCarousel.next()
    }
  }
}
</script>
<style>
.case-study {
  position: relative;
}

.case-study .carousel-control-prev,
.case-study .carousel-control-next {
  position: absolute;
  bottom: initial;
  display: none;
  margin: 1rem;
  transform: var(--btn-scale);
}

.case-study.active .carousel-control-prev,
.case-study.active .carousel-control-next {
  top: -3rem;
  display: block;
}

.case-study .carousel-control-prev,
.case-study .carousel-control-next {
  height: 1rem;
  width: 1rem;
  padding: 0.5rem;
  background-color: #846b63;
  border-radius: 0.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.case-study .carousel-control-prev {
  left: initial;
  right: 55%;
  background-image: url('~/assets/images/icons/left-icon.png');
}

.case-study .carousel-control-next {
  right: initial;
  left: 55%;
  background-image: url('~/assets/images/icons/right-icon.png');
}

.carousel {
  position: relative;
  padding: 0 4rem 0 0;
  background-image: url('~/assets/images/bg/page-nav-bg-right.png');
  background-size: var(--bg-size);
  background-position: right;
  background-repeat: repeat-y;
  height: 0;
  overflow: hidden;
  transition: 0.3s all ease-out;
  padding-bottom: 2rem;
  margin-left: 5rem;
}

.case-study>header.active+.carousel {
  overflow: initial;
  margin-left: 0;
}

.case-study>.article-title.active+.carousel .carousel-indicators {
  left: 0;
}

.carousel-indicators button {
  display: flex;
  align-items: center;
}

.carousel-indicators {
  width: 100%;
  z-index: 1;
  height: 2rem;
  display: flex;
  align-items: center;
  bottom: 0;
  left: -2.5rem;
  margin: 0 !important;
  padding: 0;
  background-color: #846b63;
  opacity: 0.5;
}
</style>
