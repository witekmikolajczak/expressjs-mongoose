import Parse = require("parse/node");

const team = async () => {
  const schema = new Parse.Schema('Team');
  schema.addString('name', { required: true });
  schema.addRelation('teamUsers', '_User');
  await schema.save();
};

export const teamSchema = async () => {
    await team();
  };
  