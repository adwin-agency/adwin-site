import cn from 'classnames'
import Logo from '/icons/stepmetall/logo.svg'
import media from '/data/media'
import styles from './StepmetallProto.module.scss'

export default function StepmetallProto() {
  return (
    <section className={styles.el}>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className={cn('h3', styles.heading)}>Прототип</h2>
            </div>
            <div className='col col-6 col-lg-4'>
              <p className={styles.desc}>После согласования концепции рождается прототип. Возвращаемся к CJM, аналитике, персоне пользователей и концепции и исходя из всех этих шагов продумываем расположение страниц, их количество и расположение на них элементов. На этом этапе рождаются новые идеи. Одной из самых важной была реализации корзины, не имея при этом цен и функций оформления заказа (по пожеланию клиента)</p>
            </div>
          </div>
          <picture>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/prototype-lg.png' />
            <img className={styles.image} src='/images/projects/stepmetall/prototype.png' alt='' />
          </picture>
        </div>
      </div>
      <div className={styles.note}>
        <p className={cn('quote', styles.noteText)}>Разработано более 15 страниц на этапе прототипа, продуманы все взаимодействия. Директологи оценили проект с точки зрения дальнейшей рекламы. <br /><br />Теперь можно смело приступать к дизайну</p>
      </div>
      <div className={styles.box}>
        <picture>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/prototype-bg.png' />
          <img className={styles.boxImage} src='/' alt='' />
        </picture>
        <Logo className={styles.boxLogo} />
      </div>
    </section>
  )
}
