import api from "../configs/axios";

const signinUser = async (data) => {
  try {
    const res = await api.post("/auth/register", data);
    return { res };
  } catch (err) {
    return { err };
  }
};

const loginUser = async (data) => {
  try {
    const res = await api.post("/auth/login", data);
    return { res };
  } catch (err) {
    return { err };
  }
};

export { signinUser, loginUser };
