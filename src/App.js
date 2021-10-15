import One from './components/card';
import React from 'react';

const NameOfTheService = () => {



    return (

        <div className="grid grid-cols-8 grid-rows-2 gap-3 min-h-screen m-3" >

            <div className="col-start-3 col-end-7 text-gray-500 flex justify-center gap-x-10 ml-16  "  >
                <div className="row-start-1 row-end-2" > RELATED PRODUCT   <One /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One /> </div>

            </div>
        </div>
    )
};
     
export default NameOfTheService;
