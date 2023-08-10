// import { useNavigate } from 'react-router-dom';
import design from './search.module.css';
import PropTypes from 'prop-types';

const SearchResultsRow = ({
  name,
  email,
  billing,
  number,
  img,
  onClick,
  role,
  companyName,
  companyEmail,
  jobTitle,
  duration,
  offering,
}) => {
  return (
    <div className={design.Search_row} onClick={onClick}>
      <img src={img} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{role}</p>
        <p>{number}</p>
        <p>${billing}</p>
        <p>{companyName}</p>
        <p>{companyEmail}</p>
        <p>{jobTitle}</p>
        <p>{duration}</p>
        <p>${offering}</p>
      </div>
    </div>
  );
};

SearchResultsRow.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  billing: PropTypes.string,
  number: PropTypes.object,
  img: PropTypes.object,
  role: PropTypes.object,
  companyName: PropTypes.object,
  companyEmail: PropTypes.object,
  jobTitle: PropTypes.object,
  duration: PropTypes.object,
  offering: PropTypes.object,
  onClick: PropTypes.func,
};

export default SearchResultsRow;
