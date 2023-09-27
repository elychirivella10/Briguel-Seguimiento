import React from 'react'

import ContenTimeLine from './ContentTimeLine'

const TimeLine=({data,...rest})=>{
    return(
        <div className="box pt-6 pr-6 pl-6 pb-6">
            <div className="timeline is-centered">
                <header className="timeline-header">
                    <span className="tag is-primary">------o------</span>
                </header>
                <ContenTimeLine data={data}/>
                <header className="timeline-header">
                    <span className="tag is-primary">------o------</span>
                </header>
            </div>
        </div>
    )
}
export default TimeLine