const User = require("../models/User");

const createService = (body) => User.create(body)
    .catch(() => undefined);

const findAllService = () => User.find();

const fincdByIdService = (username) => User.findOne({username: username});

module.exports = {
    createService,
    findAllService,
    fincdByIdService
}