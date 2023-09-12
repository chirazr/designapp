import React from 'react'

import "./SignIN.css"

const SignIN = () => {
  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign up with your email and password</span>
        <form>
        <FormInput 
        label="Email"
        type="email" required name='email' />

        <FormInput 
        label="Password"
        type="password" required name='password'/>
         <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType={Button_TYPE_CLASS.google} >Google Sign In</Button>
         </div>

        </form>
    </div>
  )
}

export default SignIN
