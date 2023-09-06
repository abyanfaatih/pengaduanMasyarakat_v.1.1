import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pengaduan = db.define
    ('pengaduan', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_pengaduan : {
            type: Sequelize.INTEGER(11),
            primaryKey: true
        },
        tgl_pengaduan: DataTypes.DATE,
        nik: DataTypes.CHAR(16),
        isi_laporan: DataTypes.TEXT,
        foto: DataTypes.STRING(255),
        url: DataTypes.STRING,
        status: DataTypes.ENUM('0', 'proses', 'selesai')
    }, {
        freezeTableName: true
    }
    );

export default Pengaduan;

(async()=>{
    await db.sync();
})();
