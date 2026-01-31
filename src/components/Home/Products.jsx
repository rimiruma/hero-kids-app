// import products from "@/data/toys.json";
import { getProducts } from "@/server/product";
import ProductCard from "../Cards/ProductCard";

const Products = async () => {
    const products = (await getProducts()) || [];
    return (
        <div>
            <h2 className="text-center text-3xl mb-10 font-bold">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {products.map((product, index) => (
                        <ProductCard key={index} product={product}></ProductCard>
                    ))}
            </div>
        </div>
    );
};

export default Products;