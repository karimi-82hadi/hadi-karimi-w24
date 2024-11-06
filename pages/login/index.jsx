import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../services/auth";
import { setCookie } from "../utils/cookie";

import styles from "./LoginPage.module.css";

function LoginPage() {
  const naviagate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.username) {
      return toast.error("لطفا نام کاربری را وارد نمایید.");
    }

    if (!form.password) {
      return toast.error("لطفا رمز عبور را وارد نمایید.");
    }

    const { res, err } = await loginUser(form);

    if (res) {
      setCookie(res.token, 24 * 60 * 60);
      toast.success("با موفقیت وارد حساب کاربری شدید.");
      setTimeout(() => {
        naviagate("/account");
      }, 3000);
      return;
    }

    if (err) {
      return toast.error("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>بوت کمپ بوتواستارت</div>
      <div className={styles.formContainer}>
        <form onSubmit={submitHandler}>
          <div className={styles.formHeader}>
            <svg style={{ width: "80px", height: "85px" }}>
              <use href="/src/assets/icons/static_symbol.svg#icon-logo"></use>
            </svg>
            <h1>فرم ورود</h1>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={changeHandler}
              placeholder="نام کاربری"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={changeHandler}
              placeholder="رمز عبور"
            />
          </div>
          <div className={styles.formFooter}>
            <button type="submit">ورود</button>
            <Link to="/signup">ایجاد حساب کاربری؟</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
