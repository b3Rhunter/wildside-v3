import React from 'react';
import { useMediaQuery } from 'react-responsive';
import mainImg from './images/character2.png';
import logo from './images/oldLogo.jpg';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="App">
      {isDesktop &&
        <div>
          <div>
            <nav>
              <div className='appointments'></div>
              <div className='shopping'></div>
              <div className='contact'></div>
            </nav>
          </div>
          <div>
            <img className='mainImg' src={mainImg} alt='The Wild Side' />
          </div>
          <div>
            <img className='logo' src={logo} alt='logo' />
          </div>
        </div>
      }

      {isTablet &&
        <div>
          <div>
            <nav>
              <div className='appointments'></div>
              <div className='shopping'></div>
              <div className='contact'></div>
            </nav>
          </div>
          <div>
            <img className='mainImg' src={mainImg} alt='The Wild Side' />
          </div>
          <div>
            <img className='logo' src={logo} alt='logo' />
          </div>
        </div>
      }

      {isMobile &&
        <div>
          <div>
            <nav>
              <div className='appointments'></div>
              <div className='shopping'></div>
              <div className='contact'></div>
            </nav>
          </div>
          <div>
            <img className='mainImg' src={mainImg} alt='The Wild Side' />
          </div>
          <div>
            <img className='logo' src={logo} alt='logo' />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
