import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";


const loading = () => {
    return (
        <div className="grid md:grid-cols-3 gap5">
           {[...Array(9)].map((_, index) => (
            <ProductSkeleton key={index}></ProductSkeleton>
           ))} 
        </div>
    );
};

export default loading;