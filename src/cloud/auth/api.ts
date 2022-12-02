import { Auth } from './authClass';
Parse.Cloud.define(
  'logout',
  ({ user }: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) => {
    const auth = new Auth();
    auth.logout(user);
    return user;
  },
  { requireUser: true }
);
