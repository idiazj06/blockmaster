import React, { useState } from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Modal } from 'reactstrap'
import { Tarjetas, ModalHeader, ModalBody, ModalBodyOverview, ModalBodyImg } from './Styled/Styles'
import axios from 'axios'
import uuid from 'react-uuid'





const Cards = ({ personaje }) => {

    const poster = `https://image.tmdb.org/t/p/w500/${personaje.poster_path}`

    const [modal, setModal] = useState(false)
    const [modalOpciones, setModalOpciones] = useState(false)
    const [modalAgregar, setModalAgregar] = useState(false)
    const [modalModificar, setModalModificar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)

    const openOverview = () => { setModal(!modal) }
    const openOpciones = () => { setModalOpciones(!modalOpciones) }
    const openAgregar = () => { setModalAgregar(!modalAgregar) }
    const openModificar = () => { setModalModificar(!modalModificar) }
    const openEliminar = () => { setModalEliminar(!modalEliminar) }


    const [Agregar, setAgregar] = useState({
        adult: false,
        backdrop_path: '',
        genre_ids: [],
        original_language: '',
        original_title: '',
        overview: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        title: '',
        video: '',
        vote_average: '',
        vote_count: ''
    })

    const [Modificar, setModificar] = useState({

        adult: false,
        backdrop_path: '',
        id: '',
        genre_ids: [],
        original_language: '',
        original_title: '',
        overview: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        title: '',
        video: '',
        vote_average: '',
        vote_count: ''
    })
    const subirAgregar = async () => {
        axios.post('https://api-blockmaster.herokuapp.com/movies', {
            "adult": Agregar.adult,
            "backdrop_path": Agregar.backdrop_path,
            "genre_ids": Agregar.genre_ids,
            "id": uuid,
            "original_language": Agregar.original_language,
            "original_title": Agregar.original_title,
            "overview": Agregar.overview,
            "popularity": Agregar.popularity,
            "poster_path": Agregar.poster_path,
            "release_date": Agregar.release_date,
            "title": Agregar.title,
            "video": Agregar.video,
            "vote_average": Agregar.vote_average,
            "vote_count": Agregar.vote_count
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const subirModificar = async () => {
        console.log(personaje.id)
        axios.put(`https://api-blockmaster.herokuapp.com/movies/${personaje.id}`, {
            "adult": Modificar.adult,
            "backdrop_path": Modificar.backdrop_path,
            "genre_ids": Modificar.genre_ids,
            "id": Modificar.id,
            "original_language": Modificar.original_language,
            "original_title": Modificar.original_title,
            "overview": Modificar.overview,
            "popularity": Modificar.popularity,
            "poster_path": Modificar.poster_path,
            "release_date": Modificar.release_date,
            "title": Modificar.title,
            "video": Modificar.video,
            "vote_average": Modificar.vote_average,
            "vote_count": Modificar.vote_count
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const ejecEliminar = async () => {
        console.log(personaje.id)
        axios.delete(`https://api-blockmaster.herokuapp.com/movies/${personaje.id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

        window.location.reload(true)
        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Tarjetas>
            <img src={poster} className="card-img-top " alt={personaje.title} />
            <div className="card-body">
                <h5 className="card-title">{personaje.title}</h5>
            </div>


            <input
                type="button"
                value="Mas informacion"
                onClick={openOverview}
            />



            <Modal isOpen={modal} size={''} contentClassName="bg-dark" >
                <ModalHeader>

                    <input
                        type="button"
                        value="X"
                        onClick={openOverview}
                    />
                </ModalHeader>
                <ModalBody>
                    <ModalBodyImg src={poster} alt="" />
                    <ModalBodyOverview>
                        <h3>{personaje.title}</h3>
                        <span>{personaje.overview}</span>
                    </ModalBodyOverview>

                </ModalBody>

                <div className="modalFooter">
                    <input type="button" value="Ver trailer" />
                    <input type="button" value="Opciones" onClick={openOpciones} />
                </div>
            </Modal>

            {/* MODAL OPCIONES */}
            <Modal isOpen={modalOpciones} size={'lg'} contentClassName="bg-dark" >
                <ModalHeader>
                    <input
                        type="button"
                        value="X"
                        onClick={openOpciones}
                    />
                </ModalHeader>
                <ModalBody>
                    <input type="button" value="Agregar" onClick={openAgregar} />
                    <input type="button" value="Modificar" onClick={openModificar} />
                    <input type="button" value="Eliminar" onClick={openEliminar} />
                </ModalBody>
            </Modal>

            {/* MODALES CRUD */}
            {/* AGREGAR */}
            <Modal isOpen={modalAgregar} size={'lg'} contentClassName="bg-dark" >
                <ModalHeader>
                    <input
                        type="button"
                        value="X"
                        onClick={openAgregar}
                    />
                </ModalHeader>
                <ModalBody>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Genero</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, genre_ids: e.target.value })}
                        />

                        <label htmlFor="">Lenguaje Original</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, original_language: e.target.value })}
                        />

                        <label htmlFor="">Titulo Original</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, original_title: e.target.value })}
                        />

                        <label htmlFor="">Sinopsis</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, overview: e.target.value })}
                        />

                        <label htmlFor="">Popularidad</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, popularity: e.target.value })}
                        />

                        <label htmlFor="">Url de poster</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, poster_path: e.target.value })}
                        />

                        <label htmlFor="">Fecha de lanzamiento AAAA-MM-DD</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, release_date: e.target.value })}
                        />

                        <label htmlFor="">Titulo</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, title: e.target.value })}
                        />

                        <label htmlFor="">Url del video</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            onChange={e => setAgregar({ ...Agregar, video: e.target.value })}
                        />
                        <input
                            type="submit"
                            value="Agregar"
                            onClick={subirAgregar}
                        />
                    </form>

                </ModalBody>
            </Modal>
            {/* Modificar */}
            <Modal isOpen={modalModificar} size={'lg'} contentClassName="bg-dark" >
                <ModalHeader>
                    <input
                        type="button"
                        value="X"
                        onClick={openModificar}
                    />
                </ModalHeader>
                <ModalBody>
                    <form action="" onSubmit={handleSubmit}>

                        <label htmlFor="">id</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            value={personaje.id}
                            onChange={e => setModificar({ ...Modificar, id: e.target.value })}
                            readOnly={true}
                        />

                        <label htmlFor="">Genero</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.genre_ids}
                            onChange={e => setModificar({ ...Modificar, genre_ids: e.target.value })}
                        />

                        <label htmlFor="">Lenguaje Original</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.original_language}
                            onChange={e => setModificar({ ...Modificar, original_language: e.target.value })}
                        />

                        <label htmlFor="">Titulo Original</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.original_title}
                            onChange={e => setModificar({ ...Modificar, original_title: e.target.value })}
                        />

                        <label htmlFor="">Sinopsis</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.overview}
                            onChange={e => setModificar({ ...Modificar, overview: e.target.value })}
                        />

                        <label htmlFor="">Popularidad</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.popularity}
                            onChange={e => setModificar({ ...Modificar, popularity: e.target.value })}
                        />

                        <label htmlFor="">Url de poster</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.poster_path}
                            onChange={e => setModificar({ ...Modificar, poster_path: e.target.value })}
                        />

                        <label htmlFor="">Fecha de lanzamiento AAAA-MM-DD</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.release_date}
                            onChange={e => setModificar({ ...Modificar, release_date: e.target.value })}
                        />

                        <label htmlFor="">Titulo</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.title}
                            onChange={e => setModificar({ ...Modificar, title: e.target.value })}
                        />

                        <label htmlFor="">Url del video</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder={personaje.video}
                            onChange={e => setModificar({ ...Modificar, video: e.target.value })}
                        />
                        <input
                            type="submit"
                            value="Modificar"
                            onClick={subirModificar}
                        />
                    </form>
                </ModalBody>
            </Modal>
            {/* Eliminar */}
            <Modal isOpen={modalEliminar} size={'lg'} contentClassName="bg-dark" >
                <ModalHeader>
                    <input
                        type="button"
                        value="X"
                        onClick={openEliminar}
                    />
                </ModalHeader>
                <ModalBody>
                <input
                            type="button"
                            value="Modificar"
                            onClick={ejecEliminar}
                        />
                </ModalBody>
            </Modal>


        </Tarjetas>

    )
}

export default Cards
