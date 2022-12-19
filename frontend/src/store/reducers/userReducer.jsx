//register reducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST": {
      return { loading: true }
    }
    case "USER_REGISTER_SUCCESS": {
      return { loading: false, userInfo: action.payload }
    }
    case "USER_REGISTER_FAILURE": {
      return { loading: false, error: action.payload }
    }
    default: {
      return state
    }
  }
}

//login reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST": {
      return { loading: true }
    }
    case "USER_LOGIN_SUCCESS": {
      return { loading: false, userInfo: action.payload }
    }
    case "USER_LOGIN_FAILURE": {
      return { loading: false, error: action.payload }
    }
    case "USER_LOGOUT": {
      return {}
    }
    default: {
      return state
    }
  }
}

//userInformation
export const userInformationReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_INFO_REQUEST": {
      return { loading: true }
    }
    case "USER_INFO_SUCCESS": {
      return { loading: false, info: action.payload }
    }
    case "USER_INFO_FAILURE": {
      return { loading: false, error: action.payload }
    }

    default: {
      return state
    }
  }
}
