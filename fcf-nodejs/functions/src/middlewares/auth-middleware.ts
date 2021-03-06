import { firebaseAdmin } from '../config/firebase-config';

export const checkIfAuthenticated = async (req: any, res: any, next: any) => {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      throw 'Unauthorized'
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    req.user = await firebaseAdmin.auth().verifyIdToken(idToken);
    next();
  } catch (e) {
    res.status(401)
    res.send('Unauthorized');
  }
};
