import { kpis, products } from "./data/index.js";
import KPI from "./models/kpi.js";
import Product from "./models/product.js";

function seedDB() {
  KPI.deleteMany()
    .then(() => {
      console.log("Unmounting KPIS...");
      KPI.insertMany(kpis)
        .then(() => {
          console.log("KPIs loaded...");
        })
        .catch((error) => {
          console.log("Failed to load KPIs: ", error);
        });
    })
    .catch((error) => console.log("An error occured: ", error));

  Product.deleteMany()
    .then(() => {
      console.log("Unmounting Products...");
      Product.insertMany(products)
        .then(() => {
          console.log("Products loaded...");
        })
        .catch((error) => {
          console.log("Failed to load Products: ", error);
        });
    })
    .catch((error) => console.log("An error occured: ", error));
}

export default seedDB;
