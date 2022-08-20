import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [ sidebarOff, setSidebarOff ] = useState(true);

  const [ block1, setBlock1 ] = useState();
  const [ block2, setBlock2 ] = useState();
  const [ block3, setBlock3 ] = useState();
  const [ block4, setBlock4 ] = useState();

  useEffect(() => {
    setBlock1(document.getElementById('block1'));
    setBlock2(document.getElementById('block2'));
    setBlock3(document.getElementById('block3'));
    setBlock4(document.getElementById('block4'));
  }, []);

  const setting = {
    behavior: 'smooth',
  };
 
  const arrow = (
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.400124 12.293C0.212616 12.4807 0.107328 12.7351 0.107422 13.0004C0.107516 13.2657 0.212984 13.52 0.400624 13.7075C0.588265 13.895 0.842708 14.0003 1.10798 14.0002C1.37325 14.0001 1.62762 13.8947 1.81512 13.707L6.40012 9.12104C6.96254 8.55845 7.27848 7.79553 7.27848 7.00004C7.27848 6.20454 6.96254 5.44162 6.40012 4.87904L1.81112 0.293037C1.62072 0.120876 1.3714 0.0285305 1.11478 0.0351199C0.858167 0.0417093 0.613915 0.146729 0.432594 0.328435C0.251274 0.510141 0.146773 0.754617 0.140729 1.01124C0.134685 1.26787 0.227559 1.517 0.400124 1.70704L4.98612 6.29304C5.17359 6.48056 5.27891 6.73487 5.27891 7.00004C5.27891 7.2652 5.17359 7.51951 4.98612 7.70704L0.400124 12.293Z"
        fill="#83898F"
      />
    </svg>
  );

  const classSidebar = classNames({
    'sidebar': true,
    'sidebar_off': sidebarOff,
  });

  return (
    <header className='header'>
      <Logo/>
      <nav className='header__nav'>
        <a 
          className='header__link'
          onClick={() => {
            block1.scrollIntoView(setting)
          }}
        >
          Как это работает
        </a>
        <a 
          className='header__link'
          onClick={() => {
            block2.scrollIntoView(setting)
          }}
        >
          3-й блок
        </a>
        <a className='header__link'
          onClick={() => {
            block3.scrollIntoView(setting)
          }}
        >
          Вопросы и ответы 
        </a>
        <a 
          className='header__link'
          onClick={() => {
            block4.scrollIntoView(setting)
          }}
        >
          Форма
        </a>
      </nav>
      <button 
        className='burger-button'
        onClick={() => setSidebarOff(false)}
      >
        <svg
          viewBox="0 0 22 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={22} height={2} fill="white" />
        </svg>
        <svg
          viewBox="0 0 22 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={22} height={2} fill="white" />
        </svg>
      </button>
      <div className={classSidebar}>
        <div className='sidebar-header'>
          <Logo/>
          <button 
            className='cross-button'
            onClick={() => setSidebarOff(true)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              className='cross-button__cross'
            >
              <polygon
                fill="var(--ci-primary-color, currentColor)"
                points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"
                className="ci-primary"
              />
            </svg>
          </button>
        </div>
        <nav className='sidebar-header__nav'>
          <a 
            className='sidebar-header__link'    
            onClick={() => {
              block1.scrollIntoView(setting);
              setSidebarOff(true);
            }}
          >
            Как это работает
            {arrow}
          </a>
          <a 
            className='sidebar-header__link'    
            onClick={() => {
              block2.scrollIntoView(setting);
              setSidebarOff(true);
            }}
          >
            3-й блок
            {arrow}
          </a>
          <a 
            className='sidebar-header__link'    
            onClick={() => {
              block3.scrollIntoView(setting);
              setSidebarOff(true);
            }}
          >
            Вопросы и ответы 
            {arrow}
          </a>
          <a 
            className='sidebar-header__link'    
            onClick={() => {
              block4.scrollIntoView(setting);
              setSidebarOff(true);
            }}
          >
            Форма
            {arrow}
          </a>
        </nav>
      </div>
    </header>
  );
};