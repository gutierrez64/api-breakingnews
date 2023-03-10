const userService = require("../services/user.service");

const create = async (req, res) => {
    const { name, username, email, password, avatar } = req.body;

    if (!name || !username || !email || !password || !avatar) {
        res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User" })
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar
        }
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if(users.length === 0){
        return res.status(400).send({message: "There are no registered users"});
    }

    res.send(users);
}

const findById = async (req, res) => {
    const username = req.params.username;

    const user = await userService.fincdByIdService(username);

    if(!user){
        return res.status(400).send({message: "User not found"});
    }

    res.send(user);
}

module.exports = {
    create,
    findAll,
    findById
};