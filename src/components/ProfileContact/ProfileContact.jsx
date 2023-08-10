import design from './profileContact.module.css';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const ProfileContact = () => {
  const ContactCard = ({ ico, title, details, link, linkRoute }) => {
    return (
      <div className={design.ContactCard}>
        <div className={design.ContactCard_ico_cont}>
          <span>{ico}</span>
        </div>
        <div>
          <p className={design.ContactCard_less}>{title}</p>
          <p>{details}</p>
          <Link to={link} target='blank'>
            {linkRoute}
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className={design.ProfileContact}>
      <h3>CONTACT</h3>
      <div className={design.ProfileContact_inner}>
        <ContactCard
          ico={<PhoneIphoneOutlinedIcon />}
          title='Mobile'
          details='+245 354 654'
        />
        <ContactCard
          ico={<MailOutlinedIcon />}
          title='Email'
          details='hjkuhigye@gmail.com'
        />
        <ContactCard
          ico={<MyLocationOutlinedIcon />}
          details='Enugu, Nigeria'
          title='Current Address'
        />
      </div>
      <h3>SOCIAL</h3>
      <div className={design.ProfileContact_inner2}>
        <ContactCard
          ico={<GitHubIcon />}
          linkRoute='github.com/Sheila-a/'
          title='Github'
          link='https://github.com/Sheila-a/'
        />
        <ContactCard
          ico={<TwitterIcon />}
          title='Twitter'
          link='https://twitter.com/__am_a_n_da___'
          linkRoute='twitter.com/_amanda'
        />
        <ContactCard
          ico={<LinkedInIcon />}
          title='LinkedIn'
          link='https://www.linkedin.com/in/chioma-ugwuodo-940900217/'
          linkRoute=' linkedin.com/in/chioma-ugwuodo '
        />
        <ContactCard
          ico={<InsertLinkOutlinedIcon />}
          title='Portfolio'
          link='https://chioma-ugwuodo.netlify.app/'
          linkRoute=' chioma-ugwuodo.netlify.app/'
        />
      </div>
    </div>
  );
};

export default ProfileContact;
