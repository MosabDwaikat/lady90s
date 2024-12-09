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
  },
  {
    target: "big-bags",
    info: {
      title: "حقائب كبيرة و متوسطة",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "crossbody",
    info: {
      title: "الكروسبودي والكتف",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "shoes",
    info: {
      title: "أحذية وبوابيج",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "discounts",
    info: {
      title: "الخصومات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "small-bags",
    info: {
      title: "حقائب صغيرة",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "gifts",
    info: {
      title: "منوعات وهدايا",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "organizers",
    info: {
      title: "حافظات و منظمات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "no-brand-bags",
    info: {
      title: "حقائب بدون براند",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "packages",
    info: {
      title: "بكيجات",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "common",
    info: {
      title: "الأكثر شيوعاً",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Chanel",
    info: {
      title: "Chanel",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Gucci",
    info: {
      title: "Gucci",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Michael-Kors",
    info: {
      title: "Michael-Kors",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Balenciaga",
    info: {
      title: "Balenciaga",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Dior",
    info: {
      title: "Dior",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Hermes",
    info: {
      title: "Hermes",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Guess",
    info: {
      title: "Guess",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Calvin-Klein",
    info: {
      title: "Calvin-Klein",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Prada",
    info: {
      title: "Prada",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Fendi",
    info: {
      title: "Fendi",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/YSL",
    info: {
      title: "YSL",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Rolex",
    info: {
      title: "Rolex",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Burberry",
    info: {
      title: "Burberry",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  },
  {
    target: "/Diesel",
    info: {
      title: "Diesel",
      bgImg: "https://lady90s.com/cdn/shop/files/accessory-background-bags-brown.jpg?v=1681171631&width=1296"
    },
    content: cards
  }
];
