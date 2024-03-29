export default function Review({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Product {params.productId} , review {params.reviewId}
    </h1>
  );
}
