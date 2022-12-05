export interface ProductCreateReturnInterface {
    id:string,
    productName:string,
    productType:string,
    productUnit:string,
    createdBy?: Parse.Relation<Parse.Object<Parse.Attributes>, Parse.Object<Parse.Attributes>>
}


export interface ProductClassInterface {
    Create:(user:Parse.User<Parse.Attributes>, data:Parse.Cloud.Params) => Promise<ProductCreateReturnInterface>
    Collection:(user:Parse.User<Parse.Attributes>, data:Parse.Cloud.Params) => Promise<ProductCreateReturnInterface[]>
}