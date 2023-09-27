import React from 'react'

//redux
import {connect} from 'react-redux'

//actions
import {insertSitePage} from 'actions/sitePageActions'

//react-router-dom 
import {Link} from 'react-router-dom'

const EditButton=({id, url})=>{
    
    
    return(
        <div className='is-fixed bottom-5 right-1 z-index-1'>
            <Link to={`${url}/${id}`}>
                <div className="box is-pointer has-background-blue helper-button pt-0 pb-0 pr-0 pl-0">
                    <span className="icon is-small is-right has-text-white">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </span>
                </div>
            </Link>
        </div>
    )
}
export default connect (null, {insertSitePage})(EditButton)