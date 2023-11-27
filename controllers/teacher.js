const Teacher = require('../models/Teacher')

module.exports = {
    index: async(req, res) => {
      try {
        const teachers = await Teacher.find()
        if(teachers.length > 0){
          res.status(200).json({
            status: true,
            data: teachers,
            method: req.method,
            url: req.url
          })      
        }else{
          res.json({
            status: false,
            message: "Data Masih Kosong Nih!"
          })
      
        }
      } catch (error) {
        res.status(400).json({sucess: false})
      }
        },
        show: async (req, res) => {
          try {
            const teacher = await Teacher.findById(req.params.id)
            res.json({
              status: true,
              data: teacher,
              method: req.method,
              url: req.url,
              message: "Data Berhasil Didapat :D"
            })

          } catch (error) {
            res.status(400).json(error.message);
          }

        },
        store: async (req, res) => {
          try {
            const teacher = await Teacher.create(req.body);
            res.status(200).json({
              status: true,
              data: teacher,
              method: req.method,
              url: req.url,
              message: "Data berhasil ditambahkan",
            })
          } catch (error) {
            res.status(400).json(error.message);
          }
        },
          update: async (req, res) => {
            try {
              const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
              })
              res.json({
                status: true,
                data: teacher,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Diubah :D"
              })

            } catch (error) {
              res.status(400).json(error.message);
            }

          },
          delete: async (req, res) => {
            try {
              await Teacher.findByIdAndDelete(req.params.id)
              res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data Berhasil Dihapus!"
              })
            } catch (error) {
              res.status(400).json(error.message);
            }
      
          }
          
}