<template>
    <div class="row">
        <quote v-for="(quote, index) in quotes" :key="quote" @click="removeQuote(index)">{{ quote }}</quote>
    </div>
</template>

<script>
import Quote from './Quote.vue';
export default {
    components: {
        Quote
    },
    props: ['quotes'],
    methods: {
        removeQuote(index) {
            this.$store.dispatch('removeQuote', index);
        }
    }
}
</script>

