import styles from "./Pagination.module.css";

function Pagination({ page, setPage, maxPage }) {
  const prevHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= maxPage) return;
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <div>
        <button
          onClick={prevHandler}
          className={page === 1 ? styles.disable : undefined}
        >
          قبلی
        </button>
      </div>
      <div>
        <button
          onClick={() => setPage(1)}
          className={page === 1 ? styles.selected : undefined}
        >
          1
        </button>
        {page > 1 && page < maxPage && (
          <>
            <span>...</span>
            <button className={styles.selected}>{page}</button>
          </>
        )}
        {maxPage > 2 && <span>...</span>}
        {maxPage > 1 && (
          <button
            onClick={() => setPage(maxPage)}
            className={page === maxPage ? styles.selected : undefined}
          >
            {maxPage}
          </button>
        )}
      </div>
      <div>
        <button
          onClick={nextHandler}
          className={page === maxPage ? styles.disable : undefined}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}

export default Pagination;
