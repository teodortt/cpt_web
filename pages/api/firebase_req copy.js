import firebase from 'firebase/app';
import "firebase/auth";
import fire from '../../components/fire'

import { db } from '../../components/firebase';


// export const manualRegister = async ({ code, percent }) => {

//     db.collection('cpt')
//         .doc('general')
//         .collection('codes')
//         .add({
//             code: code,
//             percent: percent,
//             date: new Date(),
//         });
// };

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { code, percent } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.
      fire.firestore()
        .collection('cpt')
        .doc('general')
        .collection('codes')
        .add({
          code: code,
          percent: percent,
          date: new Date(),
        });

    } catch (err) {
      res.status(500).json({ error: 'error___' });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(200).json({ status: 'Successfully added' })

    // res.status(405).end("Method Not Allowed");
  }
};
