Parse.Cloud.define(
  'createProduct',
  ({
    params,
    user,
  }: Parse.Cloud.FunctionRequest<Parse.Cloud.Params>) => {
    return params;
  }
);
