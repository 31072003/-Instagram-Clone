import React, { useState } from 'react';
import { useEffect } from 'react';
import './Covid.css'

const Covid = () => {


    const [data, setData] = useState([])


    const getCovidData = async () => {

        try {
            const res = await fetch(`https://data.covid19india.org/data.json`)
            const actualdata = await res.json()
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();

    }, [])
    return (
        <div>
            <section>

                <h1>Live ...</h1>
                <h2>cocrona virus tracker</h2>
                <ul>
                    <li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>our </span>country</p>
                                <p className='cardtotal card'>india</p>
                            </div>
                        </div>
                    </li><li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>total </span>reacverd</p>
                                <p className='cardtotal card'>{data.recovered}</p>
                            </div>
                        </div>
                    </li><li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>total </span>confirm  </p>
                                <p className='cardtotal card'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li><li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>total </span>death</p>
                                <p className='cardtotal card'>{data.deaths}</p>
                            </div>
                        </div>
                    </li><li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>total </span>active</p>
                                <p className='cardtotal card'>{data.active}</p>
                            </div>
                        </div>
                    </li><li className='card'>
                        <div className='cardmain'>
                            <div className='cardinner'>
                                <p className='cardname'><span>total </span>update</p>
                                <p className='cardtotal card'>data</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    )

}
export default Covid;