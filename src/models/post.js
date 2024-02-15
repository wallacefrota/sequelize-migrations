import { DataTypes } from "sequelize";
import database from "../config/db.js";
import { User } from "./user.js";

const Posts = database.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

Posts.belongsTo(User, {
  constraints: true,
  foreignKey: 'idUser'
})

User.hasMany(Posts, {
  foreignKey: 'idUser'
})

export { Posts };