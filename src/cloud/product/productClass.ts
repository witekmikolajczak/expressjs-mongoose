import { ProductClassInterface, ProductCreateReturnInterface } from "./types"
import { UserClass } from "../user/userClass";
import { logger } from "../../logger/log";
export class ProductClass implements ProductClassInterface {
    
    async Create(
        user: Parse.User<Parse.Attributes>,
        productCollection:ProductCreateReturnInterface[]
    ): Promise<ProductCreateReturnInterface[]>{
        const resultArray:ProductCreateReturnInterface[]=[]        
        for (const product of productCollection) {
            const Product = new Parse.Object('Product')
            Product.set('productName', product.productName)
            Product.set('productType', product.productType)
            Product.set('productUnit', product.productUnit)
            Product.set('productCount', Number(product.productCount))
            Product.relation('createdBy').add(user)
            await Product.save().then(async (res)=>{
                user.relation('products').add(res)
                const result = {
                    id: res.id,
                    productName: res.get('productName'),
                    productType: res.get('productType'),
                    productUnit: res.get('productUnit'),
                    productCount: res.get('productCount'),
                    createdBy: res.relation('createdBy')
                }
                resultArray.push(result)
            })            
        }
        await user.save(null, {useMasterKey:true})        
        return resultArray
    }

    async Collection(
        user: Parse.User<Parse.Attributes>,
    ): Promise<ProductCreateReturnInterface[]>{

        const User = Parse.Object.extend('_User')
        const UserQuery = await new Parse.Query(User).equalTo('objectId', user.id).first()
        const productRelationQuery = await UserQuery!.relation('products').query().find()  
        const productCollection:ProductCreateReturnInterface[] = []      

        productRelationQuery.forEach((product)=>{
            const result = {
                id: product.id,
                productName: product.get('productName'),
                productType: product.get('productType'),
                productUnit: product.get('productUnit'),
                productCount: product.get('productCount'),
            }
            productCollection.push(result)
        })
        return productCollection
    }
}