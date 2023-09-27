import React from 'react'

const PageNotFound = () => {

  const onClick = async() =>{ 
    window.location = '/dashboard'
  }

  let url = window.location.href

  return ( 
    <div className='notFound'>
      <div class="moon"></div>  
      <div class="moon__crater moon__crater1"></div>
      <div class="moon__crater moon__crater2"></div>
      <div class="moon__crater moon__crater3"></div>

      <div class="star star1"></div>
      <div class="star star2"></div>
      <div class="star star3"></div>
      <div class="star star4"></div>
      <div class="star star5"></div>

      <div class="error">
        <div class="error__title">404</div>
        <div class="error__subtitle">Ops! Est&aacute;s en una URL errada.</div>
        <div class="error__description">La p&aacute;gina {url} no existe.<br/> Puedes pulsar el boton de abajo para volver a la pagina inicial.</div>
        <button className = "button is-fullwidth is-blue mb-4" onClick={onClick}>Volver</button>
      </div>

      <div class="astronaut">
        <div class="astronaut__backpack"></div>
        <div class="astronaut__body"></div>
        <div class="astronaut__body__chest"></div>
        <div class="astronaut__arm-left1"></div>
        <div class="astronaut__arm-left2"></div>
        <div class="astronaut__arm-right1"></div>
        <div class="astronaut__arm-right2"></div>
        <div class="astronaut__arm-thumb-left"></div>
        <div class="astronaut__arm-thumb-right"></div>
        <div class="astronaut__leg-left"></div>
        <div class="astronaut__leg-right"></div>
        <div class="astronaut__foot-left"></div>
        <div class="astronaut__foot-right"></div>
        <div class="astronaut__wrist-left"></div>
        <div class="astronaut__wrist-right"></div>
        
        <div class="astronaut__cord">
          <canvas id="cord" height="500px" width="500px"></canvas>
        </div>
        
        <div class="astronaut__head">
          <canvas id="visor" width="60px" height="60px"></canvas>
          <div class="astronaut__head-visor-flare1"></div>
          <div class="astronaut__head-visor-flare2"></div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound