import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import design from './login.module.css';

const Login = () => {
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
        <Button
          content='Connect with MetaMask'
          style={{ width: '100%', marginBottom: '20px' }}
        />
        <p>
          {' '}
          New here? <Link to='/sign-up'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
