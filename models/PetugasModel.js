import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Petugas = db.define
    ('petugas', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_petugas : {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        nama_petugas: DataTypes.STRING(35),
        username: DataTypes.STRING(25),
        password: DataTypes.STRING(32),
        telp: DataTypes.STRING(255),
        level: DataTypes.ENUM('admin', 'petugas')
    }, {
        freezeTableName: true
    }
    );

export default Petugas;

(async()=>{
    await db.sync();
})();
