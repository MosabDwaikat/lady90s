import { CustomCardProps } from "../components/CustomComponents/CustomCard";
import bags from "./bags";

export interface TabProps {
  label: string;
  content: CustomCardProps["content"][];
}

const tabs: TabProps[] = [
  {
    label: "شانيل",
    content: bags
  },
  {
    label: "جوتشي",
    content: bags
  },
  {
    label: "مايكل كورس",
    content: bags
  },
  {
    label: "بالنسياغا",
    content: bags
  },
  {
    label: "ديور",
    content: bags
  },
  {
    label: "هيرميز",
    content: bags
  },
  {
    label: "جيس",
    content: bags
  },
  {
    label: "كالفن كلاين",
    content: bags
  },
  {
    label: "برادا",
    content: bags
  },
  {
    label: "فيندي",
    content: bags
  },
  {
    label: "YSL",
    content: bags
  },
  {
    label: "روليكس",
    content: bags
  },
  {
    label: "بيربيري",
    content: bags
  },
  {
    label: "ديزل",
    content: bags
  }
];

export default tabs;
