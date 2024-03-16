import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailValid(validateEmail(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPasswordValid(inputPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    setConfirmPasswordValid(inputConfirmPassword === password);
  };

  const validateEmail = (email) => {
    // A simple email validation, you may want to use a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className='signup'>
      <label><b>Email:</b></label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ border: emailValid ? '2px solid green' : '2px solid red', borderRadius: "5px" }}
      />
      {!emailValid && <p style={{ color: 'red' }}>Invalid email format</p>}

      <label><b>Password:</b></label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ border: passwordValid ? '2px solid green' : '2px solid red', borderRadius: "5px" }}
      />
      {!passwordValid && (
        <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>
      )}

      <label><b>Confirm Password:</b></label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{
          border: confirmPasswordValid ? '2px solid green' : '2px solid red',
          borderRadius: "5px"
        }}
      />
      {!confirmPasswordValid && (
        <p style={{ color: 'red' }}>Passwords do not match</p>
      )}

      <button onClick={handleSubmit} className='btn'>Sign Up</button>
    </div>
  );
};


export default Signup
