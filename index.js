//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai",auth, pegawai)

//import route jurusan
const jurusan = require("./route/jurusan")
app.use("/jurusan", auth, jurusan)

//import route siswa
const siswa = require("./route/siswa")
app.use("/siswa", auth, siswa)

//import route pelanggaran
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", auth, pelanggaran)

//import route pelanggaran siswa
const pelanggaranSiswa = require("./route/pelanggaran_siswa")
app.use("/pelanggaran_siswa", auth, pelanggaranSiswa)

//import route detail pelanggaran siswa
const detailPelanggaranSiswa = require("./route/detail_pelanggaran_siswa")
app.use("/detail_pelanggaran_siswa", auth, detailPelanggaranSiswa)

//membuat web server dengan port 2000
app.listen(2000, () => {
    console.log("server run on port 2000")
})