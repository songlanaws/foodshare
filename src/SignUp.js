import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from './redux/reducer/signUpReducer';
import './App.css';

const SignUp = ({ user, error, signUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    signUp(name, email, password);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {error && <p>{error}</p>}
          {user ? (
            <p>Welcome, { user.name }</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div  className='signUpFrom'>
                <div>
                  Name: <input type='text' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  Password: <input type='password' value={password}  onChange={e => setPassword(e.target.value)} />
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          )}
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.signUp.user,
    error: state.signUp.error
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);
