import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "@/styles/globals.css";
import { authorization } from "@/services/auth";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    authorization(router);
  }, [pathname]);

  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
      <ToastContainer rtl={true} autoClose={2000} pauseOnFocusLoss={false} />
    </ReactQueryProvider>
  );
}
