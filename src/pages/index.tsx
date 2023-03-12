import { Navbar, Hero } from "@/components";
import { products } from "@/utils/fake_products";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const filterProduct = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <>
      <Head>
        <title>Warteg Shop</title>
        <meta name="description" content="Most Authentic Warteg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* <Hero /> */}
    </>
  );
};

export default Home;
