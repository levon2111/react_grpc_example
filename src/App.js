import React, {useState, useEffect} from 'react';
import './App.css';

import {PageInformationRequest} from "./page_information_pb"
import {PageInformationServicePromiseClient} from "./page_information_grpc_web_pb"

var client = new PageInformationServicePromiseClient('http://localhost:8000')

function App() {
    const [temp, setTemp] = useState(-9999);

    const getTemp = () => {
        console.log("called")

        // var sensorRequest = new PageUrl()
        // sensorRequest.setPageUrl("https://github.com/grpc/grpc-web/releases")
        // var stream = client.getPageScreenshot(sensorRequest)
        // stream.then((data)=> {
        //     console.log(data)
        // })

        var sensorRequest = new PageInformationRequest()
        sensorRequest.setPageUrl("https://github.com/grpc/grpc-web/releases")
        var stream = client.getPageInformation(sensorRequest)
        stream.then((data)=> {
            console.log(data)
        })

        // stream.on('data', function (response) {
        //     console.log(1)
        //     // setTemp(response.getValue())
        // });
    };



    useEffect(() => {
        getTemp()
    }, []);

    return (
        <div>
            Temperature : {temp} F
        </div>
    );
}

export default App;