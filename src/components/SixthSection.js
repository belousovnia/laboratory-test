import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import yesSVG from '../media/yes.svg';
import noSVG from '../media/no.svg';

export default function SixthSection() {
  const [nameInput, setNameInput] = useState('');
  const [telInput, setTelInput] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [nameTest, setNameTest] = useState(false);
  const [telTest, setTelTest] = useState(false);

  const regName = new RegExp(/^([a-zа-яё]+)$/i)
  const regTel = new RegExp(/^(\d+)$/i)

  const buttonClass = classNames({
    'main-button': true,
    'main-button_off': testButton(),
  });

  function testButton() {
    if (
      nameTest &&
      telTest &&
      nameInput !== '' &&
      telInput !== ''
    ) {
      return false
    } else {
      return true
    };
  }

  const inputNameClass = classNames({
    'sixth-section__input-text': true,
    'sixth-section__input-text_on': nameInput !== '',
    'sixth-section__input-text_danger': !nameTest,
  });

  const labeNameClass = classNames({
    'sixth-section__input-label': true,
    'sixth-section__input-label_on': nameInput !== '',
  });

  const labeNameImgClass = classNames({
    'sixth-section__input-img-yes': true,
    'sixth-section__input-img-yes_off': !(nameInput !== '' && nameTest),
  });

  const labeNameImgNoClass = classNames({
    'sixth-section__input-img-yes': true,
    'sixth-section__input-img-yes_off': nameTest,
  });

  const hintNameClass = classNames({
    'sixth-section__input-hint': true, 
    'sixth-section__input-hint_off': nameTest && nameInput !== '',
    'sixth-section__input-hint_danger': !nameTest,
  });



  const inputTelClass = classNames({
    'sixth-section__input-text': true,
    'sixth-section__input-text_on': telInput !== '',
    'sixth-section__input-text_danger': !telTest,
  });

  const labeTelClass = classNames({
    'sixth-section__input-label': true,
    'sixth-section__input-label_on': telInput !== '',
  });

  const labeTelImgClass = classNames({
    'sixth-section__input-img-yes': true,
    'sixth-section__input-img-yes_off': !(telInput !== '' && telTest) ,
  });

  const labeTelImgNoClass = classNames({
    'sixth-section__input-img-yes': true,
    'sixth-section__input-img-yes_off': telTest,
  });

  const hintTelClass = classNames({
    'sixth-section__input-hint': true, 
    'sixth-section__input-hint_off': telTest && telInput !== '',
    'sixth-section__input-hint_danger': !telTest,
  });

  function checkInputName(name) {
    if (name === '') {
      return true;
    } else {
      return regName.test(name);
    }
  };
  
  function checkInputTel(tel) {
    if (tel === '') {
      return true;
    } else {
      if (tel.length === 11) {
        return regTel.test(tel);
      } else {
        return false;
      };
    };
  };

  useEffect(() => {
    setNameTest(checkInputName(nameInput));
  }, [nameInput]);

  useEffect(() => {
    setTelTest(checkInputTel(telInput));
  }, [telInput]);

  return (
    <section className='sixth-section'  id='block4'>
      <h2 className='sixth-section__h2'>
        Отправь форму
      </h2>
      <div className='sixth-section__container'>
        <div className='sixth-section__input-container'>
          <input 
            type="text"
            className={inputNameClass}
            value={nameInput}
            onChange={(i) => {setNameInput(i.target.value)}}
          />
          <p className={labeNameClass}>
            Имя
          </p>
          <img src={yesSVG} className={labeNameImgClass}/>
          <img src={noSVG} className={labeNameImgNoClass}/>
          <p className={hintNameClass}>Допускаются только буквы</p>
        </div>

        <div className='sixth-section__input-container'>
          <input 
            type="tel"
            className={inputTelClass}
            value={telInput}
            onChange={(i) => {setTelInput(i.target.value)}}
          />
          <p className={labeTelClass}>
            Телефон
          </p>
          <img src={yesSVG} className={labeTelImgClass}/>
          <img src={noSVG} className={labeTelImgNoClass}/>
          <p className={hintTelClass}>Номер должен состоять из 11 цифр</p>
        </div>
        
        <div className='sixth-section__container-checkbox'>
          <input 
            type="checkbox" 
            className="sixth-section__checkbox" 
            id="check" 
            name="check" 
            value="yes"
            checked={checkbox}
            onChange={(i) => {setCheckbox(i.target.checked)}}
          />
          <label 
            htmlFor="check"
            className='sixth-section__checkbox-label'
          >
            <svg
              width={16}
              height={12}
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.51041L5.4791 12L16 1.48947L14.4896 -9.53674e-05L5.4791 8.9999L1.48953 5.01036L0 6.51041Z"
                fill="white"
              />
            </svg>
          </label>
          <p className='sixth-section__checkbox-title'>
            Согласен, отказываюсь
          </p>
        </div>
        <button 
          className={buttonClass}
          onClick={() => {
            setNameInput('');
            setTelInput('');
            setCheckbox(false);
          }}
        >
          Отправить
        </button>
      </div>
    </section>
  )
}
