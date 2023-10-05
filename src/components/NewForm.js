import React from 'react'

function NewForm() {
    const initialValue = {
        name: "A",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialValue);

  return (
    <div>
        <form action="submit">
            <label>Email</label>
            <input type="email" value={formData.email} placeholder='Please enter email'/>

            <label>Password</label>
            <input type="password" value={formData.password} placeholder='Please enter password'/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}


export default Form