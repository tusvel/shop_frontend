import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({device}) => {
    const context = useContext(Context)
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-3 " onClick={() => navigate(DEVICE_ROUTE +  '/' + device.id)}>
            <Card style={{width: 150, cursor:'pointer'}} border="light">
                <Image style={{objectFit: "contain"}} width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex justify-content-between">
                    <div className="text-black-50">{context.device.brands[device.brandId - 1].name}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image style={{width: 18, height: 18}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png"/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;