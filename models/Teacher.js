const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Isi Nama'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Isi Email']
    },
    phone: {
        type: String,
        required: [true, "Your phone number.."],
    },
    nip: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Your gender.."],
    },
    address: {
        type: String,
        required: [true, "Your valid address.."],
    },
    subject: {
        type: String,
        required: [true, "Your subject category.."],
    },

})

module.exports = mongoose.model('Teacher', TeacherSchema)