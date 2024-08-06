import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeleteButton({ indice, delFunction }) {
  return (
    <button className="btn btn-danger mx-1" onClick={() => delFunction(indice)}><FontAwesomeIcon icon={faTrash}/></button>
  )
}
