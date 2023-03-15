import cn from 'classnames'
import RedBlur from '/icons/instep/red-blur.svg'
import VioletBlur from '/icons/instep/violet-blur.svg'
import VioletBlur2 from '/icons/instep/violet-blur-2.svg'
import GreenBlur from '/icons/instep/green-blur.svg'
import Arrow2 from '/icons/instep/arrow2.svg'
import Arrow3 from '/icons/instep/arrow3.svg'
import Star from '/icons/instep/star.svg'
import Smile from '/icons/instep/smile.svg'
import Talk from '/icons/instep/talk.svg'
import styles from './InstepRealise.module.scss'

export default function InstepRealise() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>Реализация</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.areas}>
              <RedBlur className={styles.areasBg} />
              <div className={cn(styles.area, styles.areaRight)}>
                <Arrow2 className={styles.areaArrow} />
                <p className={styles.areaTitle}>Ton of voice</p>
                <p className={styles.areaDesc}>Наполнение сайта, текст и коммуникация в целом на понятном и близком пользователю (читай, потенциальному покупателю) языке.</p>
              </div>
              <img className={styles.areasImage} src='/images/projects/instep/areas.svg' alt='' />
              <div className={cn(styles.area, styles.areaBottom)}>
                <Arrow3 className={styles.areaArrow} />
                <p className={styles.areaTitle}>User expirience</p>
                <p className={styles.areaDesc}>Продуманный интерфейс, позволяющий быстро ориентироваться в ресурсе, доступно демонстрирующий возможности компании, её конкурентные преимущества</p>
              </div>
            </div>
          </div>
          <div className='col col-6 col-lg-4'></div>
          <div className='col col-6 col-lg-2'>
            <div className={styles.strategy}>
              <h3 className='h3'>Стратегия</h3>
              <p className={cn('txt', styles.strategyText)}>В работе нам очень помогал основатель компании, он рассказывал о проблемах и страхах, с которыми сталкиваются ампутанты, это дало нам возможность глубоко проработать как повествование на сайте, так и сами тексты. Он же помог правильно сформировать CJM и проработать потребности ЦА. <br /><br />Новая стратегия строилась на двух основных требованиях: удобство пользования и убедительный, но при этом дружелюбный TOV. Он в этом проекте имел, наверное, первостепенное значение. Требовалось не только рассказать о компании и возможностях, но донести эту информацию понятно и деликатно. На этом этапе к ux-дизайнеру подключился копирайтер, проработавший тексты до мелочей на основе вводных и с учётом коррективов от клиента.</p>
            </div>
          </div>
          <div className='col col-6 col-lg-2'>
            <div className={styles.design}>
              <VioletBlur className={styles.designBlur} />
              <Star className={styles.designStar} />
              <Star className={styles.designStarSm} />
              <h3 className='h3'>Дизайн-концепция</h3>
              <p className={cn('txt', styles.designText)}>По просьбе клиента мы оставили форму лого неизменной, лишь немного “взбодрили” цвет. Это дало возможность расширить цветовую палитру для оформления социальных сетей.</p>
              <img className={styles.designImage} src="/images/projects/instep/design-box.png" alt="" />
              <p className='txt'>Позиционирование компании подразумевает не только индивидуальный подход, но и поддержку, обучение и очень сплочёное комьюнити. В концепции сайта это отражено с помощью использования графики, анимаций и светлой, но в тоже время яркой палитры.</p>
            </div>
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.designChange}>
              <GreenBlur className={styles.designChangeBlur} />
              <Star className={styles.designChangeStar} />
              <img className={styles.designChangeImage} src="/images/projects/instep/design-change.svg" alt="" />
            </div>
          </div>
          <div className='col col-6'>
            <img className={styles.styleImage} src="/images/projects/instep/style-box.png" alt="" />
            <img className={styles.styleImageLg} src="/images/projects/instep/style-scheme.png" alt="" />
          </div>
          <div className='col col-6 col-lg-2'>
            <VioletBlur2 className={styles.styleBlur} />
            <Smile className={styles.styleSmile} />
          </div>
          <div className='col col-6 col-lg-2'>
            <p className={cn('txt', styles.styleText)}>
              <Talk className={styles.styleTalk} />
              Основным стилеобразующим элементом является нарисованная от руки графика. Она задумывалась как продолжение позиционирования бренда: компания помогает клиентам преодолеть страшный этап в жизни и вернуться к привычной жизни, без ограничений.
            </p>
            <img className={styles.styleGraphic} src="/images/projects/instep/graphic-box.png" alt="" />
          </div>
          <div className='col col-6 col-lg-2'></div>
        </div>
      </div>
    </section>
  )
}
