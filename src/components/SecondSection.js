import React from 'react'
import WaitingSVG from '../media/WaitingSVG';
import DeliveryTruckSVG from '../media/DeliveryTruckSVG'
import SecureSVG from '../media/SecureSVG'
import MoneyBagsSVG from '../media/MoneyBagsSVG'
import imgFone from '../media/fone.png';
import imgTrack from '../media/track.png';

export default function SecondSection() {

  return (
    <section className='second-section' id='block1'>
      <div className='second-section__top-block' >
        <h1 className='second-section__top-block-title'>
          Как это работает
        </h1>
        <div className='second-section__top-block-container'>
          <div className='second-section__top-block-tile'>
            <WaitingSVG/>
            <h3>
              Прочитай задание внимательно
            </h3>
            <p>
              Думаю у тебя не займет это больше двух-трех минут
            </p>
          </div>
          <div className='second-section__top-block-tile'>
            <DeliveryTruckSVG/>
            <h3>
              Изучите весь макет заранее
            </h3>
            <p>
              Подумай как это будет работать на разных разрешениях и при скролле
            </p>
          </div>
          <div className='second-section__top-block-tile'>
            <SecureSVG/>
            <h3>
              Сделай хорошо
            </h3>
            <p>
              Чтобы мы могли тебе доверить подобные задачи в будущем
            </p>
          </div>
          <div className='second-section__top-block-tile'>
            <MoneyBagsSVG/>
            <h3>
              Получи предложение
            </h3>
            <p>
              Ну тут все просто, не я придумал правила, но думаю так и будет{')))'}
            </p>
          </div>
        </div>
      </div>
      <div className='second-section__bottom-block' id='block2'>
        <div className='second-section__bottom-block-text-container'>
          <h2>Круто, ты дошел до третьего блока</h2>
          <p>
            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p>
            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
          </p>
        </div>
        <div className='second-section__bottom-block-img-container'>
          <img 
            src={imgFone}
            className='second-section__bottom-block-fone'
          />
          <img 
            src={imgTrack} 
            className='second-section__bottom-block-track'
          />
        </div>
      </div>
    </section>
  );
};
