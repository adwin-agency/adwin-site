import cn from 'classnames'
import media from '/data/media'
import styles from './BurenieSiteResults.module.scss'

export default function BurenieSiteResults() {
  return (
    <section>
      <div className={styles.main}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className='h2'>Сила мнения</h2>
              <p className={cn('txt-quote-m', styles.desc)}>Итогом сотрудничества отдела разработки и маркетинга, при активном участии клиента, стал полноценный продающий сайт, приносящий нашему клиенту заявки.</p>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-2'>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <p className={styles.statNum}>80+</p>
                  <p className={cn('txt-m', styles.statText)}>часа аналитики и исследований рынка</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNum}>96</p>
                  <p className={cn('txt-m', styles.statText)}>часов разработки визуала</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNum}>284<span>стр/ч</span></p>
                  <p className={cn('txt-m', styles.statText)}>средняя скорость набора кода наших программистов на этом проекте</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNum}>880+</p>
                  <p className={cn('txt-m', styles.statText)}>суммарное количество часов специалистов, затраченное на проект</p>
                </div>
              </div>
            </div>
            <div className='col col-6'>
              <picture className={styles.graphic}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/gs-graphic-1-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/gs-graphic-1.png' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'>
              <div className={cn(styles.list, styles.green)}>
                <p className={styles.listTitle}>Почему % отказов <span>снизился</span></p>
                <ul className={styles.listItems}>
                  <li className={cn('txt-m', styles.listItem)}>сайт оптимизирован для быстрой загрузки</li>
                  <li className={cn('txt-m', styles.listItem)}>адаптивная версия позволяет просматривать сайт с любого девайса</li>
                  <li className={cn('txt-m', styles.listItem)}>информация отображена в понятном и удобном виде</li>
                  <li className={cn('txt-m', styles.listItem)}>пользователям уже с первого мгновения становится понятно, что они находятся на нужном ресурсе</li>
                </ul>
              </div>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-2'>
              <div className={cn(styles.list, styles.blue)}>
                <p className={styles.listTitle}>Почему % конверсии <span>вырос</span></p>
                <ul className={styles.listItems}>
                  <li className={cn('txt-m', styles.listItem)}>сайт вызывает доверие, благодаря выстроенному рассказу о конкурентных преимуществах компании: собственный автопарк, карточка о компании, интерактивная карта</li>
                  <li className={cn('txt-m', styles.listItem)}>позволяет закрыть потребность пользователя в организации водоснабжения</li>
                  <li className={cn('txt-m', styles.listItem)}>отвечает всем запросам целевой аудитории</li>
                </ul>
              </div>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
      </div>
      <div className={styles.trends}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h3 className='h3'>Как внесённые нами изменения повлияли на продуктивность сайта</h3>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-2'>
              <p className={cn('txt-m', styles.trendsDesc)}>Отвечая тренду на растущий мобильный трафик, мы запустили мобильную версию сайта. До её запуска на любых девайсах открывалась дестопная версия, взаимодействовать с которой с мобильных телефонов было крайне неудобно. Теперь контент стал отображаться в понятном виде, уменьшив процент отказов.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-1'>
              <div className={styles.trendsStats}>
                <div className={styles.stat}>
                  <p className={styles.statNum}>+72%</p>
                  <p className={cn('txt-m', styles.statText)}>прирост уникальных посетителей на сайте</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNum}>-81%</p>
                  <p className={cn('txt-m', styles.statText)}>уменьшение отказов с сайта</p>
                </div>
                <div className={styles.stat}>
                  <p className={styles.statNum}>4/5</p>
                  <p className={cn('txt-m', styles.statText)}>обращений в компанию заканчиваются заключением договора</p>
                </div>
              </div>
            </div>
            <div className='col col-6 col-lg-5'>
              <picture className={styles.trendsGraphic}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie-site/gs-graphic-2-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie-site/gs-graphic-2.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
