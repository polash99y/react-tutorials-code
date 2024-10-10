
import React from 'react'


// import * as yup from 'yup';
import { useFormik } from "formik";


export default function Signup() {

  const formik = useFormik({
    initialValues :{
      name : '',
      email : '',
      password : ''
    },
    onSubmit : (values,{resetForm})=>{
      console.log(values);
      resetForm({values: ""})
    }
  })


    return (
        <div>
            <h1>User Signup</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name : </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        type="text"
                        name="name"
                        id="name"
                        required />
                </div>
                <div>
                    <label htmlFor='email'>Email : </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email"
                        name="email"
                        id="email"
                        required />
                </div>
                <div>
                    <label htmlFor='password'>Password : </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                        name="password"
                        id="password"
                        required />
                </div>
                <button type="submit">Signup</button>
            </form>

           
        </div>
    )
}
