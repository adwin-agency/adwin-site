import cn from 'classnames'
import projects from '/data/projects'
import styles from './BurenieIntro.module.scss'

export default function BurenieIntro() {
  const project = projects.find(item => item.id === 'burenie')
  const { tags, detailTitle, desc } = project

  return (
    <section className={styles.el}>
      <div className={styles.side}>
        <div className={styles.tags}>
          {tags.map(tag => (
            <div key={tag} className={styles.tag}>{tag}</div>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className='h1'>{detailTitle}</h1>
          <p className={cn('h3', styles.desc)}>{desc}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.group}>
            <p className='h3'>О проекте</p>
            <p className={cn('txt-quote-m', styles.text)}>Геосервис - компания, которая бурит артезианские скважины любой сложности в любых условиях. Была запущена реклама, были заказы на бурение. Но не было понятно, какие заказы привела реклама, а какие пришли с других источников.</p>
          </div>
          <div className={styles.group}>
            <p className='h3'>Задачи</p>
            <ol className={styles.list}>
              <li className={cn('txt-m', styles.listItem)}>
                <span className={styles.listNum}>1.</span>
                Связать расходы на рекламу и количество продаж.
              </li>
              <li className={cn('txt-m', styles.listItem)}>
                <span className={styles.listNum}>2.</span>
                Снизить стоимость привлечения нового клиента (далее - стоимость продажи).
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={cn('txt-quote-m', styles.feature)}>Сотрудничаем 5 лет</p>
          <p className={cn('txt-quote-m', styles.feature)}>Регион для продвижения - Ленинградская область</p>
        </div>
      </div>
    </section>
  )
}
