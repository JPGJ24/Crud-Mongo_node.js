const usuario = require('../models/User');


module.exports.mostrar = ( req, res ) => {
    usuario.find({}, (error, User) => {
        if(error){
             return res.status(500).json({
            message : 'ERROR DE USUARIIOOOOO'
        })
        }
        return res.render('index',{User})
       
    }
    
    )
}
//crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const user = new usuario({
        name: req.body.name,
        edad: req.body.edad
    })
    user.save(function(error,user){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el user'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const name = req.body.nombre_editar
    const edad = req.body.edad_editar
    usuario.findByIdAndUpdate(id, {name, edad}, (error, user)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    usuario.findByIdAndRemove(id, (error, user)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')
    })
}