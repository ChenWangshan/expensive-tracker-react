export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id !== action.id)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.transaction, ...state.transactions]
            }
        case 'GET_TRANSACTIONS_FOM_LOCALSTORAGE':
            return action.data
        default:
            return state;
    }
}