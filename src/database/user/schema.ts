import Parse = require("parse/node");
const user = async () => {
  const schema = new Parse.Schema('_User');
  schema.addString('firstName', { required: true });
  schema.addString('lastName', { required: true });
  schema.addRelation('products', 'Product');
  await schema.save();
};

export const userSchema = async () => {
    await user();
  };
  