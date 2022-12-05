import { UserClass } from "./userClass";
Parse.Cloud.define('logout',({ user }: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) => 
    {
        return user
    },
    { requireUser: true }
  );
  