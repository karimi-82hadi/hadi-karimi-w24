import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { signinUser } from "@/services/auth";

import styles from "./SignupPage.module.css";

function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
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

    if (form.password !== form.confirmPassword) {
      return toast.error("لطفا تکرار رمز عبور را به درستی وارد نمایید.");
    }

    const { res, err } = await signinUser({
      username: form.username,
      password: form.password,
    });

    if (res) {
      toast.success("ثبت نام با موفقیت انجام شد.");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
      return;
    }

    if (err) {
      return toast.error("کاربر با این نام کاربری وجود دارد.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>بوت کمپ بوتواستارت</div>
      <div className={styles.formContainer}>
        <form onSubmit={submitHandler}>
          <div className={styles.formHeader}>
            <svg style={{ width: "80px", height: "85px" }}>
              <use href="/icons/static_symbol.svg#icon-logo"></use>
            </svg>
            <h1>فرم ثبت نام</h1>
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
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={changeHandler}
              placeholder="تکرار رمز عبور"
            />
          </div>
          <div className={styles.formFooter}>
            <button type="submit">ثبت نام</button>
            <Link href="/login">حساب کاربری دارید؟</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
