const initialState = {
    dataCart: [],
    countCart: 0,
    statusError: true,
    product_id: 0,
    qty: 0
};

export default function transactionReducer(transactionState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_TRANSACTION":
            return {
                ...transactionState,
                dataCart: action.payload,
            };
        case "SUCCESS_GET_ALL_TRANSACTION":
            return {
                ...transactionState,
                dataCart: action.payload,
            };
        case "SUCCESS_POST_TRANSACTION":
            return {
                ...transactionState,
                statusError: false,
            };
        case "SUCCESS_DELETE_TRANSACTION":
            return {
                ...transactionState,
                statusError: false,
            };
        case "SUCCESS_CHECKOUT":
            return {
                ...transactionState,
            };
        default:
            return transactionState;
    }
}