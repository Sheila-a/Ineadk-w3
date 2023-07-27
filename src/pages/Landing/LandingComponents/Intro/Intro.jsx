import design from './intro.module.css';
import Star from '../../../../assets/star.png';
import Button from '../../../../components/Button/Button';

const Intro = () => {
  return (
    <div className={design.Intro}>
      <h1>
        THE WORLD OF{' '}
        <span style={{ marginLeft: '100px' }}>SUPER TALENTED </span>{' '}
        <span>
          {' '}
          <img src={Star} />
          FREELANCERS
        </span>
      </h1>
      <div>
        <p>
          Welcome to the realm of extraordinary and exceptionally talented
          freelancers! Discover the finest minds to empower your project. Step
          into the decentralized freelance marketplace, where innovation knows
          no bounds.
        </p>
        <Button
          content='Get Started'
          style={{ marginTop: '30px', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Intro;
