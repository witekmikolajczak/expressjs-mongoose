import { ProductClassInterface, ProductCreateReturnInterface } from "./types"
import { UserClass } from "../user/userClass";
export class ProductClass implements ProductClassInterface {
    
    async Create(
        user: Parse.User<Parse.Attributes>,
        data:Parse.Cloud.Params
    ): Promise<ProductCreateReturnInterface>{
      
        const userClass = new UserClass()        
        const Product = new Parse.Object('Product')
        Product.set('productName', data.productName)
        Product.set('productType', data.productType)
        Product.set('productUnit', data.productUnit)
        Product.set('productCount', data.productCount)
        Product.relation('createdBy').add(user)
        const newProduct = await Product.save()
        await userClass.AddToRelation(user,newProduct,'products')

        const result = {
            id: newProduct.id,
            productName: newProduct.get('productName'),
            productType: newProduct.get('productType'),
            productUnit: newProduct.get('productUnit'),
            productCount: newProduct.get('productCount'),
            createdBy: newProduct.relation('createdBy')
        }
        return result
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