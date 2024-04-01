const products = [
    {
      id: "1",
      name: "Limpiador Facial",
      price: 6500,
      category: "limpieza",
      img: "https://getthelookar.vtexassets.com/arquivos/ids/167565/227614_gel-de-limpieza-hidratante-loreal-paris-rivitalift-acido-hialuronico-x-150-ml_imagen-1.jpg?v=637861722456730000",
      stock: 6,
      description: "Limpiagor facial en gel",
    },
    {
      id: "2",
      name: "Agua Micelar",
      price: 5000,
      category: "limpieza",
      img: "https://simplicityar.vtexassets.com/arquivos/ids/163428/148973_emulsion-desmaquillante-agua-micelar-x-200-ml_imagen-1.jpg?v=638219216710030000",
      stock: 7,
      description: "Agua micelar desmaquillante y tonificante",
    },
    {
      id: "3",
      name: "Crema Hidratante",
      price: 8200,
      category: "cuidado facial",
      img: "https://cdn.batitienda.com/baticloud/images/product_image_from_excel_9182f38d644140aa9fa38496b9cf2327_637528632062686428_0_m.jpg",
      stock: 10,
      description: "Crema facial hidratante de dia",
    },
    
];
  
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productoId));
      }, 1000);
    });
  };
