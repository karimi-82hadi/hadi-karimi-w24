import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQueryProvider from "@/providers/ReactQueryProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
      <ToastContainer rtl={true} autoClose={2000} pauseOnFocusLoss={false} />
    </ReactQueryProvider>
  );
}
