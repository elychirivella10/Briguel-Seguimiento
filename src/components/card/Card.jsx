import React from 'react'

import '@fortawesome/fontawesome-free/css/all.css'

const Card  = ({content, header, title, hover}) =>{      

    
    
    return (
    	<div className={`card ${hover}`}>
            {
                hover ?
                    <div className="card-image">
                        <figure className="image image is-3by1">
                            <span className="icon span-rounded">
                                <i className="fa-solid fa-list-check" aria-hidden="true">{` ${header} `}</i>
                            </span>
                            <div className={`border-radius-image-card is-flex is-justify-content-center is-absolute top-0 is-height-100 is-align-items-center has-background-grey-light is-width-100 is-primary bold`}>
                                <span className='has-text-white is-size-4 has-text-weight-medium'>
                                    {title}
                                </span>
                            </div>
                        </figure>
                    </div>
                :
                <header className="card-header">
                    <p className="card-header-title">
                        {title}
                    </p>
                </header>
            }
          <div className="card-content">
              <div className="content">
                  {content}
              </div>
          </div>
        </div>
    )
}

export default Card
