import cn from 'classnames'
import ShapeArrow from '/icons/instep/shape-arrow.svg'
import ListStar from '/icons/instep/list-star.svg'
import DescLight from '/icons/instep/desc-light.svg'
import DescLight2 from '/icons/instep/desc-light-2.svg'
import DescArrow from '/icons/instep/desc-arrow.svg'
import DescArrow2 from '/icons/instep/desc-arrow-2.svg'
import DescBracket from '/icons/instep/desc-bracket.svg'
import DescBracket2 from '/icons/instep/desc-bracket-2.svg'
import GreenBlur2 from '/icons/instep/green-blur-2.svg'
import media from '../../../data/media'
import styles from './InstepParts.module.scss'

export default function InstepParts() {
  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <div className='container'>
          <h2 className={styles.heading}>
            <ShapeArrow className={styles.headingIcon} />
            В лендинге присутствуют три основные смысловые части:
          </h2>
          <ul className={styles.topList}>
            <li className={styles.topListItem}>
              <ListStar className={styles.topListIcon} />
              рассказ конкурентных преимуществах компании
            </li>
            <li className={styles.topListItem}>
              <ListStar className={styles.topListIcon} />
              описание возможностей
            </li>
            <li className={styles.topListItem}>
              <ListStar className={styles.topListIcon} />
              человеческая составляющая (команда и&nbsp;комьюнити)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <div className={cn(styles.desc, styles.advantages)}>
                <p className={styles.descText}>
                  <DescLight className={styles.descLight} />
                  Преимущества вынесены крупными блоками, сопровождаются уникальными изображениями, подробным описанием и графикой
                  <DescArrow className={styles.descArrow} />
                </p>
                <DescBracket className={styles.descBracket} />
                <picture>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/' />
                  <img className={styles.descImage} src='/images/projects/instep/desc-advantages.png' alt='' />
                </picture>
              </div>
              <div className={cn(styles.desc, styles.services)}>
                <p className={styles.descText}>
                  <DescLight className={styles.descLight} />
                  Возможностям компании посвящён компактный, но информативный блок о разновидностях протезов, их функционале и особенностях. Всё это можно изучить во всплывающем по клику поп-апе
                  <DescArrow2 className={styles.descArrow} />
                </p>
                <DescBracket2 className={styles.descBracket} />
                <picture>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/' />
                  <img className={styles.descImage} src='/images/projects/instep/desc-services.png' alt='' />
                </picture>
              </div>
            </div>
            <div className='col col-6 col-lg-4'>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desktop.png' />
                <img className={cn(styles.mainImage, styles.mainImageTop)} src='/' alt='' />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <picture>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desc-modal-lg.png' />
          <img className={styles.innerImage} src='/images/projects/instep/desc-modal.png' alt='' />
        </picture>
      </div>
      <div className={cn(styles.main, styles.mainBottom)}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desc-mobile-start-lg.png' />
                <img className={styles.descMobStart} src='/images/projects/instep/desc-mobile-start.png' alt='' />
              </picture>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desc-mobile-request-lg.png' />
                <img className={styles.descMobRequest} src='/images/projects/instep/desc-mobile-request.png' alt='' />
              </picture>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desc-mobile-help-lg.png' />
                <img className={styles.descMobHelp} src='/images/projects/instep/desc-mobile-help.png' alt='' />
              </picture>
              <div className={styles.setting}>
                <p className={cn('h3', styles.settingTitle)}>
                  Настройка
                  <DescLight2 className={styles.settingIcon} />
                </p>
                <p className={styles.settingDesc}>Сайт сверстан по «классике» без использования фреймвоков, это позволяет ему спокойно продвигаться по SEO, в гугле и яндексе, сайт адаптирован под все популярные разрешения. <br /><br />В качестве CMS системы был выбрана Bitrix, это позволяет клиенту самому менять контент на сайте, без запроса к программистам.</p>
              </div>
            </div>
            <div className='col col-6 col-lg-4'>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/instep/desktop-2.png' />
                <img className={styles.mainImage} src='/' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <GreenBlur2 className={styles.mainBlur} />
      </div>
    </section>
  )
}
