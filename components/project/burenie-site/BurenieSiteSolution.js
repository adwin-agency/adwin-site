import cn from 'classnames'
import Geolines2 from '/icons/burenie-site/geolines-2.svg'
import Geolines3 from '/icons/burenie-site/geolines-3.svg'
import Sad from '/icons/burenie-site/sad.svg'
import Surprised from '/icons/burenie-site/surprised.svg'
import Happy from '/icons/burenie-site/happy.svg'
import styles from './BurenieSiteSolution.module.scss'

export default function BurenieSiteSolution() {
  return (
    <section className={styles.el}>
      <Geolines2 className={styles.linesDesktop} />
      <Geolines3 className={styles.linesMobile} />
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-3'>
            <p className={cn('quote-m', styles.type)}>Решение проблемы</p>
            <h3 className={cn('h3', styles.heading)}>Есть идея!</h3>
            <p className={cn('txt-quote-m', styles.desc)}>Бурение для большинства неспециалистов этой области ― это что-то очень грязное, очень дорогое и очень непонятное с припиской ГОСТ. <br /><br />Как избавиться от такой репутации? Правильно, <span>переключить фокус</span> внимания на столь желанный результат: чистая питьевая у вас дома, а все заботы по обустройству и организации мы, как высококвалифицированные исполнители, берём на себя. </p>
            <div className={styles.road}>
              <div className={styles.roadItem}>
                <div className={styles.roadTop}>
                  <div className={styles.roadSquare}>
                    <Sad className={styles.roadIcon} />
                  </div>
                </div>
                <div className={styles.roadInfo}>
                  <p className={cn('txt-m', styles.roadTitle)}>Ожидания до</p>
                  <p className={cn('extra-m', styles.roadDesc)}>страхи, неизвестность, непонимание процесса, негативный предыдущий опыт свой или соседа по даче</p>
                </div>
              </div>
              <div className={styles.roadItem}>
                <div className={styles.roadTop}>
                  <div className={styles.roadSquare}>
                    <Surprised className={styles.roadIcon} />
                  </div>
                </div>
                <div className={styles.roadInfo}>
                  <p className={cn('txt-m', styles.roadTitle)}>Во время</p>
                  <p className={cn('extra-m', styles.roadDesc)}>первые впечатления приятно резонируют с ожиданиями, оценка уровня сложности продукта</p>
                </div>
              </div>
              <div className={styles.roadItem}>
                <div className={styles.roadTop}>
                  <div className={cn(styles.roadSquare, styles.green)}>
                    <Happy className={styles.roadIcon} />
                  </div>
                </div>
                <div className={styles.roadInfo}>
                  <p className={cn('txt-m', styles.roadTitle)}>После</p>
                  <p className={cn('extra-m', styles.roadDesc)}>удовлетворённость и желание приобрести или поделиться информацией о продукте</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col col-6 col-lg-1'></div>
          <div className='col col-6 col-lg-2'>
            <div className={styles.accent}>
              <p className={styles.accentTitle}>Почему это должно сработать?</p>
              <p className={cn('txt-m', styles.accentDesc)}>Потому что мы изменяем <b>мотивацию на положительную</b>, а желание продаётся лучше, чем опасения. <br /><br />Ценность услуги строится на комфорте, с которым она оказывается, простоте для клиента и профессиональном исполнителе.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
