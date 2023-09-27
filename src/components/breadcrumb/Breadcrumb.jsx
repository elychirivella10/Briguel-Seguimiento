import React from "react";
import {Link} from 'react-router-dom'

//helpers
import {capiLetter} from 'helpers/letter/letter'
import withRouter from "helpers/router/withRouter";

const Breadcrumb = ({router}) =>{
    const path = router.location.pathname
    let array = path.split('/')
    let nameCapitalize = ''
    array = array.slice(1)

    return(
            <nav className="breadcrumb is-medium has-text-weight-semibold is-size-6" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <Link to="/">
                            <span>
                                Home
                            </span>
                        </Link>
                    </li>
                    {array.map((a, index) =>{
                        nameCapitalize = capiLetter(a)
                        return(
                            <React.Fragment>
                                <li key={index} className={index>0?"is-active":""}>
                                    <span>
                                        <Link to={`${path}`}>{nameCapitalize}</Link>
                                    </span>
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
                <ul>
                    <li>
                        <span>
                            <Link to={`${path}`}>
                                {nameCapitalize}
                            </Link>
                        </span> 
                    </li>
                </ul>
            </nav>
    )
}

export default withRouter(Breadcrumb)