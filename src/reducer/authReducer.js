const initialState = {
  authError: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN FAILED");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("LOGIN Success");
      return {
        ...state,
        authError: " ",
      };
    case "SignOut_Success":
      console.log("LOGIN Success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("SignUp Success");
      return {
        ...state,
        authError: "",
      };
    case "SIGNUP_ERROR":
      console.log("SignUp Failed");
      return {
        ...state,
        authError: "SignUP Failed",
      };
    default:
      return state;
  }
};

export default authReducer;
