const initialState = {
  dataCart: [],
  countCart: 0,
  statusError: true,
  product_id: 0,
  qty: 0,
};

export default function transactionReducer(
  transactionState = initialState,
  action
) {
  switch (action.type) {
    case "SUCCESS_GET_TRANSACTION":
      return {
        ...transactionState,
        dataCart: action.payload,
        deleted: false,
        qty_updated: false,
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
        deleted: true,
      };
    case "SUCCESS_CHECKOUT":
      return {
        ...transactionState,
      };
    case "SUCCESS_UPDATE_CART":
      return {
        ...transactionState,
        qty_updated: true,
      };
    default:
      return transactionState;
  }
}
