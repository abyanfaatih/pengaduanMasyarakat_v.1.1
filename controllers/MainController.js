import Masyarakat from "../models/MasyarakatModel.js"; 
import Pengaduan from "../models/PengaduanModel.js"; 
import Petugas from "../models/PetugasModel.js"; 
import Tanggapan from "../models/TanggapanModel.js"; 
import path from "path";
import fs from "fs";


    // CONTROLLER MASYARAKAT

export const getDataMasyarakat = async(req, res)=>{
    try {
        const response = await Masyarakat.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataMasyarakatById = async(req, res)=>{
    try {
        const response = await Masyarakat.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveDataMasyarakat = async(req, res)=>{
    const nik = req.body.nik;
    const name = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;

    try {
        await Masyarakat.create({nik: nik, nama: name, username: username, password: password, telp: telp});
         res.status(201).json({msg: "Masyarakat Created Succesfully"});
    } catch (error) {
        console.log(error.message);
    }


    // if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    // const name = req.body.title;
    // const file = req.files.file;
    // const fileSize = file.data.length;
    // const ext = path.extname(file.name);
    // const fileName = file.md5 + ext;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // const allowedType = ['.png', '.jpg', '.jpeg'];

    // if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    // if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    // file.mv(`./public/images/${fileName}`, async(err)=>{
    //     if(err) return res.status(500).json({msg: err.message});
    //     try {
    //         await Product.create({name: name, image: fileName, url: url});
    //         res.status(201).json({msg: "Product Created Succesfully"});
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // })
}

export const updateDataMasyarakat = async(req, res)=>{
    const masyarakat = await Masyarakat.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!masyarakat) return res.status(404).json({msg: "No Data Found"});
    const nik = req.body.nik;
    const name = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;

    try {
        await Masyarakat.update({nik: nik, nama: name, username: username, password: password, telp: telp}, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Masyarakat Updated Succesfully"});
    } catch (error) {
        console.log(error.message);
    }


    // const product = await Product.findOne({
    //     where: {
    //         id : req.params.id
    //     }
    // });
    // if(!product) return res.status(404).json({msg: "No Data Found"});
    // let fileName = "";
    // if(req.files === null){
    //     fileName = Product.image;
    // }else {
    //     const file = req.files.file;
    //     const fileSize = file.data.length;
    //     const ext = path.extname(file.name);
    //     fileName = file.md5 + ext;
    //     const allowedType = ['.png', '.jpg', '.jpeg'];

    //     if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    //     if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    //     const filepath = `./public/images/${product.image}`;
    //     fs.unlinkSync(filepath);

    //     file.mv(`./public/images/${fileName}`, (err)=>{
    //         if(err) return res.status(500).json({msg: err.message});
    //     });
    // }
    // const name = req.body.title;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // try {
    //     await Product.update({name: name, image: fileName, url: url}, {
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     res.status(200).json({msg: "Product Updated Succesfully"});
    // } catch (error) {
    //     console.log(error.message);
    // }

}

export const deleteDataMasyarakat = async(req, res)=>{
    const masyarakat = await Masyarakat.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!masyarakat) return res.status(404).json({msg: "No Data Found"});

    try {
        await Masyarakat.destroy({
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Masyarakat Deleted Succesfully"});
    } catch (error) {
        console.log(error.message);
    }

    // const product = await Product.findOne({
    //     where: {
    //         id : req.params.id
    //     }
    // });
    // if(!product) return res.status(404).json({msg: "No Data Found"});

    // try {
    //     const filepath = `./public/images/${product.image}`;
    //     fs.unlinkSync(filepath);
    //     await Product.destroy({
    //         where: {
    //             id : req.params.id
    //         }
    //     });
    //     res.status(200).json({msg: "Product Deleted Succesfully"});
    // } catch (error) {
    //     console.log(error.message);
    // }
}




    // CONTROLLER PENGADUAN



export const getDataPengaduan = async(req, res)=>{
    try {
        const response = await Pengaduan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataPengaduanById = async(req, res)=>{
    try {
        const response = await Pengaduan.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveDataPengaduan = async(req, res)=>{

    // const id_pengaduan = req.body.id_pengaduan;
    // const tanggal_pengaduan = req.body.tanggal;
    // const nik = req.body.nik;
    // const isi = req.body.isi_laporan;
    // const status = req.body.status;

    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({nik: name, foto: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

    // if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    // const name = req.body.title;
    // const file = req.files.file;
    // const fileSize = file.data.length;
    // const ext = path.extname(file.name);
    // const fileName = file.md5 + ext;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // const allowedType = ['.png', '.jpg', '.jpeg'];

    // if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    // if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    // file.mv(`./public/images/${fileName}`, async(err)=>{
    //     if(err) return res.status(500).json({msg: err.message});
    //     try {
    //         await Product.create({name: name, image: fileName, url: url});
    //         res.status(201).json({msg: "Product Created Succesfully"});
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // })
}

export const updateDataPengaduan = async(req, res)=>{


    // const product = await Product.findOne({
    //     where: {
    //         id : req.params.id
    //     }
    // });
    // if(!product) return res.status(404).json({msg: "No Data Found"});
    // let fileName = "";
    // if(req.files === null){
    //     fileName = Product.image;
    // }else {
    //     const file = req.files.file;
    //     const fileSize = file.data.length;
    //     const ext = path.extname(file.name);
    //     fileName = file.md5 + ext;
    //     const allowedType = ['.png', '.jpg', '.jpeg'];

    //     if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    //     if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    //     const filepath = `./public/images/${product.image}`;
    //     fs.unlinkSync(filepath);

    //     file.mv(`./public/images/${fileName}`, (err)=>{
    //         if(err) return res.status(500).json({msg: err.message});
    //     });
    // }
    // const name = req.body.title;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // try {
    //     await Product.update({name: name, image: fileName, url: url}, {
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     res.status(200).json({msg: "Product Updated Succesfully"});
    // } catch (error) {
    //     console.log(error.message);
    // }

}

export const deleteDataPengaduan = async(req, res)=>{

    // const product = await Product.findOne({
    //     where: {
    //         id : req.params.id
    //     }
    // });
    // if(!product) return res.status(404).json({msg: "No Data Found"});

    // try {
    //     const filepath = `./public/images/${product.image}`;
    //     fs.unlinkSync(filepath);
    //     await Product.destroy({
    //         where: {
    //             id : req.params.id
    //         }
    //     });
    //     res.status(200).json({msg: "Product Deleted Succesfully"});
    // } catch (error) {
    //     console.log(error.message);
    // }
}



    // CONTROLLER PETUGAS


export const getDataPetugas = async(req, res)=>{
    try {
        const response = await Petugas.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataPetugasById = async(req, res)=>{
    try {
        const response = await Petugas.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveDataPetugas = async(req, res)=>{
    const id_petugas = req.body.id;
    const nama = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;
    const level = req.body.level;

    try {
        await Petugas.create({id_petugas: id_petugas, nama_petugas: nama, username: username, password: password, telp: telp, level: level});
        res.status(201).json({msg: "Petugas Created Succesfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDataPetugas = async(req, res)=>{
    const petugas = await Petugas.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!petugas) return res.status(404).json({msg: "No Data Found"});
    
    const id_petugas = req.body.id;
    const nama = req.body.nama;
    const username = req.body.username;
    const password = req.body.password;
    const telp = req.body.telp;
    const level = req.body.level;
    try {
        await Petugas.update({id_petugas: id_petugas, nama_petugas: nama, username: username, password: password, telp: telp, level: level}, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Petugas Updated Succesfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDataPetugas = async(req, res)=>{
    const petugas = await Petugas.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!petugas) return res.status(404).json({msg: "No Data Found"});

    try {
        await Petugas.destroy({
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Petugas Deleted Succesfully"});
    } catch (error) {
        console.log(error.message);
    }
}







    // CONTROLLER TANGGAPAN





export const getDataTanggapan = async(req, res)=>{
    try {
        const response = await Tanggapan.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataTanggapanById = async(req, res)=>{
    try {
        const response = await Tanggapan.findOne({
            where: {
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveDataTanggapan = async(req, res)=>{
    const id_tanggapan = req.body.id_tanggapan;
    const id_pengaduan = req.body.id_pengaduan;
    const tanggal_tanggapan = req.body.tanggal;
    const tanggapan = req.body.tanggapan;
    const id_petugas = req.body.id_petugas;


    try {
        await Tanggapan.create({id_tanggapan: id_tanggapan, id_pengaduan: id_pengaduan, tgl_tanggapan: tanggal_tanggapan, tanggapan: tanggapan, id_petugas: id_petugas});
        res.status(201).json({msg: "Tanggapan Created Succesfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDataTanggapan = async(req, res)=>{


    const tanggapan = await Tanggapan.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!tanggapan) return res.status(404).json({msg: "No Data Found"});
    
    const id_tanggapan = req.body.id_tanggapan;
    const id_pengaduan = req.body.id_pengaduan;
    const tanggal_tanggapan = req.body.tanggal;
    const ttanggapan = req.body.tanggapan;
    const id_petugas = req.body.id_petugas;
    try {
        await Tanggapan.update({id_tanggapan: id_tanggapan, id_pengaduan: id_pengaduan, tgl_tanggapan: tanggal_tanggapan, tanggapan: ttanggapan, id_petugas: id_petugas}, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Tanggapan Updated Succesfully"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteDataTanggapan = async(req, res)=>{
    const tanggapan = await Tanggapan.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!tanggapan) return res.status(404).json({msg: "No Data Found"});

    try {
        await Tanggapan.destroy({
            where: {
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Tanggapan Deleted Succesfully"});
    } catch (error) {
        console.log(error.message);
    }
}