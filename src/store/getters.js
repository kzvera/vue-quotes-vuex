export default {
    quotes(state) {
        return state.quotes;
    },
    maxQuotes(state) {
        return state.maxQuotes;
    },
    quotesCount(state) {
        return state.quotes.length;
    }
}