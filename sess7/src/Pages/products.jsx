import CardProducts from "../component/Fragments/CardProducts";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProducts>
        <CardProducts.Header image="/images/shoes.jpg" />
        <CardProducts.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sequi
          asperiores quaerat eaque omnis harum repudiandae voluptatem ea officia
          totam natus corporis, magnam ullam delectus sed laudantium vitae
          mollitia rerum!
        </CardProducts.Body>
        <CardProducts.Footer price="Rp. 1.000.000" />
      </CardProducts>
    </div>
  );
};

export default ProductPage;
