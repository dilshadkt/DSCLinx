"use client"

import { PuffLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <div className='bg-white w-screen h-screen max-w-full flex items-center justify-center'>
        <PuffLoader color="#004363" />
    </div>
  )
}
