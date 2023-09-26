import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0; //prevent caching

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard();  

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard[0]} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg-px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
