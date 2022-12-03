import Parse = require("parse/node");
import { userSchema } from "./schema"; 
const dbs = ['_User','_Session'];

export const schemaDelete = async () => {
  dbs.forEach(async (f) => {
    const schema = new Parse.Schema(f);
    await schema.purge();
    await schema.delete();
  });
};

export const schemaCreate = async ()=>{
  await userSchema()
}
