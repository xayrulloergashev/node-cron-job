const User = require("../user/model");

const UpdateSatus = async () => {
  try {
    const filterUser = await User.find({
      age: {
        $gte: 18,
      },
    });
    for (let i of filterUser) {
      await User.findByIdAndUpdate(i._id, {
        status: 0,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  UpdateSatus,
};
