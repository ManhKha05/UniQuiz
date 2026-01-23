const token = localStorage.getItem("token");

const init = {
  isAuthenticated: (token ? true : false)
}

const authReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isAuthenticated: true
      }
    case "LOGOUT":
      return {
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer;