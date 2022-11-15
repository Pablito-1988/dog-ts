
export type Props = {
    nombre: string
    categoria: string
    imagen: string
    descripcion: string
}

export type ArrayofProducts = {
        productName: string
        productCategory: string
        productDescription: string
        productMainImg: {
            url: string
        }
}

export type ProductDetailType ={
    info:{
        price: number
        productCategory: string
        productDescription: string
        productName: string
        productMainImg:{
            title:string
            url: string
        }
    }
}