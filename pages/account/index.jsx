import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

import ProductItem from "../components/ProductItem";
import Modal from "../components/Modal";
import AddProductForm from "../components/AddProductForm";
import Pagination from "../components/Pagination";
import Loader from "../shared/Loader";
import api from "../configs/axios";
import { getProducts } from "../services/user";

import styles from "./AccountPage.module.css";

function AccountPage() {
  const [page, setPage] = useState(1);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["products", page],
    queryFn: getProducts,
  });
  const [addModal, setAddModal] = useState(false);

  const addHandler = async (data) => {
    if (!data.name) return toast.error("لطفا نام کالا را وارد نمایید.");
    if (!data.quantity) return toast.error("لطفا تعداد کالا را وارد نمایید.");
    if (!data.price) return toast.error("لطفا قیمت کالا را وارد نمایید.");

    try {
      await api.post("/products/", data);
      setAddModal(false);
      refetch();
      return toast.success("محصول با موفقیت افزوده شد.");
    } catch (err) {
      return toast.error("هنگام افزودن محصول مشکلی پیش آمد.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerSearch}>
        <div className={styles.headerInput}>
          <svg style={{ fill: "none", width: "24px", height: "24px" }}>
            <use href="/src/assets/icons/static_symbol.svg#icon-search"></use>
          </svg>
          <input type="text" placeholder="جستجو کالا" readOnly />
        </div>
        <div className={styles.headerProfile}>
          <div style={{ display: "flex" }}>
            <img src="/src/assets/images/user.png" alt="هادی کریمی" />
          </div>
          <div>
            <p>هادی کریمی</p>
            <span>مدیر</span>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div>
            <svg style={{ fill: "none", width: "30px", height: "30px" }}>
              <use href="/src/assets/icons/static_symbol.svg#icon-setting"></use>
            </svg>
            <h2>مدیریت کالا</h2>
          </div>
          <button onClick={() => setAddModal(true)}>افزودن محصول</button>
        </div>
        <div className={styles.mainContent}>
          <table>
            <thead>
              <tr>
                <th>نام کالا</th>
                <th>موجودی</th>
                <th>قیمت</th>
                <th colSpan="2">شناسه کالا</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!!isPending && (
                <tr style={{ border: "none" }}>
                  <td colSpan="6">
                    <Loader />
                  </td>
                </tr>
              )}
              {data
                ? data?.data.map((p) => (
                    <ProductItem
                      key={p.id}
                      data={p}
                      page={page}
                      setPage={setPage}
                    />
                  ))
                : !isPending && (
                    <tr style={{ border: "none", textAlign: "center" }}>
                      <td colSpan="6">هیچ محصولی یافت نشد.</td>
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination page={page} setPage={setPage} maxPage={data?.totalPages} />
      {addModal && (
        <Modal>
          <AddProductForm setAddModal={setAddModal} addHandler={addHandler} />
        </Modal>
      )}
    </div>
  );
}

export default AccountPage;
