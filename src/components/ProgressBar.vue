<template>
    <div class="row">
        <div class="col-xs-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="progressBarStyles">
                    {{ quotesCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        maxQuotes() {
            return this.$store.getters['maxQuotes'];
        },
        quotesCount() {
            return this.$store.getters['quotesCount'];
        },
        progressBarStyles() {
            return {width: (this.quotesCount / this.maxQuotes) * 100 + '%'};
        }
    }
}
</script>