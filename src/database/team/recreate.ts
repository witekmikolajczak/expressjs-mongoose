import Parse = require("parse/node");
import { teamSchema } from "./schema"; 
const dbs = ['Team'];

export const schemaDelete = async () => {
  for(let i =0 ;i<dbs.length;i++){
    const schema = new Parse.Schema(dbs[i])
    await schema.purge();
    await schema.delete();
  }
};

export const schemaCreate = async ()=>{
  await teamSchema()
}
