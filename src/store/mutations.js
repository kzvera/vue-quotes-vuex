export default {
    addQuote(state, payload) {
        state.quotes.push(payload);
    },
    removeQuote(state, payload) {
        state.quotes.splice(payload, 1);
    }
}