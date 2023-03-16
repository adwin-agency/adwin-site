import ShapeArrow from '/icons/instep/shape-arrow.svg'
import ListStar from '/icons/instep/list-star.svg'
import DescLight from '/icons/instep/desc-light.svg'
import DescLight2 from '/icons/instep/desc-light-2.svg'
import DescArrow from '/icons/instep/desc-arrow.svg'
import DescArrow2 from '/icons/instep/desc-arrow-2.svg'
import DescBracket from '/icons/instep/desc-bracket.svg'
import DescBracket2 from '/icons/instep/desc-bracket-2.svg'
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
              человеческая составляющая (команда и комьюнити)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <div className={styles.desc}>
                <p className={styles.descText}>
                  <DescLight className={styles.descLight} />
                  Преимущества вынесены крупными блоками, сопровождаются уникальными изображениями, подробным описанием и графикой
                  <DescArrow className={styles.descArrow} />
                </p>
                <DescBracket className={styles.descBracket} />
                <img className={styles.descImage} src='/images/projects/instep/desc-advantages.png' alt='' />
              </div>
              <div className={styles.desc}>
                <p className={styles.descText}>
                  <DescLight className={styles.descLight} />
                  Возможностям компании посвящён компактный, но информативный блок о разновидностях протезов, их функционале и особенностях. Всё это можно изучить во всплывающем по клику поп-апе
                  <DescArrow2 className={styles.descArrow} />
                </p>
                <DescBracket2 className={styles.descBracket} />
                <img className={styles.descImage} src='/images/projects/instep/desc-services.png' alt='' />
              </div>
            </div>
            <div className='col col-6 col-lg-4'>
              <img className={styles.mainImage} src='/images/projects/instep/desktop.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <img className={styles.innerImage} src='/images/projects/instep/desc-modal.png' alt='' />
      </div>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <img className={styles.descMobileImage} src='/images/projects/instep/desc-mobile-start.png' alt='' />
              <img className={styles.descMobileImage} src='/images/projects/instep/desc-mobile-request.png' alt='' />
              <img className={styles.descMobileImage} src='/images/projects/instep/desc-mobile-help.png' alt='' />
              <div className={styles.setting}>
                <p className={styles.settingTitle}>
                  Настройка
                  <DescLight2 className={styles.settingIcon} />
                </p>
                <p className={styles.settingDesc}>Сайт сверстан по «классике» без использования фреймвоков, это позволяет ему спокойно продвигаться по SEO, в гугле и яндексе, сайт адаптирован под все популярные разрешения. <br /><br />В качестве CMS системы был выбрана Bitrix, это позволяет клиенту самому менять контент на сайте, без запроса к программистам.</p>
              </div>
            </div>
            <div className='col col-6 col-lg-4'>
              <img className={styles.mainImage} src='/images/projects/instep/desktop-2.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
