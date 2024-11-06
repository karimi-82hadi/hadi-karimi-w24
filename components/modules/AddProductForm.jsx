import { useState } from "react";

import styles from "./AddProductForm.module.css";

function AddProductForm({ setAddModal, addHandler }) {
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });

  const changeHandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addHandler(form);
      }}
      className={styles.addForm}
    >
      <p>ایجاد محصول جدید</p>
      <div className={styles.inputContainer}>
        <div>
          <label htmlFor="name">نام کالا</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="quantity">تعداد موجودی</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="price">قیمت</label>
          <input
            type="number"
            id="price"
            name="price"
            value={form.price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit">ایجاد</button>
        <button onClick={() => setAddModal(false)}>انطراف</button>
      </div>
    </form>
  );
}

export default AddProductForm;
