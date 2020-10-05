import {sequelize} from "./base"
import {INTEGER, STRING} from "sequelize"

export const Pants = sequelize.define("pants", {
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
    type: STRING({length: 255}),
    allowNull: false
  },
  W: {
    type: INTEGER,
    allowNull: false
  },
  L: {
    type: INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
})