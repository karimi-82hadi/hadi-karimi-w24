const setCookie = (cookieName, maxAge) => {
  document.cookie = `ProMgt:Next:Token=${cookieName}; max-age=${maxAge}`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
