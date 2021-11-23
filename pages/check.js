import React, { useState } from 'react';
import Router from 'next/router'
import fire from '../components/fire'
import Head from 'next/head'

import { addCode, findIt, manualLogin } from '../components/FirestoreCheck';
const Check = () => {
    const [codes, setCodes] = useState([])
    const [discount, setDiscount] = useState([]);
    const [form, setForm] = useState({
        code: '1231',
        percent: '20',

    });
    const [user, setUser] = useState({});


    React.useEffect(() => {
        authorization()
    }, [addCode])
    function authorization() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                // user.sendEmailVerification();

                setUser(user)
                console.log('user' + user.email);

                // get all codes
                fire
                    .firestore()
                    .collection('cpt')
                    .doc('general')
                    .collection('codes')
                    .onSnapshot(snapshot => {
                        const docs = [];
                        snapshot.forEach(doc => {
                            docs.push({
                                ...doc.data(),
                                id: doc.id
                            });
                        });
                        setCodes(docs);
                        // console.log(docs)
                    });
            } else {
                console.log(null);
            }
        })
    };
    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                console.log('Logged out')
                Router.push("/login")

            });
    }

    //     const deleteCode = () => {

    //         fire.firestore()
    //         .collection('cpt')
    //         .doc('general')
    //         .collection('codes').where('code','==',post.job_id);
    // jobskill_query.get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     doc.ref.delete();
    //   });
    // });
    //     }
    // useEffect(() =>{
    // fire
    // .collection('channels')
    // .doc('general')
    // .collection('messages').orderBy('date', 'desc')
    // .onSnapshot(snapshot => {
    //   const docs = [];
    //   snapshot.forEach(doc => {
    //     docs.push({
    //       ...doc.data(),
    //       id: doc.id
    //     });
    //   });
    // });
    //    },[]);
    async function post() {
        await fetch('/api/firebase_req', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: form.code, percent: form.percent }),
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                console.log(data?.data?.percent);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="container p-5">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            </Head>

            {
                user?.email ? <div>
                    <h3>Discount codes</h3>

                    <form className="checkout-form">

                        <div className="form-group centered-row pb-2">
                            <input className="form-control" type="text" onChange={e => setForm({ ...form, code: e.target.value })} placeholder="Code" />
                        </div>

                        <div className="form-group centered-row pb-2">
                            <input className="form-control" type="number" onChange={e => setForm({ ...form, percent: e.target.value })} placeholder="Discount percent" />
                        </div>
                        <button onClick={() => addCode(form)} className="btn btn-success" type="button">Add code</button>
                    </form>

                    {/* add code */}
                    {/* <button onClick={() => addCode(form)}>Check</button> */}
                    {/* check if existing */}
                    {/* <button onClick={() => findIt('1231')}>FindIT</button> */}
                    {/* manual login */}
                    {/* <button onClick={manualLogin}>HandleLogin</button> */}
                    {/* <button onClick={authorization}>User</button> */}
                    <button type="button" onClick={post}>POST</button>
                    <br></br>
                    <button className="btn btn-primary" type="button" onClick={handleLogout}>Logout</button>

                    <div className="container pt-5">
                        <div className="col">
                            {codes.map((code, i) => (
                                <div className="row" key={i}>Code:{code.code}; - {code.percent}%;</div>
                            ))}
                        </div>
                    </div>
                </div> :
                    <div>You are not logged in!</div>
            }
        </div >
    )
}
export default Check;