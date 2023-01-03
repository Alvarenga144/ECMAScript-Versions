import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/categories");
const categories = await response.json();

export { categories };
