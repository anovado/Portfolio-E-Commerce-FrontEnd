
const initialState = {
  username: '',
  email: '',
  password: '',
  status: '',
  token: '',
  isLogin: false,
  namaPengguna: '',
  kataKunci: '',
  statusError: true,
  name: "",
  province: "",
  city: "",
  postal_code: "",
  city_type: "kota",
  street: "",
  phone: ""
};

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
      return {
        ...userState,
        status: action.payload.target.value,
      }
    case "GET_USER_DATA":
      return {
        ...userState,
        name: action.payload.name,
        email: action.payload.email,
        province: action.payload.province,
        city: action.payload.city,
        postal_code: action.payload.postal_code,
        street: action.payload.street,
        phone: action.payload.phone,
      }
    case "POST_USER_DATA":
      return {
        ...userState,
        statusError: false
      }
    default:
      return userState;
  }
}