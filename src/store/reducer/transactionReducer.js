const initialState = {
    dataCart: [],
    countCart: 0,
    statusError: true
};

export default function transactionReducer(transactionState = initialState, action) {
    switch (action.type) {
        case "SUCCESS_GET_TRANSDETAIL":
            return {
                ...transactionState,
                dataCart: action.payload,
            };
        default:
            return transactionState;
    }
}