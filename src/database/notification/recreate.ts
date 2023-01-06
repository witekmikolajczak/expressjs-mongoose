import Parse = require("parse/node");
import { notificationSchema } from "./schema"; 
const dbs = ['Notification'];

export const schemaDelete = async () => {
  for(let i =0 ;i<dbs.length;i++){
    const schema = new Parse.Schema(dbs[i])
    await schema.purge();
    await schema.delete();
  }
};

export const schemaCreate = async ()=>{
  await notificationSchema()
}
