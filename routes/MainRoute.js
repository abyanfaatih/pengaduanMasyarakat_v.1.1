import express from "express";
import {
    getDataMasyarakat,
    getDataMasyarakatById,
    saveDataMasyarakat,
    updateDataMasyarakat,
    deleteDataMasyarakat,

    getDataPengaduan,
    getDataPengaduanById,
    saveDataPengaduan,
    updateDataPengaduan,
    deleteDataPengaduan,
    
    getDataPetugas,
    getDataPetugasById,
    saveDataPetugas,
    updateDataPetugas,
    deleteDataPetugas,

    getDataTanggapan,
    getDataTanggapanById,
    saveDataTanggapan,
    updateDataTanggapan,
    deleteDataTanggapan
} from "../controllers/MainController.js";

const router = express.Router();

router.get('/masyarakat', getDataMasyarakat);
router.get('/masyarakat/:id', getDataMasyarakatById);
router.post('/masyarakat', saveDataMasyarakat);
router.patch('/masyarakat/:id', updateDataMasyarakat);
router.delete('/masyarakat/:id', deleteDataMasyarakat);

router.get('/pengaduan', getDataPengaduan);
router.get('/pengaduan/:id', getDataPengaduanById);
router.post('/pengaduan', saveDataPengaduan);
router.patch('/pengaduan/:id', updateDataPengaduan);
router.delete('/pengaduan/:id', deleteDataPengaduan);

router.get('/petugas', getDataPetugas);
router.get('/petugas/:id', getDataPetugasById);
router.post('/petugas', saveDataPetugas);
router.patch('/petugas/:id', updateDataPetugas);
router.delete('/petugas/:id', deleteDataPetugas);

router.get('/tanggapan', getDataTanggapan);
router.get('/tanggapan/:id', getDataTanggapanById);
router.post('/tanggapan', saveDataTanggapan);
router.patch('/tanggapan/:id', updateDataTanggapan);
router.delete('/tanggapan/:id', deleteDataTanggapan);

export default router;

