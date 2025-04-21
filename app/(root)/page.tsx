import type { Metadata } from "next";
import ProductList from '@/components/share/product/product-list';
import sampleData from '@/db/sample-data';

export const metadata: Metadata = {
  title: "Home",
}

const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </>
  );
}

export default Homepage;