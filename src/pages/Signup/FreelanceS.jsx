// import { checkMetaMaskAvailability } from '../../util/metamask';

// const Signup = () => {
//   const handleSignup = async () => {
//     const isMetaMaskInstalled = await checkMetaMaskAvailability();
//     if (isMetaMaskInstalled) {
//       // Connect to the user's Ethereum wallet and perform signup logic
//       // Example: Use ethers.js or web3.js to interact with Ethereum
//     } else {
//       alert('Please install MetaMask to continue.');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       {/* Your signup form here */}
//       <button onClick={handleSignup}>Signup with MetaMask</button>
//     </div>
//   );
// };

// export default Signup;

// FreelancerSignUp.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

import design from './signup.module.css';

const FreelancerSignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Perform validation on inputs and API call to register the freelancer
    // ...

    // After successful registration, redirect to the dashboard or another relevant page
    navigate('/dashboard');
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
