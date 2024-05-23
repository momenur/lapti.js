export const getAllLaptops = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops", {
    cache: "force-cache",
  });
  return res.json();
};
