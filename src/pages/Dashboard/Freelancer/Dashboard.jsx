// Dashboard.js
import {
  useLocation,
  // useNavigate
} from 'react-router-dom';
import design from './dashboard.module.css';
import MetaBtn from '../../../components/Button/MetaBtn';
import Sidebar from '../../../layout/Sidebar/Sidebar';

const Dashboard = () => {
  //   const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userAddress = queryParams.get('address');

  //   const handleDisconnectMetaMask = async () => {
  //     try {
  //       if (window.ethereum) {
  //         await window.ethereum.request({
  //           method: 'wallet_requestPermissions',
  //           params: [{ eth_accounts: {} }],
  //         });
  //         const permissions = await window.ethereum.request({
  //           method: 'wallet_getPermissions',
  //         });

  //         if (
  //           permissions.find(
  //             (permission) => permission.parentCapability === 'eth_accounts'
  //           )
  //         ) {
  //           await window.ethereum.request({
  //             method: 'wallet_removePermissions',
  //             params: [{ eth_accounts: {} }],
  //           });
  //           navigate('/login');
  //         }
  //       }
  //     } catch (error) {
  //       alert('Error disconnecting from the Ethereum wallet');
  //     }
  //   };

  return (
    <div className={design.dashboard}>
      <div className={design.dashboard_body}>
        <Sidebar />
        <div className={design.dashboard_main}>
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
          <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
