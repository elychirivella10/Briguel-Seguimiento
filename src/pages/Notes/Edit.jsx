import React, {useEffect, useState} from 'react'

import Panel from 'components/Panel/Panel'
import { getNotes, deleteFile } from 'helpers/helpersNotes'
import { useParams } from 'react-router-dom'

const EditNotes = () =>{
    const [note, setNote] = useState({})
    const {id} = useParams('id')
    useEffect(() => {
        getNotes(setNote, id)
    }, [])
    
    const onSubmitDelete = (e) =>{
        e.preventDefault()
        deleteFile(note.id_file)
    }
    return(
        <div className="columns is-centered is-multiline">
            <div className="column is-7">
                <Panel title={'Actualizar Nota'} subtitle={note.title}/>
            </div>
            <div className="column is-7">
                <div className="box">
                    <div className="columns is-centered is-multiline">
                        <div className="column is-12">
                        <div className="field">
                            <div className="control">
                                    <p className=" has-text-weight-semibold mb-5">Nota</p>
                                    <textarea name='note' className="textarea" value={note.note} onChange={(e)=>(
                                        setNote({
                                            ...note,
                                            [e.target.name]:e.target.value
                                        })
                                    )}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="column is-12">
                        <div class="field has-addons is-right">
                        <p class="control">
                            <button class="button">
                            <span class="icon is-small">
                                <i class="fa-regular fa-circle-down"></i>
                            </span>
                            <a href={`http://172.16.0.46/notes/file/${note.id_file}`}>Descarga</a>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button" onClick={onSubmitDelete}>
                            <span class="icon is-small">
                                <i class="fa-solid fa-trash-can"></i>
                            </span>
                            <span>Eliminar</span>
                            </button>
                        </p>
                        <div className="control">
                            <div class="file has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume"/>
                                    <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Cargar
                                    </span>
                                    </span>
                                    <span class="file-name">
                                        {note.file_name}
                                    </span>
                                </label>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                        <div className="column is-12">
                            <button className = "button is-fullwidth is-blue">Guardar</button>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditNotes