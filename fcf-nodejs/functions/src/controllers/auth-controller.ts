import { firebaseAdmin, firebaseClient } from '../config/firebase-config';

export const register = (req: any, res: any) => {

    const { email, password } = req.body;
    const user = {
        email: email,
        password: password,
    }

    firebaseAdmin.auth().createUser(user).then((createdUser: any) => {
        res.status(200)
        res.send({
            message: `User registered: ${createdUser.uid}`,
        })
    }).catch(exception => {
        res.status(400)
        res.send(exception)
    })
}


export const login = (req: any, res: any) => {
    const { email, password } = req.body

    firebaseClient.auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (authenticatedUser) => {
            console.log(authenticatedUser);
            const currentUser = await firebaseClient.auth().currentUser;
            if (currentUser) {
                const token = await currentUser.getIdToken();
                return token;
            }

        }).then(idToken => {
            res.status(200);
            res.send({
                token: idToken,
            });
        }).catch(exception => {
            res.status(422);
            res.send({
                data: exception
            });
        })
}

export const logout = async (req: any, res: any) => {
    try {
        await firebaseClient.auth().signOut()
        res.status(200);
        res.send({
            message: 'You are logged out'
        });
    } catch (e) {
        res.send(e);
    }
}