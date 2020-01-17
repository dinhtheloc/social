import { firebaseClient } from '../config/firebase-config';


export const getListProduct = async (req: any, res: any) => {
    var userReference = firebaseClient.database().ref("products/");
    userReference.on("value",
        (snapshot) => {
            console.log();
            const data = snapshot.val();
            const array = [];
            for (var key in data) {
                // skip loop if the property is from prototype
                if (!data.hasOwnProperty(key))
                    continue;
                var obj = data[key];
                array.push(obj);
            }
            res.json(array);
            userReference.off("value");
        },
        (errorObject: any) => {
            console.log("The read failed: " + errorObject.code);
            res.send("The read failed: " + errorObject.code);
        });
}

export const getProduct = async (req: any, res: any) => {
    const { alias } = req.params;
    var userReference = firebaseClient.database().ref("products/").orderByChild('alias').equalTo(alias);;
    userReference.on("value",
        (snapshot) => {
            res.json(snapshot.val());
            userReference.off("value");
        },
        (errorObject: any) => {
            console.log("The read failed: " + errorObject.code);
            res.send("The read failed: " + errorObject.code);
        });
}