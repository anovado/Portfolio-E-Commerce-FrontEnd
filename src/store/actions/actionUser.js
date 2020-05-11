import axios from "axios";

// function to sign in
export const doLogin = (props) => {
    return async (dispatch, getState) => {
        await axios({
            method: "GET",
            url: "http://0.0.0.0:5050/signin",
            params: {
                username: getState().user.namaPengguna,
                password: getState().user.kataKunci,
            }
        })
            .then(async (response) => {
                if (response.data.hasOwnProperty("token")) {
                    dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("isLogin", true);
                }
            })
            .catch(async () => {
                await alert("Password atau Username anda salah!")
            })
    };
};

// action creator
export const changeInputUser = (e) => {
    return {
        type: "CHANGE_INPUT_USER",
        payload: e,
    };
};


// function to signup
export const doSignUp = (props) => {
    console.log("berhasil masuk")
    return async (dispatch, getState) => {
        const bodyRequest = {
            username: getState().user.namaPengguna,
            password: getState().user.kataKunci,
            status: getState().user.status
        }
        await axios
            .post("http://0.0.0.0:5050/client", bodyRequest)
            .then(async (response) => {
                dispatch({ type: "SUCCESS_SIGNUP", payload: response.data });

            })
            .catch(async () => {
                await alert("Invalid data!")
            })
    };
};


// function to logout
export const doLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    return {
        type: "LOGOUT",
        payload: e
    }
};


// function to get account type value in registration form
export const changeAccountType = (e) => {
    console.log("value radio", e)

    return {
        type: "CHANGE_ACCOUNT_TYPE",
        payload: e,
    };
};