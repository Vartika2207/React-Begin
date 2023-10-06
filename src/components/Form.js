import React, { useState } from 'react'

function Form() {
    const initialValue = {
        name: "",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, undefined, 2));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={formData.name} placeholder='Please enter name' onChange={(event) => setFormData({...formData, name: event.target.name})}/>

            <label>Email</label>
            <input type="email" value={formData.email} placeholder='Please enter email' onChange={event => setFormData({...formData, email: event.target.email})}/>

            <label>Password</label>
            <input type="password" value={formData.password} placeholder='Please enter password' onChange={event => setFormData({...formData, password: event.target.password})}/>

            <button type="submit">Submit</button>

            <p>{JSON.stringify(formData)}</p> {/*JSON.stringify() static method converts a JavaScript value to a JSON string, */}
            
        </form>
    </div>
  )
}

export default Form