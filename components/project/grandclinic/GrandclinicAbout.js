import cn from 'classnames'
import media from '/data/media'
import styles from './GrandclinicAbout.module.scss'

export default function GrandclinicAbout() {
  return (
    <section className={styles.el}>
      <div className="container">
        <div className="row">
          <div className="col col-6 col-lg-2">
            <h2 className='h2'>О проекте</h2>
          </div>
          <div className="col col-6 col-lg-3">
            <p className={cn('quote-m', styles.desc)}>Grand Clinic - клиника превентивной медицины на основе адаптационных технологий. <br /><br />Главная задача врачей клиники - активировать внутренние ресурсы организма и продлить здоровое долголетие пациентов. Все процедуры направлены на выявление болезней на доклиническом этапе и их предупреждение.</p>
          </div>
          <div className="col col-6 col-lg-1"></div>
        </div>
        <div className={styles.work}>
          <div className={styles.task}>
            <p className={styles.taskTitle}>Задача</p>
            <div className={styles.taskInfo}>
              <p className={styles.taskNum}>+30%</p>
              <p className={cn('txt-m', styles.taskText)}>увеличение числа первичных пациентов на процедуры адаптационной и эстетической медицины</p>
            </div>
          </div>
          <div className={styles.solution}>
            <p className={styles.solutionTitle}>Решение</p>
            <ul className={styles.solutionSteps}>
              <li className={cn('quote-m', styles.solutionStep)}>Анализ сайта, выявление точек роста для повышения конверсии</li>
              <li className={cn('quote-m', styles.solutionStep)}>Сравнение конкурентов и составление портрета целевого клиента</li>
              <li className={cn('quote-m', styles.solutionStep)}>Определение каналов трафика, выявление наиболее эффективный</li>
            </ul>
          </div>
        </div>
      </div>
      <picture className={styles.bg}>
        <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/grandclinic/about-bg-lg.png' />
        <img className={styles.image} src='/images/projects/grandclinic/about-bg.png' alt='' />
      </picture>
    </section>
  )
}
