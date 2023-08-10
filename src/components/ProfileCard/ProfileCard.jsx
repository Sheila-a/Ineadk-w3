import design from './profileCard.module.css';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const ProfileCard = () => {
  const isSmallView = window.innerWidth <= 725;
  return (
    <div className={design.ProfileCard}>
      <img src='https://randomuser.me/api/portraits/women/56.jpg' />
      <div>
        <h2>Sonya Sesychelle</h2>
        <div className={design.ProfileCard_upper}>
          <div className={design.ProfileCard_upper_inner}>
            <WorkOutlineOutlinedIcon
              style={{ fontSize: '16px', marginRight: '7px' }}
            />
            <p>Ui/Ux Developer</p>
          </div>
          <div className={design.ProfileCard_upper_inner}>
            <LocationOnOutlinedIcon
              style={{
                fontSize: '16px',
                marginRight: '5px',
                marginLeft: isSmallView ? '10px' : '0',
              }}
            />
            <p>Enugu, Nigeria</p>
          </div>
        </div>
        <div>
          <div className={design.ProfileCard_lower_inner}>
            <LocalPhoneOutlinedIcon style={{ marginRight: '7px' }} />{' '}
            <p>
              <span>Phone:</span>+235-903-875-7654
            </p>
          </div>
          <div className={design.ProfileCard_lower_inner}>
            <MailOutlinedIcon style={{ marginRight: '7px' }} />
            <p>
              <span>Email:</span>hjkuhigye@gmail.com
            </p>
          </div>
          <div className={design.ProfileCard_lower_inner}>
            <LanguageOutlinedIcon style={{ marginRight: '7px' }} />
            <p>
              <span>Website:</span>sesychelle.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
