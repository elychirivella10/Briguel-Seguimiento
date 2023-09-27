import React, {useEffect} from 'react'

//assets
import Square from 'assets/square.svg'
import Square2 from 'assets/square2.svg'

//redux
import {connect} from 'react-redux'
import {getSitePage} from 'actions/sitePageActions'

//containers
import NavBarGeneral from 'components/navbar/NavBarGeneral'

const Container=({children, getSitePage, sitePage})=>{
    useEffect(() => {
        getSitePage()
      /* return () => {
        second
      } */
    }, [getSitePage])
    return(
        <section className='section pr-0 pb-0 pl-0 pt-0 vw95 is-height-100 is-horizontal-center'>
            
            {   sitePage==='Login'?
                    <React.Fragment>
                        <img className="has-background-square bottom left" src={Square} alt="img"/>
                        <img className="has-background-square top right" src={Square2} alt="img"/>
                    </React.Fragment>
                :<NavBarGeneral/>
            }
            {children}
        </section>
    )
}

const mapStateToProps = (state) => ({
	sitePage:state.sitePage.sitePage
});

export default connect (mapStateToProps,{getSitePage}) (Container)