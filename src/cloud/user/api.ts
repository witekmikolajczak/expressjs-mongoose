import { UserClass } from "./userClass";

Parse.Cloud.define('userFullData',
 ({user,params}: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>)=>{
    const _user = new UserClass()
    const result = _user.UserFullData(user!,params)
    return result
 },
 {
    requireUser:true
 }
)


  