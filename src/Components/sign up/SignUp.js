import React from 'react'

import "./SignUp.css"

const SignUp = () => {
  return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput 
            label="Display Name"
            type="text" required name='displayName' value={displayName} onChange={handleChange} />
    
            <FormInput 
            label="Email"
            type="email" required name='email' value={email} onChange={handleChange}/>
    
            <FormInput 
            label="Password"
            type="password" required name='password' value={password} onChange={handleChange}/>
    
            <FormInput 
            label="Confirm Password"
            type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
            <Button type='submit'>Sign Up</Button>
            </form>
        </div>
  )
}

export default SignUp
