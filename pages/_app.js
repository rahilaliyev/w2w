import LandingLayout from "@/layouts/LandingLayout";
import AdminLayout from "@/layouts/AdminLayout";
import "@/styles/app.scss";

export default function MyApp({ Component, pageProps, router }) {
  const adminPanel = router.route.startsWith("/admin") ? true : false;
  const getLayout = adminPanel ? (page) => <AdminLayout children={page} /> : (page) => <LandingLayout children={page} />;

  return <>{getLayout(<Component {...pageProps} />, pageProps)}</>;
}
