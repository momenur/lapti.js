export const getBrandProducts = async (
  brand: string,
  minPrice?: string,
  maxPrice?: string
) => {
  const url = new URL(
    "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/brand"
  );

  // Append query parameters
  url.searchParams.append("brand", brand);
  if (minPrice) url.searchParams.append("minPrice", minPrice);
  if (maxPrice) url.searchParams.append("maxPrice", maxPrice);

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Error fetching products for brand ${brand}: ${res.statusText}`
    );
  }
  return res.json();
};
