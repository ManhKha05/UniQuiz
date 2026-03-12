const init = {
  mode: "login",
  open: false
}

const AuthModalReducer = (state = init, action) => {
  // console.log(action)
  switch (action.type) {
    case "LOGIN":
      return {
        mode: "login",
        open: true
      };
    case "REGISTER":
      return {
        mode: "register",
        open: true
      };
    case "FORGOT_PASSWORD":
      return {
        mode: "forgotPassword",
        open: true
      }
    case "CLOSE":
      return {
        mode: "",
        open: false
      }
    default:
      return state;
  }
}

export default AuthModalReducer;