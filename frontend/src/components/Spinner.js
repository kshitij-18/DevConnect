import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div>
            <img
                src={loading}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt='Loading...'
            >

            </img>
        </div>
    )
}

export default Spinner
