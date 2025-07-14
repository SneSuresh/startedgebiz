import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [activeMethod, setActiveMethod] = useState(null); // null, 'email', 'phone', 'google'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login attempted');
  };

  const handleEmailLogin = () => {
    setActiveMethod('email');
    setErrors({});
    setEmail("");
    setPassword("");
  };

  const handlePhoneLogin = () => {
    setActiveMethod('phone');
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (activeMethod === 'email') {
      if (!email) newErrors.email = 'This email is required';
      if (!password) newErrors.password = 'This password is required';
    } else if (activeMethod === 'phone') {
      if (!phone) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be exactly 10 digits';
      if (!otp) newErrors.otp = 'OTP is required';
      else if (!/^\d{6}$/.test(otp)) newErrors.otp = 'OTP must be exactly 6 digits';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Implement login logic here
      if (activeMethod === 'email') {
        console.log('Logging in with:', { email, password, rememberMe });
        setEmail("");
        setPassword("");
      } else if (activeMethod === 'phone') {
        console.log('Logging in with:', { phone, otp });
        setPhone("");
        setOtp("");
      }
    }
  };

  return (
    <div className="login-outer-wrapper">
      <div className="login-card">
        <h2 className="login-title">Log In</h2>
        <p className="login-subtitle">Use below options to Login and continue</p>
        {activeMethod === 'email' && (
          <>
            <form className="login-form-fields" onSubmit={handleSubmit}>
              <label className="login-label">Email</label>
              <input
                className={`login-input${errors.email ? ' login-input-error' : ''}`}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
              {errors.email && <div className="login-error"> <span>⚠</span> {errors.email}</div>}
              <label className="login-label">Password</label>
              <div className="login-password-wrapper">
                <input
                  className={`login-input${errors.password ? ' login-input-error' : ''}`}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  tabIndex={-1}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z" fill="#bbb"/></svg>
                  ) : (
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M1 1l22 22M4.22 4.22A9.77 9.77 0 0012 3c7 0 10 7 10 7a18.6 18.6 0 01-2.24 3.34M9.9 9.9a3 3 0 014.2 4.2M6.53 6.53A5 5 0 0012 7a5 5 0 015 5c0 1.1-.36 2.1-.97 2.9M1 1l22 22" stroke="#bbb" strokeWidth="2"/></svg>
                  )}
                </button>
              </div>
              {errors.password && <div className="login-error"> <span>⚠</span> {errors.password}</div>}
              <div className="login-form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                  />
                  <span>Remember Me</span>
                </label>
              </div>
              <button type="submit" className="login-btn login-btn-submit">Log In</button>
            </form>
            <button type="button" className="login-back-btn" onClick={() => setActiveMethod(null)} style={{alignSelf: 'flex-start', marginTop: '16px', background: 'none', border: 'none', color: '#0088b9', fontWeight: 600, cursor: 'pointer', fontSize: '1rem'}}>&larr; Back</button>
          </>
        )}
        {activeMethod === 'phone' && (
          <>
            <form className="login-form-fields" onSubmit={handleSubmit}>
              <label className="login-label">Phone Number</label>
              <input
                className={`login-input${errors.phone ? ' login-input-error' : ''}`}
                type="tel"
                value={phone}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  if (val.length <= 10) setPhone(val);
                }}
                placeholder="Phone Number"
                autoFocus
              />
              {errors.phone && <div className="login-error"> <span>⚠</span> {errors.phone}</div>}
              <label className="login-label">OTP</label>
              <input
                className={`login-input${errors.otp ? ' login-input-error' : ''}`}
                type="text"
                value={otp}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  setOtp(val);
                }}
                placeholder="Enter OTP"
              />
              {errors.otp && <div className="login-error"> <span>⚠</span> {errors.otp}</div>}
              <button type="submit" className="login-btn login-btn-submit">Log In</button>
            </form>
            <button type="button" className="login-back-btn" onClick={() => setActiveMethod(null)} style={{alignSelf: 'flex-start', marginTop: '16px', background: 'none', border: 'none', color: '#0088b9', fontWeight: 600, cursor: 'pointer', fontSize: '1rem'}}>&larr; Back</button>
          </>
        )}
        {activeMethod === null && (
          <>
            <div className="login-btn-group">
              <button className="login-btn email" onClick={handleEmailLogin}>
                <svg className="login-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 4.75A2.75 2.75 0 0 1 4.75 2h14.5A2.75 2.75 0 0 1 22 4.75v14.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V4.75zm2.75-1.25A1.25 1.25 0 0 0 3.5 4.75v.638l8.5 6.375 8.5-6.375v-.638A1.25 1.25 0 0 0 19.25 3.5H4.75zm16.75 2.862-7.98 5.98a1.25 1.25 0 0 1-1.54 0L3.5 6.362V19.25c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V6.362z" fill="#0088b9"/></svg>
                Login with Email
              </button>
              <button className="login-btn phone" onClick={handlePhoneLogin}>
                <svg className="login-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="#00bf8f"/></svg>
                Login with Phone Number
              </button>
            </div>
            <div className="login-or">Or</div>
            <div className="login-btn-group">
              <button className="login-btn social google" onClick={handleGoogleLogin}>
                <img src="/google.svg" alt="Google" className="login-icon" />
                Login with Google
              </button>
            </div>
          </>
        )}
        {activeMethod === 'phone' && (
          <div className="login-links">
            <span>Don't have an account? <button className="login-link" onClick={() => navigate('/register')}>Sign up here</button></span>
          </div>
        )}
        {activeMethod !== 'phone' && activeMethod !== 'email' && (
          <div className="login-links">
            <span>Don't have an account? <button className="login-link" onClick={() => navigate('/register')}>Sign up here</button></span>
          </div>
        )}
        {activeMethod === 'email' && (
          <div className="login-links">
            <span>Don't have an account? <button className="login-link" onClick={() => navigate('/register')}>Sign up here</button></span>
            <span>Forgot password? <button className="login-link" onClick={() => navigate('/forgot-password')}>Recover password here</button></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login; 