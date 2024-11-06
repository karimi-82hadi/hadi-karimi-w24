import api from "@/configs/axios";
import { getCookie } from "@/utils/cookie";

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

const authorization = (router) => {
  const pathname = router.pathname;
  const token = getCookie("ProMgt:Next:Token");

  switch (pathname) {
    case "/account":
      if (!token) router.push("/login");
      break;

    case "/login":
      if (token) router.push("/account");
      break;
  }
};

export { signinUser, loginUser, authorization };
