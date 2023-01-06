import { Team } from "./teamClass";

Parse.Cloud.define(
   'createTeam',
   async({params,user}: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) =>
   {
     const team = new Team()
     return await team.Create(user!, params)
   },
   {
     requireUser:true,
     fields:['productType', 'productName', 'productUnit', 'productCount']
   }
 );

 Parse.Cloud.define(
   'teamObject',
   async({params,user}: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) =>
   {
     const team = new Team()
     return await team.Object(user!, params)
   },
   {
     requireUser:true,
     fields:['productType', 'productName', 'productUnit', 'productCount']
   }
 );