import { Link } from 'react-router-dom';
import design from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MetaBtn from '../../components/Button/MetaBtn';

const Login = () => {
  const navigate = useNavigate();
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  const handleConnectMetaMask = async () => {
    try {
      if (window.ethereum) {
        // Prompt the user to connect their wallet using the ethereum.request method
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // Check if the user approved the connection
        if (accounts.length > 0) {
          setIsMetaMaskInstalled(true);

          navigate(`/dashboard?address=${accounts[0]}`);
        } else {
          alert('Please connect MetaMask to continue.');
        }
      } else {
        alert('Please install MetaMask to continue.');
      }
    } catch (error) {
      alert('Error connecting to the Ethereum wallet');
    }
  };

  useEffect(() => {
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsMetaMaskInstalled(false);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
  }, []);

  return (
    <div className={design.login}>
      <div className={design.login_container}>
        <h1>
          GIG<span>Nexus</span>
        </h1>
        <p>Welcome back to GIGNexus!</p>
        <p className={design.first_p}>
          Connect with MetaMask to access your account securely and manage your
          freelance projects effortlessly.
        </p>
        <MetaBtn
          content='Connect with MetaMask'
          style={{ width: '100%', marginBottom: '20px' }}
          onClick={handleConnectMetaMask}
        />
        <div className={design.login_bottom}>
          <Link to='/'>Go back</Link>
          <p>
            {' '}
            New here? <Link to='/sign-up'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
