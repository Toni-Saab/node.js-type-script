import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

class Book extends Model {}

Book.init({
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  year: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Book',
});

export default Book;