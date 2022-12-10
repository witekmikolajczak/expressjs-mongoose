import Parse = require("parse/node");

const notification = async () => {
  const schema = new Parse.Schema('Notification');
  schema.addString('type', { required: true });
  schema.addBoolean('active', { required: true });
  schema.addRelation('createdByTeam', '_Team');
  schema.addRelation('sendToUser', '_User')
  await schema.save();
};

export const notificationSchema = async () => {
    await notification();
  };
  