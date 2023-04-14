import { Sequelize } from "sequelize";

const db = new Sequelize("tugasnode2", "workbenchriko", "12345678", {
  host: "192.168.64.7",
  port: "3306",
  dialect: "mysql",
});

export default db;
