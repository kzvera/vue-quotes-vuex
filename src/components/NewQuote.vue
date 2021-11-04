<template>
    <div class="row">
        <form @submit.prevent="createNew">
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label for="quote">Quote</label>
                <textarea class="form-control" name="quote" id="quote" cols="30" rows="3" v-model.trim="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button type="submit" class="btn btn-primary">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quote: ''
        }
    },
    computed: {
        quotesCount() {
            return this.$store.getters['quotesCount'];
        },
        maxQuotes() {
            return this.$store.getters['maxQuotes'];
        }
    },
    methods: {
        createNew() {
            if (this.quotesCount >= this.maxQuotes) {
                return alert('Please delete quotes first');
            } else  {
                this.$store.dispatch('addQuote', this.quote);
                this.quote = '';
            }
        }
    }
}
</script>

