import APIManager from "./APIManager";

const handleRegister = async (queryObj) => {
  const message = await APIManager.axios
    .post(`/v1/member/signup`, {
      name: queryObj.name,
      email: queryObj.email,
      password: queryObj.password,
      phone: queryObj.phone,
    })
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
  handleRegister,
};
