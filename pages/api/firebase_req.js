import firebase from 'firebase/app';
import "firebase/auth";
import fire from '../../components/fire'

import { db } from '../../components/firebase';

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { code, percent } = req.body;

      var nummers = db.collection("cpt").doc("general").collection('codes').where('code', '==', code);
      nummers.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {

          querySnapshot.forEach(function (doc) {
            // console.log(doc.id, ' => ', doc.data());
            let mes = (doc.id, ' => ', doc.data())
            res.status(200).json({ message: 'Code exists', data: mes }).end();

          });

        } else {
          res.status(200).json({ error: 'Code not exists!' }).end();

        }
      });


    } catch (err) {
      res.status(err).json({ error: err }).end();
    }
  }
};
