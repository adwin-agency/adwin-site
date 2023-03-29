import cn from 'classnames'
import PlusMin from '/icons/burenie-site/plus-min.svg'
import styles from './BurenieSiteStages.module.scss'

export default function BurenieSiteStages() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <div className={styles.top}>
              <p className={cn('quote-m', styles.type)}>Этапы разработки</p>
              <h2 className={cn('h2', styles.heading)}>План действий</h2>
            </div>
          </div>
          <div className='col col-6 col-lg-3'>
            <p className={cn('txt-m', styles.desc)}>Как подступиться к такой фундаментальной задаче? Как рассказать всё важное, но доступно? Как выгодно отстроиться от конкурентов? И, наконец, как переосмыслить длинные технические тексты и не сойти с ума? <br /><br />Всё просто: глубокий успокаивающий вдох, чашечка свежезаваренного кофе и грамотное планирование. Давайте будем двигаться шаг за шагом...</p>
          </div>
          <div className='col col-6 col-lg-1'>
            <PlusMin className={styles.icon} />
          </div>
          <div className='col col-6 col-lg-2'></div>
          <div className='col col-6 col-lg-4'>
            <ol className={cn('txt-m', styles.list)}>
              <li className={styles.listItem}>1.&nbsp;Аналитика</li>
              <li className={styles.listItem}>2.&nbsp;Прототипирование</li>
              <li className={styles.listItem}>3.&nbsp;Визуализация</li>
              <li className={styles.listItem}>4.&nbsp;Вёрстка и настройка</li>
              <li className={styles.listItem}>5.&nbsp;Запуск и корректировки</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
