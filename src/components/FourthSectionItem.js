import classNames from 'classnames';
import React, { useState } from 'react'
import plus from '../media/plus.svg'

export default function FourthSectionItem(props) {
  const [open, setOpen] = useState(false);

  const imgClass = classNames({
    'fourth-section__item-button-img': true,
    'fourth-section__item-button-img_on': open,
  });
  const contentClass = classNames({
    'fourth-section__item-content': true,
    'fourth-section__item-content_on': open,
  });

  return (
    <div className='fourth-section__item'>
      <div 
        className='fourth-section__item-header'
        onClick={() => setOpen(!open)}
      >
        <h3 className='fourth-section__item-h3'>
          {props.header}
        </h3>
        <button 
          className='fourth-section__item-button'
        > 
          <svg
            className={imgClass}
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0006 5H7.00038V1C7.00038 0.734784 6.89501 0.48043 6.70747 0.292893C6.51992 0.105357 6.26555 0 6.00032 0C5.73509 0 5.48073 0.105357 5.29318 0.292893C5.10563 0.48043 5.00027 0.734784 5.00027 1V5H1.00005C0.734823 5 0.480456 5.10536 0.292909 5.29289C0.105363 5.48043 0 5.73478 0 6C0 6.26522 0.105363 6.51957 0.292909 6.70711C0.480456 6.89464 0.734823 7 1.00005 7H5.00027V11C5.00027 11.2652 5.10563 11.5196 5.29318 11.7071C5.48073 11.8946 5.73509 12 6.00032 12C6.26555 12 6.51992 11.8946 6.70747 11.7071C6.89501 11.5196 7.00038 11.2652 7.00038 11V7H11.0006C11.2658 7 11.5202 6.89464 11.7077 6.70711C11.8953 6.51957 12.0006 6.26522 12.0006 6C12.0006 5.73478 11.8953 5.48043 11.7077 5.29289C11.5202 5.10536 11.2658 5 11.0006 5Z"
              fill="#191C1F"
            />
          </svg>
        </button>
      </div>
      <div className={contentClass}>
        {props.text}  
        <div className='fourth-section__item-content-padding'/>
      </div>
    </div>
  );
};
