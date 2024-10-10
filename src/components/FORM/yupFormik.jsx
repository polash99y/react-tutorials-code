
import React from 'react'


import * as yup from 'yup';
import { useFormik } from "formik";


export default function Signup() {

  const formik = useFormik({
    initialValues :{
      name : '',
      email : '',
      password : ''
    },
    validationSchema: yup.object({
      name: yup.string().min(2, "name must have atleast 2 characters ").required(),
      email: yup.string().email().required(),
      password: yup.string().min(6,  "password must have atleast 6 characters ").required(),
    }),
    onSubmit : (values,{resetForm})=>{
      console.log(values);
      resetForm({values: ""})
    }
  })

  const renderNameError = formik.touched.name && formik.errors.name &&  <span style={{color:"red"}}>{formik.errors.name}</span>
  const renderEmailError = formik.touched.email && formik.errors.email &&  <span style={{color:"red"}}>{formik.errors.email}</span>
  const renderPasswordError = formik.touched.password && formik.errors.password &&  <span style={{color:"red"}}>{formik.errors.password}</span>


  const renderForm =   <form onSubmit={formik.handleSubmit}>
  <div>
      <label htmlFor='name'>Name : </label>
      <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          name="name"
          id="name"
           />
          {renderNameError}
  </div>
  <div>
      <label htmlFor='email'>Email : </label>
      <input
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
          name="email"
          id="email"
         />
         {renderEmailError}
  </div>
  <div>
      <label htmlFor='password'>Password : </label>
      <input
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          name="password"
          id="password"
          />
          {renderPasswordError}
  </div>
  <button type="submit">Signup</button>
</form>

    return (
        <div>
            <h1>User Signup</h1>
            {renderForm}
           
        </div>
    )
}
