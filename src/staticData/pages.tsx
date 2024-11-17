import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import WatchIcon from "@mui/icons-material/Watch";
import WalletIcon from "@mui/icons-material/Wallet";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import Face5Icon from "@mui/icons-material/Face5";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const pages = [
  { title: "أخر المنتجات", icon: <ShoppingCartIcon />, link: "latest" },
  { title: "حقائب", icon: <BusinessCenterIcon />, link: "bags" },
  { title: "النساء", icon: <WomanIcon />, link: "women" },
  { title: "الرجال", icon: <ManIcon />, link: "men" },
  { title: "ساعات", icon: <WatchIcon />, link: "watches" },
  { title: "محافظ", icon: <WalletIcon />, link: "wallets" },
  { title: "طواقي و نظارات", icon: <CheckroomIcon />, link: "hats" },
  { title: "إكسسوارات و شالات", icon: <Face5Icon />, link: "accessories" },
  { title: "حقائب للمناسبات", icon: <ShoppingBagIcon />, link: "occasion-Bags" }
];
export default pages;
