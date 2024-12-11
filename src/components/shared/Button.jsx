import React from 'react'

const Button = ({ children, style, onClick }) => {
    return (
        <button className='w-full bg-app-secondary-color  m-auto hover:bg-app-third-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' style={style} onClick={onClick}>{children}</button>
    )
}

export default Button