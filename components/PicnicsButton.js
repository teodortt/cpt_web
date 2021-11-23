import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import DatePicker from "react-datepicker";

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

export default function ReserveBtn({ setHours, setMinutes, startDate, setStartDate, count, setCount }) {

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

    const adultsPrice = 59;
    const kidsPrice = 49;
    let subtotalPrice;
    let totalPrice;
    let taxPrice;
    const taxRate = 8.875 / 100;

    function calculateTotalPrice(count) {
        subtotalPrice = count.adults * adultsPrice + count.kids * kidsPrice;
        totalPrice = subtotalPrice + subtotalPrice * taxRate;
        taxPrice = subtotalPrice * taxRate;
        setCount({ ...count, subtotal: subtotalPrice, total: totalPrice, tax: taxPrice });
        // console.log('subtotal ' + subtotal + 'total ' + total);
    }

    useEffect(() => {
        calculateTotalPrice(count);
    }, [count.adults, count.kids])

    return (<>
        <div onClick={showModal} className={`btn-reserve ${mobileModalVisible ? 'm-checkout' : ''}`}>Reserve</div>
        <Modal visible={mobileModalVisible} onCancel={() => setMobileModalVisible(false)} footer={null}>
            {/* <div className="container"> */}
            <form>
                {/* <div onClick={hhhandle}>CLICK</div> */}
                <div className="row pt-4 justify-content-center">
                    <div className="col text-center">
                        <p className="book-title">Picnic Request Form</p>
                        <div className="form-group">

                        </div>
                        <div className="checkout-form">
                            <div className="form-group centered-row">
                                <input className="form-control" placeholder="First & Last Name" type="text" />
                            </div>
                            <div className="form-group centered-row">
                                <input className="form-control" placeholder="Phone" type="text" />
                            </div>
                            <div className="form-group centered-row">
                                <input className="form-control" placeholder="Email" type="text" />
                            </div>

                            <div className="form-group centered-row">
                                <p className="t-title" >Number Of Guests</p>
                                <br></br>
                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                                <input className="counter-field" type="number" value={count.kids} />
                                <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                            </div>
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
                            </div>
                            <div className="form-group centered-row">
                                <textarea className="form-control" placeholder="Your Notes" >
                                </textarea>

                            </div>
                        </div>
                        <button className="btn-reserve">Request Now</button>

                    </div>
                </div>
            </form>

            {/* </div> */}
        </Modal>

    </>)
}