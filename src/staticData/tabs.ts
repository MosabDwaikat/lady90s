import ProductType from "../types/productType";
import bags from "./bags";

export interface TabProps {
  label: string;
  content: ProductType[];
  target: string;
}

const tabs: TabProps[] = [
  {
    target: "/Chanel",
    label: "شانيل",
    content: bags
  },
  {
    target: "/Gucci",
    label: "جوتشي",
    content: bags
  },
  {
    target: "/Michael-Kors",
    label: "مايكل كورس",
    content: bags
  },
  {
    target: "/Balenciaga",
    label: "بالنسياغا",
    content: bags
  },
  {
    target: "/Dior",
    label: "ديور",
    content: bags
  },
  {
    target: "/Hermes",
    label: "هيرميز",
    content: bags
  },
  {
    target: "/Guess",
    label: "جيس",
    content: bags
  },
  {
    target: "/Calvin-Klein",
    label: "كالفن كلاين",
    content: bags
  },
  {
    target: "/Prada",
    label: "برادا",
    content: bags
  },
  {
    target: "/Fendi",
    label: "فيندي",
    content: bags
  },
  {
    target: "/YSL",
    label: "YSL",
    content: bags
  },
  {
    target: "/Rolex",
    label: "روليكس",
    content: bags
  },
  {
    target: "/Burberry",
    label: "بيربيري",
    content: bags
  },
  {
    target: "/Diesel",
    label: "ديزل",
    content: bags
  }
];

export default tabs;
