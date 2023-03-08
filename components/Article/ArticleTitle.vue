<template>
  <header :class="[childClass, 'article-title']">
    <h1>
      {{ h1text }}
    </h1>
    <h2>
      {{ h2text }}
    </h2>
  </header>
</template>
<script>
export default {
  props: {
    h1text: String,
    h2text: String,
    childClass: String,
  },
}
</script>
<style>
header.article-title {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

header.article-title.right {
  align-items: flex-end;
  padding: 0;
}

.case-study header.article-title::before {
  position: absolute;
  content: '';
  left: -1rem;
  top: 0rem;
  height: 4rem;
  width: 4rem;
  background-repeat: no-repeat;
  padding: 1rem;
  background-image: url('~/assets/images/icons/expand-icon.png');
}

.case-study header.article-title h1 {
  font-family: 'Rubik', 'Roboto', 'Arial', sans-serif;
}

.case-study header.active.article-title::before {
  background-image: url('~/assets/images/icons/contract-icon.png');
}

.case-study header.article-title:hover {
  cursor: pointer;
}

.case-study header.article-title h2:hover {
  cursor: initial;
}

.case-study header.article-title:hover::before {
  background-position: center;
  border: 2px dashed #846b63;
  padding: 1rem;
  height: 5rem;
  width: 5rem;
  background-position: center;
  border-radius: 1rem;
  transition: 0.3s all;
}

.case-study header.article-title:hover::before {
  left: -1.5rem;
}

header.article-title h1,
header.article-title h2 {
  font-family: 'Merriweather', 'Georgia', serif;
  /* margin: 0; */
  padding: 0;
  font-weight: 500;
  width: 100%;
}

header.article-title.left {
  width: 100%;
  align-items: flex-start;
  margin-bottom: var(--h1-margin);
}

header.article-title.left h1,
header.article-title.left h2 {
  text-align: left;
  padding-left: var(--gutter-x);
}

header.article-title.right h1,
header.article-title.right h2 {
  font-weight: 300;
  font-size: 1.5em;
  text-align: right;
}

header.article-title.right:not(.active) h2 {
  height: 4px;
}

header.article-title h1 {
  color: #3c3c3c;
  font-size: 1.5em;
  line-height: var(--h1-line-height);
  margin-bottom: 0.75rem;
}

.case-study .article-title h1 {
  font-size: 1.25em;
  font-weight: 500;
}

.case-study.active header.article-title h2::before {
  background-size: 20%;
}

header.article-title h2::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background-repeat: no-repeat;
  max-width: 100%;
}

header.article-title.left h2::before {
  background-image: url('~/assets/images/bg/divider-left.png');
  background-position: right;
  left: 0;
  align-items: flex-start;
  max-width: 100%;
}

header.article-title.right h2::before {
  background-image: url('~/assets/images/bg/divider-right.png');
  right: 0;
  align-items: flex-end;
}

.case-study .article-title.right h2::before {
  background-position: right;
  background-size: 75%;
}

header.article-title h2 {
  color: #3c3c3c;
  position: relative;
  line-height: 1.5rem;
  background-repeat: repeat-y;
  font-size: 1em;
  height: 2rem;
  max-width: 100%;
}

header.article-title.right h2 {
  background-image: url('~/assets/images/bg/page-nav-bg-right.png');
  background-size: var(--bg-size);
  background-position: right;
}

header.article-title.left h2 {
  background-image: url('~/assets/images/bg/page-nav-bg-left.png');
  background-size: var(--bg-size);
  background-position: left;
}

@media (min-width: 1280px) {
  .case-study header.active.article-title h2::before {
    background-position: right;
  }

  header.article-title.right:not(.active) h2 {
    height: 1rem;
  }

  header.article-title.right h1,
  header.article-title.right h2 {
    padding-right: 0;
    /* min-height: 2rem; */
    margin: 1.5rem 0;
    text-align: right;
  }

  header.article-title.left h1,
  header.article-title.left h2 {
    height: 3rem;
  }

  header.article-title.right h1,
  header.article-title.right h2 {
    /* padding-right: var(--gutter-x); */
    margin: 0;
  }

  .carousel-control-prev {
    left: 0;
    right: initial;
  }

  .carousel-control-next {
    right: 0;
    left: initial;
  }

  header.article-title h1 {
    font-size: 2.25em;
    /* 36px */
    line-height: 2rem;
    margin-bottom: 0.75rem;
  }

  header.article-title h2 {
    font-size: 1.5em;
    line-height: 2rem;
  }

  .case-study header.article-title::before {
    top: -0.5rem;
  }

  .case-study header.article-title:hover::before {
    top: -1.5rem;
  }
}

@media (min-width: 1680px) {
  header.article-title h1 {
    font-size: 3.375em;
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
  }

  header.article-title h2 {
    font-size: 2.25em;
    /* 36px */
    line-height: 3.5rem;
  }
}
</style>
