import React from 'react'

const LegendStatus = ({arr}) =>{
    return(
        <div className='is-fixed bottom-1 left-1 z-index-1'>
            <div className="box">
                {arr.map(a=>(
                    <div>
                        <span className={`legend-item ${a.type}`}>{a.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
} 
export default LegendStatus