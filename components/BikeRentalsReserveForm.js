import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import DatePicker from "react-datepicker";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
} from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import Router from "next/router";
import { useForm } from 'react-hook-form';

const stripeProme = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
        <div>
            <img src="/images/calendar.png" width="25" className="mr-1" />
            <label onClick={onClick} ref={ref}>
                {value}
            </label>
        </div>
    );
});

export default function ReserveForm({ setHours, setMinutes, startDate, setStartDate, count, setCount }) {

    const [formData, setFormData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [code, setCode] = useState('');
    const [inputvalues, setInputValues] = useState([]);
    // const [percent, setPercent] = useState(null);
    const onSubmit = data => setFormData(data);
    //console.log(errors);

    const onHandleChange = (e) => {
        setCount({ ...count, [e.target.name]: e.target.value });
        // setInputValues({ [e.target.name]: e.target.value })
        console.log({ [e.target.name]: e.target.value });
    }

    const childRef = React.useRef();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [mobileModalVisible, setMobileModalVisible] = useState(false);

    let todayDate = new Date().toISOString().slice(0, 10);


    const showModal = () => {
        if (window.innerWidth > 1120) setIsModalVisible(true);
        else setMobileModalVisible(true);
        // console.log(total)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const hhhandle = () => {
        console.log(startDate)
    }

    const adultsPrice = 15;
    const kidsPrice = 13;
    const adultsPrice_2h = 20;
    const kidsPrice_2h = 18;
    const adultsPrice_3h = 25;
    const kidsPrice_3h = 23;
    const adultsPrice_ALL = 40;
    const kidsPrice_ALL = 38;
    const basketPrice = 1;
    const lockPrice = 2;
    let subtotalPrice;
    let totalPrice;
    let taxPrice;
    const taxRate = 8.875 / 100;

    function calculateTotalPrice(count) {

        let baskets = count.baskets * basketPrice;
        let locks = count.locks * lockPrice;

        if (count.duration === 1) {
            subtotalPrice = count.adults * adultsPrice + count.kids * kidsPrice + baskets + locks;
            totalPrice = subtotalPrice + subtotalPrice * taxRate;
            taxPrice = subtotalPrice * taxRate;
            if (count.discount) {
                let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
                setCount({ ...count, subtotal: subtotalPrice, total: discountedPrice, tax: taxPrice });
            } else {
                setCount({ ...count, subtotal: subtotalPrice, total: totalPrice, tax: taxPrice });
            }
        }
        if (count.duration === 2) {

            subtotalPrice = count.adults * adultsPrice_2h + count.kids * kidsPrice_2h + baskets + locks;
            totalPrice = subtotalPrice + subtotalPrice * taxRate;
            taxPrice = subtotalPrice * taxRate;
            if (count.discount) {
                let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
                setCount({ ...count, subtotal: subtotalPrice, total: discountedPrice, tax: taxPrice });
            } else {
                setCount({ ...count, subtotal: subtotalPrice, total: totalPrice, tax: taxPrice });
            }
        }
        if (count.duration === 3) {

            subtotalPrice = count.adults * adultsPrice_3h + count.kids * kidsPrice_3h + baskets + locks;
            totalPrice = subtotalPrice + subtotalPrice * taxRate;
            taxPrice = subtotalPrice * taxRate;
            if (count.discount) {
                let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
                setCount({ ...count, subtotal: subtotalPrice, total: discountedPrice, tax: taxPrice });
            } else {
                setCount({ ...count, subtotal: subtotalPrice, total: totalPrice, tax: taxPrice });
            }
        }
        if (count.duration === 4) {

            subtotalPrice = count.adults * adultsPrice_ALL + count.kids * kidsPrice_ALL + baskets + locks;
            totalPrice = subtotalPrice + subtotalPrice * taxRate;
            taxPrice = subtotalPrice * taxRate;
            if (count.discount) {
                let discountedPrice = totalPrice - (totalPrice * count.discount / 100)
                setCount({ ...count, subtotal: subtotalPrice, total: discountedPrice, tax: taxPrice });
            } else {
                setCount({ ...count, subtotal: subtotalPrice, total: totalPrice, tax: taxPrice });
            }
        }
    }

    useEffect(() => {
        calculateTotalPrice(count);
    }, [count.adults, count.kids, count.discount, count.duration, count.baskets, count.locks])

    // discounts
    async function discount() {
        try {

            await fetch('/api/firebase_req', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: code }),
            })
                .then(response => response.json())
                .then((data) => {
                    // console.log(data);
                    data?.data?.percent && setCount({ ...count, discount: data.data.percent, discountCode: data.data.code });
                })
        } catch (error) {
            console.error(error);
        }
    }

    return (<>
        <div onClick={showModal} className={`btn-reserve ${mobileModalVisible ? 'm-checkout' : ''}`}>Reserve</div>
        <Modal visible={mobileModalVisible} width={370} onCancel={() => setMobileModalVisible(false)} footer={null}>
            <form>
                {/* <div onClick={hhhandle}>CLICK</div> */}
                <div className="row pt-4 justify-content-center">
                    <div className="col text-center">
                        <p className="book-title">Book Now</p>
                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={(date) => (setStartDate(date), setCount({ ...count, tourDate: date }))}
                                showTimeSelect
                                minDate={new Date()}
                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 30), 17)}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                customInput={<CustomInput />}

                            />
                            {/* <input className="form-control" type="datetime-local" id="datepicker" /> */}
                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Adults (16+)</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults > 1 ? count.adults - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.adults} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults + 1 })}>+</div>

                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Kids (5+)</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.kids} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Baskets</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, baskets: count.baskets > 1 ? count.baskets - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.baskets} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, baskets: count.baskets + 1 })}>+</div>
                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Locks</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, locks: count.locks > 1 ? count.locks - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.locks} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, locks: count.locks + 1 })}>+</div>
                        </div>
                        {/* <p className="t-title">Bike Tour - <b> 2 Hours</b></p> */}
                        <p className="t-title">Duration</p>

                        <div className="form-group centered-row">
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration > 1 ? count.duration - 1 : 1 })}>-</div>
                            <input className="counter-field" type="text" value={count.duration + " h"} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, duration: count.duration < 3 ? count.duration + 1 : 3 })}>+</div>
                        </div>
                        <p className="text-uppercase" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$15</b> usd</p>
                        {/* <button className="btn-reserve">Reserve</button> */}
                        <button className="btn-reserve" type="button" onClick={() => setIsModalVisible(true)}>Continue</button>

                    </div>
                </div>
            </form>
        </Modal>
        <Modal visible={isModalVisible} onOk={handleOk} width={800} onCancel={handleCancel} footer={null}>
            {/* <div onClick={hhhandle}>CLICK</div> */}
            {/* <form onSubmit={'handleSubmit'}> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <h1 style={{ paddingBottom: '30px', color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Checkout</h1>
                <div className="row">
                    <div className="col-xs-12 col-lg-6">

                        <div className="checkout-form">

                            <div className="form-group centered-row pb-2">
                                <input className="form-control" required onChange={onHandleChange} value={count.name} name="name" type="text" placeholder="First & Last Names" />
                            </div>

                            <div className="form-group centered-row pb-2">
                                <input className="form-control" required onChange={onHandleChange} value={count.email} name="email" type="text" placeholder="Email Address" />
                            </div>

                            <div className="form-group centered-row pb-2">
                                <input className="form-control" required onChange={onHandleChange} value={count.phone} name="phone" type="tel" placeholder="Phone Number" />
                            </div>
                            <div className="form-group centered-row pb-2">
                                <Elements stripe={stripeProme}>
                                    <CheckoutForm onSuccessfullCheckout={() => Router.push({ pathname: "/success", query: { tour: count.tour, adults: count.adults, kids: count.kids, duration: count.duration, tourDate: count.tourDate.toString(), discount: count.discount, baskets: count.baskets, locks: count.locks, subtotal: count.subtotal, tax: count.tax, total: count.total } })} formData={formData} startDate={startDate} count={count} ref={childRef} />
                                </Elements>
                                {/* <input className="form-control" type="number" placeholder="Card" {...register("Card", { required: true })} /> */}
                                {/* <input className="form-control" placeholder="Card Number" type="text" /> */}
                            </div>
                            <p className="checked">{count.discount && 'You received ' + count.discount + '% discount!'}</p>
                        </div>
                        {/* end form */}

                    </div>

                    {/* <div className="col-1"></div> */}

                    <div className="col-xs-12 col-lg-6">
                        <h5 style={{ color: '#4c4a4b' }}>Order summary</h5>
                        <div className="row pb-3">
                            <div className="col">
                                <span style={{ fontSize: '12px' }}>Date: {startDate.toString().slice(4, 21)}</span>
                                <br></br>
                                <span style={{ fontSize: '12px' }}>Pedicab Tour - {count.duration} h</span>
                            </div>
                            <div className="col">
                                <span style={{ fontSize: '12px' }}>Adults: {count.adults}</span>
                                <br></br>
                                <span style={{ fontSize: '12px' }}>Kids: {count.kids}</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-uppercase">subtotal</div>
                            <div className="col"></div>
                            <div className="col text-uppercase text-right">{Number((count.subtotal).toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                            <hr></hr>
                            <div className="col text-uppercase">tax (%8.875)</div>
                            <div className="col"></div>
                            <div className="col text-uppercase text-right">{Number((count.tax).toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                            <hr></hr>
                            <div className="col text-uppercase pt-2">discount code</div>
                            {/* <div className="col"></div> */}
                            <div className="col text-uppercase text-right pb-3 d-flex"><input type="text" id="discountCode" onChange={(e) => setCode(e.target.value)} className="form-control" /> <button className="btn btn-default" type="button" onClick={discount} id="apply">Apply</button></div>
                            <hr></hr>
                            <div className="col text-uppercase"><b>grand total</b></div>
                            <div className="col text-uppercase text-right"><b>{Number((count.total).toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</b></div>
                        </div>

                    </div>
                </div>
                <div className="checkout-section text-right pt-3">
                    <img className="mr-4" width="100" src="/images/visamastercard.jpeg" />

                    <button onClick={() => childRef.current.getAlert()} type="submit" className="btn-reserve text-uppercase">Finish Order</button>
                </div>
            </form>
        </Modal>
    </>)
}



// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First & Last Name" {...register("First & Last Name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Phone" {...register("Phone", {required: true, maxLength: 12})} />
//       <input type="number" placeholder="Card" {...register("Card", {required: true})} />

//       <input type="submit" />
//     </form>
//   );
// }