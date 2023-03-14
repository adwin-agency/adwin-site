import cn from 'classnames'
import TasksIcon from '/icons/instep/tasks.svg'
import HashtagIcon from '/icons/instep/hashtag.svg'
import styles from './InstepTasks.module.scss'

export default function InstepTasks() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <h2 className={cn('h2', styles.heading)}>
              Задачи проекта
              <TasksIcon className={styles.headingIcon} />
            </h2>
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.items}>
              <div className={styles.item}>
                <HashtagIcon className={styles.itemIcon} />
                <p className={styles.text}><b>Быстро разработать новую посадочную страницу</b> для компании InStep с учётом планируемой в дальнейшем рекламы.</p>
              </div>
              <div className={styles.item}>
                <HashtagIcon className={styles.itemIcon} />
                <p className={styles.text}><b>Доступным и понятным языком объяснить суть</b> рабочего процесса и подход компании, а также рассказать о преимуществах сотрудничества.</p>
              </div>
              <div className={styles.item}>
                <HashtagIcon className={styles.itemIcon} />
                <p className={styles.text}>Лендинг станет одним из нескольких каналов взаимодействия поэтому должен быть <b>выдержан в общей дизайн системе</b>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shape}></div>
    </section>
  )
}
