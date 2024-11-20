import cards from "../staticData/cards";

const collectionContentProvider = (target: string) => {
  const Target = Collections.find((collection) => collection.target === target);
  return Target?.content || [];
};

export default collectionContentProvider;
export const Collections = [
  {
    target: "all",
    info: {
      title: "جميع المنتجات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "bags",
    info: {
      title: "حقائب",
      bgImg: "https://lady90s.com/cdn/shop/collections/diana-light-nvQemFKRBUo-unsplash.jpg?v=1680271418&width=1296"
    },
    content: cards.slice(cards.length - 5)
  },
  {
    target: "women",
    info: {
      title: "النساء",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "men",
    info: {
      title: "الرجال",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "watches",
    info: {
      title: "ساعات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "wallets",
    info: {
      title: "محافظ",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "hats",
    info: {
      title: "طواقي و نظارات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "accessories",
    info: {
      title: "إكسسوارات و شالات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "occasion-Bags",
    info: {
      title: "حقائب للمناسبات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  }
];
