import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDownWideShort} from '@fortawesome/free-solid-svg-icons';
import {faArrowUpWideShort} from '@fortawesome/free-solid-svg-icons';

export default function SortButtons({ type }) {
  return (
    <>
        <button className="btn btn-secondary mx-1"><FontAwesomeIcon icon={faArrowDownWideShort} /></button>
        <button className="btn btn-secondary mx-1"><FontAwesomeIcon icon={faArrowUpWideShort} /></button>
    </>
  )
}
