export default (state, action) => {
    switch(action.type) {
        default:
            return state;
        case "ADD_STOCK_TO_WATCHLIST":
            return {
                ...state, watchList: [action.payload, ...state.watchList]
            }
    }
}