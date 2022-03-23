const { Router } = require('express');
const router = Router();
const users = require('../controllers/user')
 
//registrarse
router.post('/signup', users.createUser)


//logearse
router.post('/login', async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
});

// //todos los usuarios
// router.get('/', users.findAllUser)
  

// //obtener usuario
// router.get('/:id', async(req, res) =>{
//     try {
        
//     } catch (error) {
        
//     }
// });

// actualizar usuario
router.put('/:id', users.updateUser)
    
// encontrar usuario
router.get('/', users.findUser)

// eliminar usuario
router.delete('/:id', users.deleteUser)


// enviar mail de actualizacion de contraseña
router.post('/resetpass', users.requestPasswordReset)

 

module.exports = router;
