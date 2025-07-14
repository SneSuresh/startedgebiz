import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your recovery email address.');
      return;
    }
    // Here you would trigger your password recovery logic
    setSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <div className="login-outer-wrapper">
      <div className="login-card">
        <h2 className="login-title" style={{marginBottom: '12px'}}>Password Recovery</h2>
        <p className="login-subtitle" style={{marginBottom: '18px'}}>Enter your recovery email address to receive password reset instructions.</p>
        <form className="login-form-fields" onSubmit={handleSubmit} style={{gap: '10px'}}>
          <label className="login-label" style={{marginBottom: '4px'}}>Recovery Email</label>
          <input
            className={`login-input${error ? ' login-input-error' : ''}`}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your recovery email"
            autoFocus
            style={{marginBottom: '8px'}}
          />
          {error && <div className="login-error" style={{marginBottom: '8px'}}> <span>⚠</span> {error}</div>}
          <button type="submit" className="login-btn login-btn-submit" style={{marginTop: '8px', marginBottom: '8px'}}>Submit</button>
        </form>
        <button type="button" className="login-back-btn" onClick={() => navigate(-1)} style={{alignSelf: 'flex-start', marginTop: '10px', background: 'none', border: 'none', color: '#0088b9', fontWeight: 600, cursor: 'pointer', fontSize: '1rem'}}>&larr; Back</button>
        {submitted && !error && (
          <div className="login-success" style={{marginTop: '10px', color: '#00bf8f', fontWeight: 600}}>
            If this email is registered, you will receive password reset instructions shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 