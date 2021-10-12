import { createRouter, createWebHistory } from "vue-router";
import Start from "../views/Start.vue";
import Hardware from "../views/Hardware.vue";
import Customise from "../views/Customise.vue";
import SystemType from "../views/SystemType.vue";
import AdditionalEntryPoints from "../views/AdditionalEntryPoints.vue";
import AccessDoorControl from "../views/AccessDoorControl.vue";
import Software from "../views/Software.vue";
import InfectionControlPackage from "../views/InfectionControlPackage.vue";
import ProductAddons from "../views/ProductAddons.vue";
import Summary from "../views/Summary.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/system-type",
    name: "System Type",
    component: SystemType,
  },
  {
    path: "/hardware",
    name: "Hardware",
    component: Hardware,
  },
  {
    path: "/customiser",
    name: "Customise",
    component: Customise,
  },
  {
    path: "/additional-entry-points",
    name: "Additional Entry Points",
    component: AdditionalEntryPoints,
  },
  {
    path: "/access-door-control",
    name: "Access Door Control",
    component: AccessDoorControl,
  },
  {
    path: "/software",
    name: "Software",
    component: Software,
  },
  {
    path: "/infection-control-packages",
    name: "Infection Control Packages",
    component: InfectionControlPackage,
  },
  {
    path: "/product-addons",
    name: "Product Addons",
    component: ProductAddons,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
