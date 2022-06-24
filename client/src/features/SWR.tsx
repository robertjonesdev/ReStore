import { useEffect, useState } from "react";

export default function SWR() {

    const [SWR, setSWR] = useState<number>();

    // useEffect(()=>{
    //     Promise.all([
    //         fetch('https://www.quandl.com/api/v3/datasets/MULTPL/SHILLER_PE_RATIO_MONTH.json?api_key=TsTFxdXrqx6AemhpABaP'),
    //         fetch('https://www.quandl.com/api/v3/datasets/FRED/DGS10.json?api_key=TsTFxdXrqx6AemhpABaP')
    //     ]).then(function (responses) {
    //         return Promise.all(responses.map(function (response) {
    //             return response.json();
    //         }));
    //     }).then(function (data) {
    //         var cape = parseFloat(data[0].dataset.data[0][1]);
    //         var bond_yield = parseFloat(data[1].dataset.data[0][1]);
    //         var swr = 12.15 - 2.47 * Math.log(cape) + 0.05 * (bond_yield/100) - 0.5;
	// 		swr = swr < 3.5 ? 3.5 : swr;
	// 		swr = swr > 5.5 ? 5.5 : swr;
    //         setSWR(swr);
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // },[])



    return (
        <h1>{SWR}</h1>
    )
};