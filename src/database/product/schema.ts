import Parse = require("parse/node");
const product = async () => {
  const schema = new Parse.Schema('Product');
  schema.addString('productName', { required: true });
  schema.addString('productType', { required: true });
  schema.addString('productUnit', { required: true });
  schema.addRelation('createdBy', '_User');
  await schema.save();
};

export const productSchema = async () => {
    await product();
  };
  