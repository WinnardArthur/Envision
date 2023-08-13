import { kpis, products, transactions } from "./data/index.js";
import KPI from "./models/kpi.js";
import Product from "./models/product.js";
import Transaction from "./models/transaction.js";

function seedDB() {
  // Seed KPIs
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

  // Seed Products
  Product.deleteMany()
    .then(() => {
      console.log("Unmounting products...");
      Product.insertMany(products)
        .then(() => {
          console.log("Products loaded...");
        })
        .catch((error) => {
          console.log("Failed to load Products: ", error);
        });
    })
    .catch((error) => console.log("An error occured: ", error));
  
  // Seed Transactions
  Transaction.deleteMany()
    .then(() => {
      console.log("Unmounting transactions ...");
      Transaction.insertMany(transactions)
        .then(() => {
          console.log("Transactions loaded...");
        })
        .catch((error) => {
          console.log("Failed to load transactions: ", error);
        });
    })
    .catch((error) => console.log("An error occured: ", error));
}

export default seedDB;
