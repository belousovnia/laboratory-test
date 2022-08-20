import React, { useState, useEffect } from 'react'
import unknown from '../media/unknown.png'
import avatar from '../media/avatar.png'
import avatar2 from '../media/avatar2.png'
import classNames from 'classnames'

export default function ThirdSection() {
  const [count, setCount] = useState(1);
  const [listTile, setListTile] = useState([]);

  function setNewCount(newCount) {
    if (newCount > 5) {
      setCount(1);
    } else if (newCount < 1) {
      setCount(5)
    } else {
      setCount(newCount)
    };
  };

  function pasteRepeat() {
    const output = [];
    for (let i = 0; i < 5; i++) {
      output.push([
        <div className='third-section__tile' key={`tile-1-${i}`}>
          <div className='third-section__tile-header'>
            <img src={unknown}/>
            <div className='third-section__tile-header-container'>
              <h3>
                Константинов Михаил Павлович
              </h3>
              <p>
                Санкт-Петербург
              </p>
            </div>
          </div>
          <p className='third-section__tile-text'>
            Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы 
          </p>
        </div>,
        <div className='third-section__tile' key={`tile-2-${i}`}>
          <div className='third-section__tile-header'>
            <img src={avatar}/>
            <div className='third-section__tile-header-container'>
              <h3>
                Иван Иванов
              </h3>
              <p>
                Санкт-Петербург
              </p>
            </div>
          </div>
          <p className='third-section__tile-text'>
            Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.
          </p>
        </div>,
        <div className='third-section__tile' key={`tile-3-${i}`}>
          <div className='third-section__tile-header'>
            <img src={avatar2}/>
            <div className='third-section__tile-header-container'>
              <h3>
                Артем Корнилов
              </h3>
              <p>
                Самара
              </p>
            </div>
          </div>
          <p className='third-section__tile-text'>
            Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.
          </p>
        </div>,
      ]);
    };
    return setListTile(output);
  };

  const tapeClass = classNames({
    'third-section__tape': true,
    'third-section__tape_2': count === 2,
    'third-section__tape_3': count === 3,
    'third-section__tape_4': count === 4,
    'third-section__tape_5': count === 5,
  });

  let panel = null;
  let tipe = null;

  let x = null;
  let y = null;
  let newX = null;
  let newY = null;
  let started = false;
  let detecting = false;
  let delta = null;
  let touch = null;
  
  function handleTouchStart(e) {
    if (e.touches.length != 1 || started){
      return;
    }

    detecting = true;
    touch = e.changedTouches[0];
    
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  };  

  function handleTouchMove(e) {
    if (!started && !detecting){
      return;
    };

    let newX = e.touches[0].clientX;
    let newY = e.touches[0].clientY;

    if (detecting){
      detect();
    };

    if (started){
      draw();
    };

    function detect(){
      if (Math.abs(x - newX) >= Math.abs(y - newY)){
        e.preventDefault();
        e.stopPropagation();
        started = true;
      };

      detecting = false;
    };
    
    function draw(){
      e.preventDefault();
      e.stopPropagation();
      delta = x - newX;
      tipe.style.transform = `translate(${-delta}px, 0)`;
    };
  };
    
  function handleTouchend(e) {
    e.preventDefault();
    e.stopPropagation();

    let swipeTo = delta < 0 ? 'left' : 'right';

    tipe.style.removeProperty('transform');

    if (swipeTo === 'left') {
      if (count !== 1) {
        this.removeEventListener('touchstart', handleTouchStart, false);
        this.removeEventListener('touchmove', handleTouchMove, false);
        this.removeEventListener('touchend', handleTouchend, false);
        this.removeEventListener('touchcancel', handleTouchend, false);
        setNewCount(count - 1)
      };
    };

    if (swipeTo === 'right') {
      if (count !== 5) {
        this.removeEventListener('touchstart', handleTouchStart, false);
        this.removeEventListener('touchmove', handleTouchMove, false);
        this.removeEventListener('touchend', handleTouchend, false);
        this.removeEventListener('touchcancel', handleTouchend, false);
        setNewCount(count + 1)
      };
    };
  };

  useEffect(() => {
    const button = document.getElementById(`radio-button-${count}`);
    button.checked = true;
  },[count]);

  useEffect(() => {
    pasteRepeat();
  }, []);

  useEffect(() => {
    panel = document.getElementById('panel');
    tipe = document.getElementById('tipe'); 

    panel.addEventListener('touchstart', handleTouchStart, false);
    panel.addEventListener('touchmove', handleTouchMove, false);
    panel.addEventListener('touchend', handleTouchend, false);
    panel.addEventListener('touchcancel', handleTouchend, false);
  }, [count]);

  return (
    <section className='third-section'>
      <h2 className='third-section__h2'>
        Отзывы
      </h2>
      <div className='third-section__container'>
        <button 
          className='third-section__button third-section__button-left'
          onClick={() => setNewCount(count - 1)}
        >
          <svg
            width={16}
            height={32}
            viewBox="0 0 16 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
              fill="#C2C8CD"
            />
          </svg>
        </button>
        <div 
          className='third-section__panel'
          id='panel'
        >
          <div className={tapeClass} id='tipe'>
            {listTile}
          </div>
        </div>
        <button 
          className='third-section__button third-section__button-right'
          onClick={() => setNewCount(count + 1)}
        >
          {  <svg
            width={16}
            height={32}
            viewBox="0 0 16 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
              fill="#C2C8CD"
            />
          </svg>}
        </button>
      </div>
      <div className='third-section__button-container'> 
        <input 
          type='radio' 
          id='radio-button-1' 
          className='third-section__radio-button'
          name='slider'
          defaultChecked
        />
        <label  
          className='third-section__radio-label' 
          htmlFor='radio-button-1'
          onClick={() => setNewCount(1)}
        />
        
        <input 
          type='radio' 
          id='radio-button-2' 
          className='third-section__radio-button'
          name='slider'
        />
        <label  
          className='third-section__radio-label' 
          htmlFor='radio-button-2'
          onClick={() => setNewCount(2)}
        />
          
        <input 
          type='radio' 
          id='radio-button-3' 
          className='third-section__radio-button'
          name='slider'
        />
        <label 
          className='third-section__radio-label' 
          htmlFor='radio-button-3'
          onClick={() => setNewCount(3)}
        />
          
        <input 
          type='radio' 
          id='radio-button-4' 
          className='third-section__radio-button'
          name='slider'
        />
        <label  
          className='third-section__radio-label' 
          htmlFor='radio-button-4'
          onClick={() => setNewCount(4)}
        />

        <input 
          type='radio' 
          id='radio-button-5' 
          className='third-section__radio-button'
          name='slider'
        />
        <label  
          className='third-section__radio-label' 
          htmlFor='radio-button-5'
          onClick={() => setNewCount(5)}
        />
      </div>
    </section>
  )
};
