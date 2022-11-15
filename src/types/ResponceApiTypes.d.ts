export type SellPointsResponceApi = Array<{ 
    shopName: string
    adress: string
    email: string
    instagram: string
    map: string
    phone: string
    web:string
    location: {
        lat: number
        lon: number
    }  
}>
export type ProductResponceApi = Array<{
    productCategory: string
    productDescription: string
    productMainImg:{
        title: string
        url: string
    }
    productName: string
}>
export interface ProductResponceDetailApi{
    price: number
    productCategory: string
    productDescription: string
    productMainImg:{
        title: string
        url: string
    }
    productName: string
}
export type CategoriesResponceApi = Array<{
    categoryName: string
    categoryImage:{
        title: string
        url: string
    }
}>

export type SliderResponceApi = Array<{
    sliderImg:{
        url:string
    }
}>