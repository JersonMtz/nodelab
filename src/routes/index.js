const express = require('express');
const router = express.Router();

// redirigir al login o dashboard segun si esta logueado
router.get('/', (req, res)=> {
    res.redirect('login');
});

router.use(require('./public'));
router.use(require('./private'));
router.use(require('./auth'));

router.use(require('./user'));

module.exports = router;

