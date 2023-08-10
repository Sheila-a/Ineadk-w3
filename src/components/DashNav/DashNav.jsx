import design from './dashNav.module.css';

const DashNav = ({ title, name }) => {
  return (
    <div className={design.DashNav}>
      <div className={design.DashNav_inner}>
        <h1>{title}</h1>
        <div>
          <img src='https://randomuser.me/api/portraits/women/76.jpg' />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
