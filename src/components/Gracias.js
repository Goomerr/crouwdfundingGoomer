import React from 'react'

const Gracias = ({ mostrarGracias, setMostrarGracias, setIsOpen }) => {

    const cerrarGracias = () => {
        setMostrarGracias('invisible')
        setIsOpen('')
    }
    return (
        <div id="gracias" className={`${mostrarGracias} gracias`}>
            <p className="text-center"><svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                    <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
                </g>
            </svg></p>
            <h4 className="negro bold t-g text-center"> Thanks for your support!</h4>
            <p className="text-center"> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
                worldwide. You will get
                an email once our campaign is completed.
            </p>
            <p className="text-center m-t-3">
                <button
                    className="btn  btn-p  m-b-3"
                    onClick={() => cerrarGracias()}>
                    Got it!</button></p>
        </div>
    )
}

export default Gracias
