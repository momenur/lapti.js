export const getBrandProducts = async (
  brand: string,
  minPrice?: string,
  maxPrice?: string
) => {
  const url = new URL("http://localhost:5000/api/v1/brand");

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
