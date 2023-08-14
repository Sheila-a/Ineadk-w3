import DashNav from '../../../../components/DashNav/DashNav';
import ProfileCard from '../../../../components/ProfileCard/ProfileCard';
import ProfileContact from '../../../../components/ProfileContact/ProfileContact';
import ProfileData from '../../../../components/ProfileData/ProfileData';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import design from './profile.module.css';

const Profile = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='PROFILE' />
          <div className={design.Profile_inner}>
            <ProfileCard />
            <ProfileData />
            <ProfileContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
