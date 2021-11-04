<template>
  <div class="container">
    <progress-bar></progress-bar>
    <new-quote></new-quote>
    <quote-grid :quotes="quotes"></quote-grid>
    <div class="row">
      <div class="col-xs-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  components: {
    QuoteGrid,
    NewQuote,
    ProgressBar
  },
  computed: {
    quotes() {
      return this.$store.getters['quotes'];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
