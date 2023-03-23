import cn from 'classnames'
import styles from './FitnotecaAbout.module.scss'

export default function FitnotecaAbout() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className='h2'>О проекте</h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <p className={cn('quote-m', styles.desc)}>Fitnoteca - фитнес-студия в Санкт-Петербурге. <br /><br />Работа с аудиториями и интересами пользователей приносит хорошие результаты, если сегментировать и проводить А/В-тестирование каждого эксперимента. <br /><br />В данном кейсе расскажем, как работа с обучаемыми сегментами Я.Аудиторий помогла увеличить число новых клиентов на 13% и снизить стоимость конверсии на 50%.</p>
            <div className={styles.divider}></div>
            <div className={styles.tasks}>
              <p className={cn('h3', styles.title)}>Задачи</p>
              <ul className={styles.taskList}>
                <li className={styles.taskItem}>
                  <p className={styles.taskNum}>+10%</p>
                  <p className={styles.taskText}>увеличение потока новых клиентов</p>
                </li>
                <li className={styles.taskItem}>
                  <p className={styles.taskNum}>+20%</p>
                  <p className={styles.taskText}>увеличение конверсии</p>
                </li>
                <li className={styles.taskItem}>
                  <p className={styles.taskNum}>-25%</p>
                  <p className={styles.taskText}>снижение стоимости заявки</p>
                </li>
              </ul>
            </div>
            <div className={styles.solutions}>
              <p className={cn('h3', styles.title)}>Решение</p>
              <ul className={styles.solutionList}>
                <li className={styles.solutionItem}>Выделить 2 сегмента аудитории - горячая и холодная</li>
                <li className={styles.solutionItem}>Создать анонимизированный сегмент</li>
                <li className={styles.solutionItem}>Создать аудиторий на основе интересов и категорий Я.Метрики</li>
                <li className={styles.solutionItem}>Создать Look-a-like аудитории</li>
                <li className={styles.solutionItem}>Провести А/В тестирование сегментов аудиторий через Я.Эксперименты</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
