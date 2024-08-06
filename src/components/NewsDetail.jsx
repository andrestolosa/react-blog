import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function NewsDetail({ indice, newsFeed, goBack }) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-11">
            <h1>{newsFeed[indice].titulo}</h1>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-outline-danger float-end" onClick={() => goBack(-1)}><FontAwesomeIcon icon={faRotateLeft} /></button>
          </div>
        </div>
        <p><img src={newsFeed[indice].urlImagen} width="100%" height="650px" /></p>
        <p>{newsFeed[indice].descripcion}</p>
        <p><i>Autor:</i> <b>{newsFeed[indice].autor}</b></p>
        <p><i>Categoria:</i> <b>{newsFeed[indice].categoria}</b></p>
        <p><i>Fecha:</i> <b>{newsFeed[indice].fecha}</b></p>
      </div>
    </>
  )
}
