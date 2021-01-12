import React, { useEffect } from 'react'

import AdyenCheckout from "@adyen/adyen-web";
import '@adyen/adyen-web/dist/adyen.css';

import './adyen-dropin.css'

export default function AdyenDropin() {
    var card;

    const paymentMethodsResonse = { "groups": [{ "name": "Credit Card", "types": ["amex", "bcmc", "diners", "discover", "maestro", "mc", "visa"] }], "paymentMethods": [{ "brands": [] }, { "details": [{ "key": "paywithgoogle.token", "type": "payWithGoogleToken" }], "name": "Google Pay", "supportsRecurring": true, "type": "paywithgoogle" }] }

    const googlePayConfig = {
        configuration: {
            paymentMethodsConfiguration: {
                paywithgoogle: {
                    buttonColor: 'black',
                    buttonSizeMode: 'fill',
                },
            },
            showPayButton: true,
        },
    };


    const coreConfig = {
        clientKey: '',
        locale: 'en_US',
        environment: 'test',
        ...googlePayConfig.configuration,
        paymentMethodsResponse: paymentMethodsResonse,
    }

    useEffect(() => {
        const checkout = new AdyenCheckout(coreConfig);

        card = checkout.create('dropin').mount('#component-container')
    });

    async function authorise(cardDetails) {
        console.log(cardDetails)
    }

    return (
        <div className="update-card__container">
            <div className='update-card'>
                <div id="component-container"></div>
            </div>
        </div >
    )
}