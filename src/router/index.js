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
import EntrysignAddons from "../views/sub/EntrysignAddons.vue";
import FobsTokens from "../views/sub/FobsTokens.vue";
import IdCards from "../views/sub/IdCards.vue";
import LabelsCards from "../views/sub/LabelsCards.vue";
import Lanyards from "../views/sub/Lanyards.vue";
import Terminals from "../views/sub/Terminals.vue";
import Details from "../views/Details.vue";
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
    path: "/product-addons/entrysign-addons",
    name: "Entrysign Add-ons",
    component: EntrysignAddons,
  },
  {
    path: "/product-addons/fobs-and-tokens",
    name: "Fobs and Tokens",
    component: FobsTokens,
  },
  {
    path: "/product-addons/terminals",
    name: "Terminals",
    component: Terminals,
  },
  {
    path: "/product-addons/labels-cards",
    name: "Labels and Business Cards",
    component: LabelsCards,
  },
  {
    path: "/product-addons/id-cards",
    name: "ID Cards and Holders",
    component: IdCards,
  },
  {
    path: "/product-addons/lanyards",
    name: "Lanyards and YoYo Reels",
    component: Lanyards,
  },

  {
    path: "/details",
    name: "Details",
    component: Details,
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
