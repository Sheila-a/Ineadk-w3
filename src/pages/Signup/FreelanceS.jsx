import { useState } from 'react';
import { useRole } from '../../context/RoleContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

import design from './signup.module.css';

const FreelancerSignUp = () => {
  const { role } = useRole();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Perform validation on inputs and API call to register the freelancer
    // ...

    // After successful registration, redirect to the dashboard or another relevant page
    navigate(`/${role}dashboard`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={design.signup}>
      <div className={design.freelancerSignUp}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <div className={design.form}>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Full Name'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <Button
            content='Sign Up'
            onClick={handleSignUp}
            style={{ marginBottom: '50px' }}
          />
        </div>
        <Link onClick={handleGoBack}>Go back</Link>
      </div>
    </div>
  );
};

export default FreelancerSignUp;
