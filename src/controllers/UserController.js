import { User } from "../models/user.js";

// manipuling user

async function addUser(req, res, next) {
  try {
    await User.create({
      name: "Wallace",
      email: "wallace@dominio1.com",
      password: "123456", // cripto here
    });

    return res.sendStatus(201);
  } catch (error) {
    next(error)
  }
}

async function getUser(req, res, next) {
  let id = 4; // from param
  try {
    const user = await User.findByPk(id);

    if(!user) throw new Error('Erro ao buscar usuário');

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  let id = 6; // id from param
  try {
    const user = await User.findByPk(id);

    user.email = "Wallace@outrodominio.com.br";

    await user.save();

    return res.sendStatus(204);
  } catch (error) {
    next(error)
  }
}

async function deleteUser(req, res, next) {
  try {
    await User.destroy({ where: { id: 6 } });

    // or

    // const user = await User.findByPk(5);

    // await user.destroy();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

export { addUser, getUser, getAllUsers, updateUser, deleteUser };
