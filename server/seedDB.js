import { kpis } from "./data/index.js";
import KPI from "./models/kpi.js";

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
}

export default seedDB;
