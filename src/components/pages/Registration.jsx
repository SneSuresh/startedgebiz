import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Password validation helper functions
  const hasUpperCase = (str) => /[A-Z]/.test(str);
  const hasLowerCase = (str) => /[a-z]/.test(str);
  const hasDigit = (str) => /\d/.test(str);
  const hasSpecialChar = (str) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/.test(str);
  const isValidLength = (str) => str.length >= 8;
  const isAlphanumeric = (str) => /^[a-zA-Z0-9_]+$/.test(str);

  const validatePassword = (password) => {
    const errors = [];
    
    if (!isValidLength(password)) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!hasUpperCase(password)) {
      errors.push('Include at least one uppercase letter (A-Z)');
    }
    if (!hasLowerCase(password)) {
      errors.push('Include at least one lowercase letter (a-z)');
    }
    if (!hasDigit(password)) {
      errors.push('Include at least one number (0-9)');
    }
    if (!hasSpecialChar(password)) {
      errors.push('Include at least one special character (!@#$%^&*()_+-=[]{};\'"\\|,.<>/?)');
    }
    
    return errors;
  };

  // Validation helper functions
  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // Comprehensive email validation for different domains
    const emailRegex = /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|yahoo\.in|outlook\.com|hotmail\.com|[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/i;
    return emailRegex.test(email);
  };

  // Phone number validation helper functions
  const countryCodePatterns = {
    '+91': { // India
      pattern: /^\d{10}$/,
      errorMsg: 'Indian phone numbers must be exactly 10 digits'
    },
    '+1': { // USA/Canada
      pattern: /^\d{10}$/,
      errorMsg: 'US/Canada phone numbers must be exactly 10 digits'
    },
    '+44': { // UK
      pattern: /^\d{10}$/,
      errorMsg: 'UK phone numbers must be exactly 10 digits'
    },
    '+61': { // Australia
      pattern: /^\d{9}$/,
      errorMsg: 'Australian phone numbers must be exactly 9 digits'
    },
    '+86': { // China
      pattern: /^\d{11}$/,
      errorMsg: 'Chinese phone numbers must be exactly 11 digits'
    },
    '+81': { // Japan
      pattern: /^\d{10}$/,
      errorMsg: 'Japanese phone numbers must be exactly 10 digits'
    },
    '+49': { // Germany
      pattern: /^\d{10,11}$/,
      errorMsg: 'German phone numbers must be 10-11 digits'
    },
    '+33': { // France
      pattern: /^\d{9}$/,
      errorMsg: 'French phone numbers must be exactly 9 digits'
    },
    '+7': { // Russia
      pattern: /^\d{10}$/,
      errorMsg: 'Russian phone numbers must be exactly 10 digits'
    },
    '+971': { // UAE
      pattern: /^\d{9}$/,
      errorMsg: 'UAE phone numbers must be exactly 9 digits'
    }
  };

  const validatePhoneNumber = (phoneCode, phoneNumber) => {
    const countryPattern = countryCodePatterns[phoneCode];
    if (!countryPattern) {
      return 'Invalid country code';
    }
    
    // Remove any spaces or special characters
    const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
    
    if (!countryPattern.pattern.test(cleanNumber)) {
      return countryPattern.errorMsg;
    }
    
    // Additional validation for Indian numbers
    if (phoneCode === '+91') {
      if (!/^[6789]/.test(cleanNumber)) {
        return 'Indian mobile numbers must start with 6, 7, 8, or 9';
      }
    }
    
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!isValidName(formData.firstName)) {
      newErrors.firstName = 'First name should contain only letters';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name should be at least 2 characters long';
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!isValidName(formData.lastName)) {
      newErrors.lastName = 'Last name should contain only letters';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name should be at least 2 characters long';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., example@gmail.com, example@yahoo.com)';
    }
    
    // Phone validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneError = validatePhoneNumber(formData.phoneCode, formData.phoneNumber);
      if (phoneError) {
        newErrors.phoneNumber = phoneError;
      }
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const passwordErrors = validatePassword(formData.password);
      if (passwordErrors.length > 0) {
        newErrors.password = passwordErrors;
      }
    }
    
    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Real-time validation for names (prevent numbers and special characters)
    if ((name === 'firstName' || name === 'lastName') && value !== '') {
      if (!isValidName(value)) {
        return; // Don't update state if invalid character is entered
      }
    }

    // For phone number, only allow digits
    if (name === 'phoneNumber' && value !== '') {
      if (!/^\d*$/.test(value)) {
        return; // Don't update state if non-digit is entered
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Real-time validation feedback
    let error = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value && !isValidName(value)) {
          error = `${name === 'firstName' ? 'First' : 'Last'} name should contain only letters`;
        }
        break;
      case 'email':
        if (value && !isValidEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phoneNumber':
        if (value) {
          error = validatePhoneNumber(formData.phoneCode, value);
        }
        break;
      case 'phoneCode':
        if (formData.phoneNumber) {
          error = validatePhoneNumber(value, formData.phoneNumber);
        }
        break;
      case 'password':
        if (value) {
          const passwordErrors = validatePassword(value);
          if (passwordErrors.length > 0) {
            error = passwordErrors;
          }
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: '+91',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
      setSubmitted(false);
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
            placeholder="Enter your first name"
            autoComplete="given-name"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
            placeholder="Enter your last name"
            autoComplete="family-name"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="Enter your email address"
            autoComplete="email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="phone-group">
            <div className="phone-code-container">
              <select
                className="phone-code"
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
              >
                <option value="+1">+1</option>
                <option value="+91">+91</option>
                <option value="+44">+44 UK</option>
                <option value="+61">+61 AU</option>
                <option value="+86">+86 CN</option>
                <option value="+81">+81 JP</option>
                <option value="+49">+49 DE</option>
                <option value="+33">+33 FR</option>
                <option value="+7">+7 RU</option>
                <option value="+971">+971 UAE</option>
              </select>
            </div>
            <div className="phone-input">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                maxLength="10"
                autoComplete="tel"
              />
            </div>
          </div>
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create a password"
              autoComplete="new-password"
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          {errors.password && Array.isArray(errors.password) ? (
            <div className="password-requirements">
              {errors.password.map((error, index) => (
                <span key={index} className="error-message">{error}</span>
              ))}
            </div>
          ) : (
            errors.password && <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
            <i
              className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></i>
          </div>
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="create-account-btn">
          Create Account
        </button>

        <p className="sign-in-text">
          Already have an account?<Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration; 