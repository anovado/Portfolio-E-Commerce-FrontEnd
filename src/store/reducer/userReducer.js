
const initialState = {
  username: '',
  email: '',
  password: '',
  status: '',
  token: '',
  isLogin: false,
  namaPengguna: '',
  kataKunci: '',
  statusError: true
}

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value
      }
    case "SUCCESS_LOGIN":
      // console.warn("from userReducer", action.payload)
      return {
        ...userState,
        username: action.payload.username,
        token: action.payload.token,
        isLogin: true
      }
    case "LOGOUT":
      return {
        ...userState,
        isLogin: false
      }
    case "SUCESS_SIGNUP":
      return {
        ...userState,
        statusError: false
      }
    case "CHANGE_ACCOUNT_TYPE":
      console.log("change account in reduce", action.payload.target.value)
      return {
        ...userState,
        status: action.payload.target.value,
      }
    default:
      return userState;
  }
}