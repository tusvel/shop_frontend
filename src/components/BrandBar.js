import React, {useContext} from 'react';
import {Context} from "../index";
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer', margin:'0 5px 0'}}
                    className="p-3"
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'secondary'}
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;