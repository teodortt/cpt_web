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
            <form>

                <div className="row pt-4 justify-content-center">
                    <div className="col text-center">
                        <p className="book-title">Book Now</p>
                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                minDate={new Date()}
                                minTime={setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 30), 17)}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                customInput={<CustomInput />}

                            />
                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Adults (16+)</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults > 1 ? count.adults - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.adults} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, adults: count.adults + 1 })}>+</div>

                        </div>
                        <div className="form-group centered-row">
                            <p className="t-title">Kids (16+)</p>
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids > 1 ? count.kids - 1 : 0 })}>-</div>
                            <input className="counter-field" type="number" value={count.kids} />
                            <div className="btn-counter" onClick={(e) => setCount({ ...count, kids: count.kids + 1 })}>+</div>
                        </div>
                        <p className="t-title">Duration <b> 2h</b></p>
                        <p className="text-uppercase pb-3" style={{ fontSize: 14 }}>Price from <b style={{ fontSize: 24, color: '#313030' }}>$59</b> usd</p>
                        <button className="btn-reserve" type="button" onClick={() => setIsModalVisible(true)}>Continue</button>
                        {/* <ReserveBtn total={val} /> */}

                    </div>
                </div>
            </form>
        </Modal>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
            {/* <div onClick={hhhandle}>CLICK</div> */}

            <h1 style={{ paddingBottom: '30px', color: '#4c4a4b', textShadow: '2px 0px currentColor' }}>Checkout</h1>
            <div className="row">
                <div className="col-xs-12 col-lg-6">

                    <div className="checkout-form">
                        <div className="form-group centered-row pb-2">
                            <input className="form-control" placeholder="First & Last Name" type="text" />
                        </div>
                        <div className="form-group centered-row pb-2">
                            <input className="form-control" placeholder="Email" type="text" />
                        </div>
                        <div className="form-group centered-row pb-2">
                            <input className="form-control" placeholder="Phone" type="text" />
                        </div>
                        <div className="form-group centered-row pb-2">
                            <input className="form-control" placeholder="Card Number" type="text" />
                        </div>
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
                            <span style={{ fontSize: '12px' }}>Duration: 2hr</span>
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
                        <div className="col text-uppercase text-right pb-3"><input type="text" id="discountCode" className="form-control" /></div>
                        <hr></hr>
                        <div className="col text-uppercase"><b>grand total</b></div>
                        <div className="col text-uppercase text-right"><b>{Number((count.total).toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</b></div>
                    </div>

                </div>
            </div>
            <div className="checkout-section text-right pt-3">
                <img className="mr-4" width="100" src="/images/visamastercard.jpeg" />
                <button className="btn-reserve text-uppercase">Finish Order</button>
            </div>
        </Modal>
    </>)
}