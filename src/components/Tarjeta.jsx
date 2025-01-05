import React from 'react';

export default function Tarjeta({Usuario})
{
    return (
        <div className='bg-white shadow-black shadow shadow-md rounded-md p-4 ml-6 mt-6 flex gap-6 w-fit'>
            <div>
                <h1>Nombre: {Usuario.nombre}</h1>
                <h2>Edad: {Usuario.edad}</h2>
                <h2>Ocupacion: {Usuario.ocupacion}</h2>
            </div>
            <div>
                <img src={Usuario.profilePicture} alt="Logo" className='w-20 h-20'/>
            </div>
        </div>
    )
}