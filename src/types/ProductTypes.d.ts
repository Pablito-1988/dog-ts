
export interface Props {
  nombre: string
  categoria: string
  imagen: string
  descripcion: string
}

export interface ArrayofProducts {
  productName: string
  productCategory: string
  productDescription: string
  productMainImg: {
    url: string
  }
}

export interface ProductDetailType {
  info: {
    price: number
    productCategory: string
    productDescription: string
    productName: string
    productMainImg: {
      title: string
      url: string
    }
  }
}
