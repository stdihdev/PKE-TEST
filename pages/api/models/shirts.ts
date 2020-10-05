import {sequelize} from "./base"
import {DataTypes, INTEGER, NUMBER, STRING} from "sequelize"

export const Shirt = sequelize.define("shirts", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: STRING({length: 255}),
    allowNull: true
  },
  color: {
    type: DataTypes.ENUM({
      values: ['white', 'grey', 'blue']
    }),
    allowNull: false
  },
  size: {
    type: INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
})