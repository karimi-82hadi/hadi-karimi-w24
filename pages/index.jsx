import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/account");
  }, []);

  return <h1 style={{ display: "none" }}>مینی پروژه مدیریت محصولات</h1>;
}
