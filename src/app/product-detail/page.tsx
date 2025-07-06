

import { Suspense } from "react";
import { ProductDetailLayout } from "@/components/ProductDetail/ProductDetailLayout";

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex items-center justify-center min-h-screen w-full bg-white"
          style={{ color: '#111', fontSize: 22, fontWeight: 600, textAlign: 'center' }}
        >
          Loading product details...
        </div>
      }
    >
      <ProductDetailLayout />
    </Suspense>
  );
}
