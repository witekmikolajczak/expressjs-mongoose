import Parse = require("parse/node");
import { productSchema } from "./schema"; 
const dbs = ['Product'];

export const schemaDelete = async () => {
  dbs.forEach(async (f) => {
    const schema = new Parse.Schema(f);    
    await schema.purge();
    await schema.delete();
  });
};

export const schemaCreate = async ()=>{
  await productSchema()
}
