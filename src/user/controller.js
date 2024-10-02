const User = require("./model");

const addNew = async (req, res, next) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);

    const doc = await newUser.save();

    if (!doc) throw new Error();

    return res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

const getAll = async (req, res, next) => {
  try {
    console.log(req.body);
    const doc = await User.find({});

    if (!doc) throw new Error();

    return res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  addNew,
  getAll,
};
