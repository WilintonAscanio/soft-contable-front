import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    return (
        <article className='addProduct'>
            <h3>Add new product</h3>
            <form>
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