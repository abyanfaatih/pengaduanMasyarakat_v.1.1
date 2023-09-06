import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Masyarakat = db.define
    ('masyarakat', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nik : {
            type: Sequelize.CHAR(16),
            primaryKey: true
        },
        nama: DataTypes.STRING(35),
        username: DataTypes.STRING(25),
        password: DataTypes.STRING(32),
        telp: DataTypes.STRING(13),
    }, {
        freezeTableName: true
    }
    );

export default Masyarakat;

(async()=>{
    await db.sync();
})();
