import cn from 'classnames'
import Logo from '/icons/stepmetall/logo.svg'
import media from '/data/media'
import styles from './StepmetallAbout.module.scss'

export default function StepmetallAbout() {
  return (
    <section className={styles.el}>
      <div className={styles.top}>
        <picture>
          <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/about-bg-lg.png' />
          <img className={styles.topImage} src='/images/projects/stepmetall/about-bg.png' alt='' />
        </picture>
        <Logo className={styles.topLogo} />
      </div>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className={cn('h2', styles.title)}>О проекте</h2>
            </div>
            <div className='col col-6 col-lg-4'>
              <p className={styles.desc}>Сайт для компании, которая занимается оптовой и розничной продажей в Санкт-Петербурге. Клиент обратился с целью редизайна. Важной особенностью компании является то, что она занимается спец сталями. А это особенность в оформлении гос. заказов. </p>
              <div className={styles.tasks}>
                <div className='row'>
                  <div className='col col-2 col-lg-6'></div>
                  <div className='col col-4 col-lg-6'>
                    <h3 className={cn('h3', styles.title)}>Задачи</h3>
                    <ol className={styles.tasksList}>
                      <li className={styles.task}>
                        <p className={styles.taskNum}>1.</p>
                        <p className={styles.taskText}>Редизайнить сайт по полной. Поменять цвета, стили, полностью осовременить его, сделать стильным, но строгим.</p>
                      </li>
                      <li className={styles.task}>
                        <p className={styles.taskNum}>2.</p>
                        <p className={styles.taskText}>Сделать сложные функции простыми. Вывести достоинства компании на первый план.</p>
                      </li>
                      <li className={styles.task}>
                        <p className={styles.taskNum}>3.</p>
                        <p className={styles.taskText}>Клиент не хотел выводить цены и корзину. Но момент взаимодействия с пользователем все-таки продумать необходимо.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cjm}>
        <div className='container'>
          <div className={styles.cjmMain}>
            <h3 className={cn('h3', styles.title, styles.cjmTitle)}>CJM</h3>
            <p className={cn('quote', styles.cjmDesc)}>Один из самых важных этапов аналитики -CJM (Customer Journey Map). CJM - это путь пользователя клиента, который попадает на сайт.  Первый шаг - создание персоны пользователя. По заполненому брифу и информации от клиента, мы можем создать некоторый портрет потенциального клиента. Можно сделать несколько персон, если тема очень обширная.</p>
            <img className={styles.cjmImage} src='/images/projects/stepmetall/cjm-card.png' alt='' />
            <p className={cn('txt', styles.cjmNote)}>Для каждой персоны создаем отдельную карту пути пользователя (CJM), в которой отлично видно предпологаемое поведение клиента, его мысли, действия, барьеры, с которыми он может столкунуться и пути решения этих барьеров. Это помогает нам структурировать все мысли по новому сайту и приступить к графической реализации путей пользователя - прототипу</p>
          </div>
          <picture>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/cjm-table.png' />
            <img className={styles.cjmTable} src='/' alt='' />
          </picture>
        </div>
      </div>
      <div className={styles.design}>
        <div className={styles.designMain}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-4'>
                <h3 className={cn('h3', styles.title)}>Дизайн-концепт</h3>
                <p className={styles.designDesc}>Следующий шаг -  это концепция будущего сайта. После аналитики и карты пути пользователя можно уже предположить как будет выглядеть главная страница, какие пункты будут вынесенны на главное меню, а какие можно спрятать внутри бургера или создать отдельные страницы. Очень важно этот этап проговорить клиенту и показать то, как будет выглядеть сайт. Это уже не просто слова, а конкретная визуализация. Вкусовщина, цвета, фото здесь тоже играют важные роли.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.designBox}>
          <picture>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/design-lg.png' />
            <img className={styles.designImage} src='/images/projects/stepmetall/design.png' alt='' />
          </picture>
        </div>
      </div>
    </section>
  )
}
