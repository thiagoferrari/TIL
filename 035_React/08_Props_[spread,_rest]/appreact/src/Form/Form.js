import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    return <div>
        <Input texto='Email: ' id='email' required /*esse required entra no spread ...outros*/ />
        <Input texto='Password: ' id='pass' type="password" /*esse type entra no spread ...outros*//>
        <Button />
    </div>
}

export default Form