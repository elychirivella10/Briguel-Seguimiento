import React from 'react'

const NoteFile = ({file, enviarArchivo}) =>{
    return(
        <div class="file is-centered is-boxed has-name is-fullwidth">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" onChange={enviarArchivo}/>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label has-text-centered">
              Cargar archivo
            </span>
          </span>
          <span class="file-name has-text-centered">
            {file.name}
          </span>
        </label>
      </div>
    )
}
export default NoteFile