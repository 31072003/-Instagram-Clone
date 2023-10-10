import React, { useEffect, useState } from 'react';
import './Stact.css'

const StactVise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch(`https://data.covid19india.org/data.json`);
            const actualData = await res.json();
            setData(actualData.statewise);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <div>
            <table className='tablehover'>
                <thead className='tabledark'>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody className='tablebody'>
                    {data.map((curElem, index) => (
                        <tr key={index}>
                            <td>{curElem.state}</td>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.active}</td>
                            <td>{curElem.lastupdatedtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StactVise;
