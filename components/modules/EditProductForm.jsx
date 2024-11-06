import { useState } from "react";

import styles from "./EditProductForm.module.css";

function EditProductForm({ data, setEditModal, editHandler }) {
  const { name, price, quantity } = data;
  const [form, setForm] = useState({ name, price, quantity });

  const changeHandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editHandler(form);
      }}
      className={styles.editForm}
    >
      <p>ویرایش اطلاعات</p>
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
        <button type="submit">ثبت اطلاعات جدید</button>
        <button onClick={() => setEditModal(false)}>انطراف</button>
      </div>
    </form>
  );
}

export default EditProductForm;
