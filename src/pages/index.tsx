import { Hero, Product, Layout } from "@/components";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout
      metaContent="Most Authentic Warteg"
      metaDescription="The Warteg Marketplace!"
      title="Home | wShop"
    >
      <Hero />
      <Product />
    </Layout>
  );
};

export default Home;
