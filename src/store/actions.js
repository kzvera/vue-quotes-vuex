export default {
    addQuote(context, payload) {
        context.commit('addQuote', payload);
    },
    removeQuote(context, payload) {
        context.commit('removeQuote', payload);
    }
}