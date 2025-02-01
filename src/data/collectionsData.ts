interface Image {
    src: string;
    alt: string;
  }
  
  interface Collection {
    image: Image;
    text: string;
    path: string;
  }
  
export const collectionsData: Collection[] = [
    {
      image: {
        src: "src/assets/Collections/1.png",
        alt: "Collection for Him",
      },
      text: "For Him",
      path: "#",
    },
    {
      image: {
        src: "src/assets/Collections/2.png",
        alt: "Collection for Her",
      },
      text: "For Her",
      path: "#",
    },
    {
      image: {
        src: "src/assets/Collections/3.png",
        alt: "Collection for Kids",
      },
      text: "For Kids",
      path: "#",
    },
    {
      image: {
        src: "src/assets/Collections/4.png",
        alt: "Unisex Collection",
      },
      text: "Unisex",
      path: "#",
    },
  ];