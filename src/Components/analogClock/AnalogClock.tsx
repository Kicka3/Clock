import React from 'react';
import './analogClockStyles.css'

export const AnalogClock = () => {
    return (
        <section className='analog__lock'>

            <div className='display__container'>

                {/*<div className='clock__body'>*/}
                    <div className="hour">
                        <div className="hr" id="hr"></div>
                    </div>
                    <div className="min">
                        <div className="mn" id="mn"></div>
                    </div>
                    <div className="sec">
                        <div className="sc" id="sc"></div>
                    </div>
                {/*</div>*/}

            </div>


        </section>
    );
};

