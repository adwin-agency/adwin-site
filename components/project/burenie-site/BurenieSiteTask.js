import cn from 'classnames'
import styles from './BurenieSiteTask.module.scss'

export default function BurenieSiteTask() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.main}>
          <div className={styles.top}>
            <p className={cn('quote-m', styles.type)}>Задачи проекта</p>
            <h2 className={cn('h2', styles.heading)}>А вот это уже задача</h2>
            <p className={cn('txt-m', styles.desc)}>Обновить структуру и дизайн корпоративного сайта. Ясно показать принципы работы и подход к делу, повысить вовлечённость пользователей.</p>
          </div>
          <div className={styles.step}>
            <p className={cn('quote-m', styles.stepTitle)}>Рассказать о компании</p>
            <p className={cn('txt-m', styles.stepDesc)}>компетенции, сотрудники, конкурентные преимущества</p>
            <p className={styles.stepNum}>1</p>
          </div>
          <div className={styles.step}>
            <p className={cn('quote-m', styles.stepTitle)}>Создать фокус</p>
            <p className={cn('txt-m', styles.stepDesc)}>Сфокусировать пользователя на целевое действие</p>
            <p className={styles.stepNum}>2</p>
          </div>
          <div className={styles.step}>
            <p className={cn('quote-m', styles.stepTitle)}>Рассказать об услугах</p>
            <p className={cn('txt-m', styles.stepDesc)}>Понятно и интересно объяснить суть, чем занимается компания</p>
            <p className={styles.stepNum}>3</p>
          </div>
          <div className={styles.step}>
            <p className={cn('quote-m', styles.stepTitle)}>Обосновать</p>
            <p className={cn('txt-m', styles.stepDesc)}>Рассказать, что включают в себя услуги и чем обоснована стоимость</p>
            <p className={styles.stepNum}>4</p>
          </div>
          <div className={cn(styles.step, styles.accent)}>
            <p className={cn('quote-m', styles.stepTitle)}>Запомниться</p>
            <p className={cn('txt-m', styles.stepDesc)}>Конечная цель не только продать продукт, но и запомниться потенциальному клиенту, чтобы он вспомнил о нас, когда появится необходимость.</p>
            <p className={styles.stepNum}>5</p>
          </div>
          <div className={styles.step}>
            <p className={cn('quote-m', styles.stepTitle)}>Подготовить к рекламе</p>
            <p className={cn('txt-m', styles.stepDesc)}>Подготовить ресурс для запуска эффективной рекламы</p>
            <p className={styles.stepNum}>6</p>
          </div>
        </div>
      </div>
    </section>
  )
}
