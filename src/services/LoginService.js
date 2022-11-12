import APIManager from "./APIManager";

const handleLogin = async (queryObj) => {
  const message = await APIManager.axios
    .post(`/v1/member/login`, queryObj)
    .then((res) => {
      if (res.data.message == "success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstName", res.data.admin.firstname);
        return "Success";
      }
    })
    .catch((err) => {
      if (typeof err.response !== "undefined") {
        return err.response.message;
      } else {
        return "Network error";
      }
    });
  return message;
};

export default {
  handleLogin,
};
