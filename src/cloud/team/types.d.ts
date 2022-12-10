export interface TeamCreateReturnInterface {
   id: string,
   name: string,
   createdBy: string
}


export interface TeamObjectInterface {
   id:string,
   name:string,
   users:{
      id:string,
      firstname:string,
      lastname:string,
      email:string
   }[]
}


export interface TeamClassInterface {
   Create:(user:Parse.User<Parse.Attributes>, data:Parse.Cloud.Params) => Promise<TeamCreateReturnInterface>
   Object:(user:Parse.User<Parse.Attributes>, data:Parse.Cloud.Params) => Promise<TeamObjectInterface>
}