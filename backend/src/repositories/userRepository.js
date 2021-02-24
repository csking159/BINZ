const User = require("../models/user");
const UserSchema = require("../db/userSchema");

const getUsers = async () => {
  const users = await UserSchema.find().exec();
  return users.map(u => new User(u.id, u.email, u.name, u.password));
};

const getUser = async id => {
  //id is parameter
  const user = await UserSchema.findById(id).exec();
  return new User(user._id, user.email, user.name, user.password);
};

const getUserByEmail = async email => {
  const user = await UserSchema.findOne({ email });
  return user != null
    ? new User(user._id, user.email, user.name, user.password)
    : null;
};

const addUser = async user => {
  try {
    const insertedUser = await UserSchema.create({
      email: user.email,
      name: user.name,
      password: user.password
    });

    return new User(
      insertedUser.id,
      insertedUser.email,
      insertedUser.name,
      insertedUser.password
    ); //convert from doc type to user type
  } catch (e) {
    console.log("Error:", e.message);
  }
};

const putUser = async (id, user) => {
  //id is parameter
  const updatedUser = await UserSchema.findByIdAndUpdate(id, user).exec();
  return updatedUser;
};

const removeUser = async id => {
  await UserSchema.findByIdAndDelete(id).exec();
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  removeUser,
  putUser,
  getUserByEmail
};
