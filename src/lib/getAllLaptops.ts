export const getAllLaptops = async () => {
  const res = await fetch(
    "https://l2-b2-frontend-path-assignment-6-server-starter-pack-chi.vercel.app/api/v1/laptops",
    {
      cache: "no-store",
    }
  );
  return res.json();
};
