//user register
import axios from "axios"

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "https://blogg-backend.onrender.com/api/user/signup",
      { name, email, password },
      config
    )

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    })
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Registration Failure",
    })
  }
}

//user login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "https://blogg-backend.onrender.com/api/user/login",
      { email, password },
      config
    )

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Unable to login",
    })
  }
}

//logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: "USER_LOGOUT" })
}

//get user info
export const getUserInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_INFO_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    }
    const { data } = await axios.get(
      `https://blogg-backend.onrender.com/api/user/${id}`,
      config
    )

    dispatch({
      type: "USER_INFO_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "USER_INFO_FAILURE",
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : "Unable to get user data",
    })
  }
}
