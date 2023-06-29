import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const handlePluse = () => {
        const newValue = value + 1;
        setValue(newValue);
    }
    console.log(value);
    return (
        <article className='addProduct'>
            <h3>Add new product</h3>
            <form>
                <section>
                    <small onClick={handlePluse}>+</small>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                </section>
                <section>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                    <label>
                        Item
                        <input type="text" placeholder='Escribe aquí' />
                    </label>
                </section>
                <div>
                    <small onClick={() => navigate(-1)}>Cancel</small>
                    <button>Confirm</button>

                </div>
            </form>

        </article>
    )
}

export default AddProduct