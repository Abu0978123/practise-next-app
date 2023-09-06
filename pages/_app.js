import Layout from "@/components/layout";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* // <Layout> */}
      <Navigate/>
      <Component {...pageProps} />
      </>
    // </Layout>
  );
}

function Navigate () {
  return (
  <>
  <Link href={'/'} > Home </Link>
  <Link href={'/blogs'}> blogs </Link>
  <Link href={'/about'} replace> about </Link>

  </>
  )
}
