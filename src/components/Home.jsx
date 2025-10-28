import logo from '../assets/images/deco-logo.svg';
import logoDecoration from '../assets/images/deco-logo-group.svg';
import featureInterfaceDesignText from '../assets/images/feature-interface-design-text.svg';
import featureSoftwareDevelopmentText from '../assets/images/feature-software-development-text.svg';
import '../assets/css/global.css';
import { useEffect, useState } from 'react';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="section"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <div style={{ position: 'relative', width: 'fit-content' }}>
        <img style={{ width: '30vw' }} src={logo} alt="logo" />
        <img
          src={logoDecoration}
          alt="logo decoration"
          style={{
            width: '20vw',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'max-width .5s, margin-top .5s, opacity .5s',
          }}
        />
        <img
          src={featureInterfaceDesignText}
          alt="interface design"
          style={{
            width: '20vw',
            position: 'absolute',
            top: windowWidth < 768 ? '-30%' : '-20%',
            right: windowWidth < 768 ? '-40%' : '-40%',
            display: windowWidth < 480 ? 'none' : 'block',
          }}
        />
        <img
          src={featureSoftwareDevelopmentText}
          alt="software development"
          style={{
            width: '20vw',
            position: 'absolute',
            bottom: windowWidth < 768 ? '-20%' : '-15%',
            left: windowWidth < 768 ? '-50%' : '-30%',
            display: windowWidth < 480 ? 'none' : 'block',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
