import express from 'express';
import { register, login, logout } from './controllers/auth-controller';
import { getListProduct, getProduct } from './controllers/product-controller';
import { checkIfAuthenticated } from './middlewares/auth-middleware';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/data', checkIfAuthenticated, async (_, res) => {
    return res.send('data');
  });

router.get('/get-list-products', getListProduct);
router.get('/get-product/:alias', getProduct);



export default router;