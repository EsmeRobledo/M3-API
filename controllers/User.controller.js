const mongoose = require('mongoose'),
    User = mongoose.model('users');

    const signup = async(req, res) => {
        try{
            //creamos la instancia de Usuario
            const user = new User(req.body);
            //Encriptamos contraseña
            user.hashPassword(req.body.password)
           
            //se guarda el usuario
            const resp = await user.save();

            return res.status(200).json({
                message: 'User created successfully',
                detail: resp.generateJWT()
            })
        }catch(e){
            return res.status(400).json({
                message: 'Error',
                detail: e.message
            })
        }
    }

const getUsers = async(req, res) =>{
    if(req?.user?.type === 'client'){
        return res.json({
            message: 'Error',
            detail: 'No tiene acceso a esta area'
        })
    }
    try{
        const resp = await User.find();

        if(resp.length === 0){
            return res.json({
                message: 'Error',
                detail: 'Usuario no encontrado'
            })
        }else{
            return res.json({
                message: 'Users',
                detail: resp
            })
        }
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}    

const login = async(req, res) =>{
    try{
        const {mail, password} = req.body;

        const resp = await User.findOne({mail});
        
        //En caso de no encontrar el usuario
        if(!res){
            return res.status(404).json({
                message: 'Error',
                detail: 'Usuario  no encontrado'
            })
        }

        //Se verifica si la contraseña coincide con la que esta guardada
        if(resp.verifyPassword(password)){
            return res.status(200).json({
                message: 'ok',
                detail: resp.generateJWT(),
                category: resp.category
            })
        }

         return res.status(400).json({
                message: 'Error',
                detail: 'Wrong password!'
            })
        
        
    }catch(e){
        return res.status(400).json({
            message: 'Error',
            detail: e.message
        })
    }
    

}
const updateUser = async(req, res) => {
    try{
        const newData = req.body;
        const resp = await User.findByIdAndUpdate(newData.userId, {$set: newData}, {new: true})
        return res.json({
            message: 'User update successfully',
            detail: resp
        })
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

const deleteUser = async(req, res) => {
    try{
      
        const resp = await User.findByIdAndDelete(req.params.id)

        return res.json({
            message: 'User deleted successfully',
            detail: resp
        })
    }catch(e){
        return res.json({
            message: 'Error',
            detail: e.message
        })
    }
}

const getUserProfile = async (req, res) =>{
    try{
        
        const resp = await User.findById(req.user.idUser, 
            {firstname: 1, lastname: 1, mail: 1, phone: 1, type: 0,
             Street: 1, City: 1, State: 1, PC: 1});
    
        return res.json({
            menssage: 'User Profile',
            detail: resp
        })

    }catch(e){
        return res.json({
            menssage: 'Error',
            detail: e.message
        })
    }
}

const changePassword = async (req, res) => {
    /**
     * 1.- Verificar la contraseña anterior
     * 2.- Pido las nuevas contraseñas
     * 3.- Encripto la nueva contraseñas
     * 4.- Actualizo el registro
     */

    try{
        const{oldPassword, newPassword} = req.body;
        //Se verifica la contraseña anterior
        if(!user.verifyPassword(oldPassword)){
            return res.status(400).json({
                message: 'Error',
                detail: 'Password Incorrect'
            })
        }

        //Encriptacion de la  nueva contraseña
        const {password, salt} = user.hashedPassword(newPassword);

        const resp = await User.findByIdAndUpdate(
            req.user.idUser, {$set:{password,salt}},{new:true}
            )

            return res.json({
                menssage: 'Password update successfuly',
                detail: resp
            })
    }catch(e){
        return res.json({
            menssage: 'Error',
            detail: e.message
        })
    }
}

module.exports ={
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    getUserProfile,
    changePassword
}