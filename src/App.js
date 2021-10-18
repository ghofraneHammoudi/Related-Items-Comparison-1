import One from './components/card';
import React, { useEffect, useState } from 'react';
import Outfit from './components/Outfit';
import axios from 'axios';
import Reviews from "./components/Reviews.js";
import Slider from "./components/Slider.js";
import QandA from "./Components/QandA.jsx";

const NameOfTheService = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(2);
    const [reponse, setReponse] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur

        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344', { headers: { "Authorization": `${'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'}` } })
            .then((res) => {


                console.log(res.data);
                setReponse(res.data.results)


            }

            )
    }, []);
    var addcounter = () => {
        var a = count + 2
        setCount(a)
    }
    var addhelp = () => {
        var b = counter + 1
        setCounter(b)
    }
    return (

        <div className="grid grid-cols-8 grid-rows-2 gap-3 min-h-screen m-3" >

            <div className="col-start-3 col-end-7 text-gray-500 flex justify-center gap-x-10 ml-16  "  >
                <div className="row-start-1 row-end-2" > RELATED PRODUCT   <One data={data} /> </div>
            </div>

            <div className="col-start-3 col-end-7 text-gray-500 flex justify-center gap-x-10 ml-16"  >



                <div className="row-start-1 row-end-2" > <Outfit /> </div>


            </div>

            {console.log(count)}
            <Slider />
            <Reviews counter={counter} response={reponse} count={count} addcounter={() => addcounter()} addhelp={() => addhelp()} />
            <div>
                <QandA />
            </div>
        </div>
    )
};

export default NameOfTheService;
