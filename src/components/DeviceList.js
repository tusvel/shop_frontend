import React, {useContext} from 'react';
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;