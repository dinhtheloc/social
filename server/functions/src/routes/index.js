// routes/index.js
import { Router } from 'express';
import { getListUsers, addUser, updateUser, deleteUser } from '../controllers/user-controller';
import { checkIfAuthenticated } from '../middlewares/auth-middleware';
const data = [
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  },
  {
    color: "cyan",
    value: "#0ff"
  },
  {
    color: "magenta",
    value: "#f0f"
  },
  {
    color: "yellow",
    value: "#ff0"
  },
  {
    color: "black",
    value: "#000"
  }
]
const router = Router();

router.get('/getList', getListUsers);
router.post('/addUser', addUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

router.get('/data', checkIfAuthenticated, async (_, res) => {
  return res.send('data');
});

export default router;