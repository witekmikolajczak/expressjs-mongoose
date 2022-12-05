import { ProductClass } from "./productClass";

Parse.Cloud.define(
  'createProduct',
  async({params,user}: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) =>
  {
    const product = new ProductClass()
    return await product.Create(user!, params)
  },
  {
    requireUser:true,
    fields:['productType', 'productName', 'productUnit', 'productCount']
  }
);

Parse.Cloud.define('productCollection',async({user}: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) => 
  {
    const product = new ProductClass()
    return await product.Collection(user!)
  },
  {
    requireUser:true,
  }
);

