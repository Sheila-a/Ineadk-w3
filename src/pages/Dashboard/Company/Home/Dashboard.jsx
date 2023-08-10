// Dashboard.js
import {
  useLocation,
  // useNavigate
} from 'react-router-dom';
import design from './dashboard2.module.css';
import MetaBtn from '../../../../components/Button/MetaBtn';
import Sidebar from '../../../../layout/Sidebar/Sidebar';
import DashCard from '../../../../components/DashCard/DashCard';
import dols from '../../../../assets/dollar.png';
import success from '../../../../assets/activity.png';
import rating from '../../../../assets/rating.png';
import project from '../../../../assets/project.png';
import client from '../../../../assets/client.png';
import Deadline from '../../../../components/Deadline/Deadline';

const Dashboard2 = () => {
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
          <div className={design.dash_intro}>
            <h3>Hello Deran</h3>
            <p>
              Welcome! Find everything you need to manage your freelance career
              and stay organized. Check out your latest projects, connect with
              clients, and keep track of your earnings all in one place. We're
              thrilled to have you on board. Let's make every gig a success
              together!
            </p>
            <MetaBtn content='New Proposal' />
          </div>
          <div className={design.dash_cards}>
            <DashCard
              value='Total earnings'
              title='USD'
              number='0'
              icons={dols}
              className={design.crd_1}
            />
            <DashCard
              value='Completed projects'
              title='Projects'
              number='0'
              icons={success}
              className={design.crd_1}
            />
            <DashCard
              value='Average ratings'
              title='Rating'
              number='0'
              icons={rating}
              className={design.crd_1}
            />
            <DashCard
              value='Ongoing projects'
              title='Projects'
              number='0'
              icons={project}
              className={design.crd_1}
            />
            <DashCard
              value='Total clients'
              title='Clients'
              number='0'
              icons={client}
              className={design.crd_1}
            />
          </div>
          <div className={design.dash_lower}>
            <Deadline />
            sfvsv
          </div>
          {/* <h1>Welcome to Your Dashboard</h1>
          <p>Your connected wallet address: {userAddress}</p>
          <MetaBtn
            content='Disconnect Wallet'
            //   onClick={handleDisconnectMetaMask}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
