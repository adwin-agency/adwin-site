import cn from 'classnames'
import Scrolling from '../../app/Scrolling'
import Arrow from '/icons/burenie/arrow.svg'
import Lines from '/icons/burenie/lines.svg'
import media from '/data/media'
import styles from './BurenieDetails.module.scss'

export default function BurenieDetails() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.top}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className='h2'>Как мы этого добились</h2>
            </div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt', styles.desc)}>После проведения аудита проекта было принято решение о редизайне сайта для улучшения показателей конверсии. В тесном сотрудничестве с заказчиком, а так же специалистами по маркетингу, дизайну, и SEO продвижению была проведена масштабная работа по разработке нового сайта.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
          <div className={styles.diffItems}>
            <div className={styles.diffItem}>
              <p className={styles.diffTitle}>Было</p>
              <img className={styles.diffImage} src='/images/projects/burenie/design-before.png' alt='' />
            </div>
            <div className={styles.diffItem}>
              <p className={styles.diffTitle}>Стало</p>
              <img className={styles.diffImage} src='/images/projects/burenie/design-after.png' alt='' />
            </div>
          </div>
        </div>
        <div className={styles.prepare}>
          <div className='row'>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Подготовка к запуску</h3>
              <p className={cn('txt-quote-m', styles.prepareDesc)}>Чтобы понять, сколько заказов пришло именно с рекламы, мы подключили коллтрекинг и сквозную аналитику.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-4'>
              <div className={styles.callTracking}>
                <p className={cn('txt-m', styles.callTrackingDesc)}>Коллтрекинг показывает, с каких рекламных объявлений пользователи сайта совершают звонки — мы понимаем, какое объявление работает, а какое нет. А клиент видит, что звонок поступил с рекламы.</p>
                <picture className={styles.callTrackingPicture}>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/calltracking-lg.png' />
                  <img className={styles.picImage} src='/images/projects/burenie/calltracking.png' alt='' />
                </picture>
              </div>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.analyticsInfo)}>Сквозная аналитика — понятная система, которая связывает расходы на рекламу и данные о продажах. Все показатели видны в режиме онлайн.</p>
              <div className={styles.analyticsSteps}>
                <p className={styles.analyticsStep}>Какие <span>Расходы??</span></p>
                <Arrow className={styles.analyticsArrow} />
                <p className={cn(styles.analyticsStep, styles.blue)}>На какую <span>Рекламу??</span></p>
                <Arrow className={styles.analyticsArrow} />
                <p className={cn(styles.analyticsStep, styles.green)}>Сколько было <span>Выручки??</span></p>
              </div>
              <p className={cn('txt-quote-m', styles.analyticsDesc)}>Для Геосервис мы выстроили сквозную аналитику с помощью сервисов CoMagic и CRM bitrix24</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <picture className={styles.analyticsPicture}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/analytics-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie/analytics.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <div className={styles.launch}>
          <div className='row'>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Запуск рекламы</h3>
              <p className={cn('txt-m', styles.launchDesc)}>После настройки аналитики мы подготовили и запустили Рекламные кампании. Внутри рекламных кампаний работают десятки объявлений и сотни ключевых слов. В сквозной аналитике видна результативность каждой такой “боевой” единицы вплоть до продаж и выручки.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <div className={styles.launchTable}>
                <Scrolling>
                  <img className={styles.launchTableImage} src='/images/projects/burenie/launch-table.png' alt='' />
                </Scrolling>
              </div>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.announcementDesc)}>Рассмотрим преимущества сквозной аналитики на примере двух объявлений. Объявление с котиком привлекает больше внимания — цена клика и стоимость обращения с него низкая. Можно предположить, что оно работает лучше; но в сквозной аналитике видно — несмотря на низкую цену клика, объявление приносит меньше продаж, и их стоимость выше. Понятно, что этот креатив требует корректировки.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-3'>
              <img className={cn(styles.announcementImage, styles.left)} src='/images/projects/burenie/announcement-before.png' alt='' />
            </div>
            <div className='col col-6 col-lg-3'>
              <img className={cn(styles.announcementImage, styles.right)} src='/images/projects/burenie/announcement-after.png' alt='' />
            </div>
            <div className='col col-6'>
              <picture className={styles.announcementTable}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/announcement-table-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie/announcement-table.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <div className={styles.setting}>
          <Lines className={styles.settingLines} />
          <div className='row'>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Как поднять выручку, не увеличивая рекламный бюджет?</h3>
              <p className={cn('txt-m', styles.settingDesc)}>Итак, с помощью сквозной аналитики клиент оценивает прозрачность вложений в рекламу. Мы перешли к следующей задаче — увеличению ее эффективности. Решили начать с анализа воронки продаж и определили “узкие места”. <br /><br />Мы настроили в bitrix24 воронку продаж — благодаря этому в CoMagic можно посмотреть, сколько пользователей остановились на каждом шаге воронки.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <picture className={styles.settingTable}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/setting-table-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie/setting-table.png' alt='' />
              </picture>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <picture className={styles.settingDiagram}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/setting-diagram-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie/setting-diagram.png' alt='' />
              </picture>
              <p className={cn('txt-m', styles.serviceDesc)}>Только 10% новых клиентов вызывают инженера для осмотра места бурения, а из тех, к кому инженер выехал, оплачивает услуги половина. <br /><br />Больше всего потенциальных клиентов теряется на этапе между Новым клиентом и выездом инженера — это и есть “узкое место” в воронке. <br /><br />После анализа рекламных кампаний по группам, сформированным на этапе подготовки рекламы, стало понятно, почему так мало новых клиентов приглашают инженера.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <div className={styles.serviceTable}>
                <Scrolling>
                  <img className={styles.serviceTableImage} src='/images/projects/burenie/service-table.png' alt='' />
                </Scrolling>
              </div>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('quote-m', styles.conversionDesc)}>Процент конверсии в обращение по всем районам находится в одном пределе, однако в каких-то районах процент выезда — около 30%, а в каких-то — меньше 10%.</p>
              <p className={cn('txt-m', styles.conversionText)}>Возможно, на работу в нише 'бурение на воду' влияют особенности региона, о которых мы раньше не знали. Клиент подтвердил наше предположение: на юге области бурить скважины проще, конкуренты используют там недорогое оборудование, вплоть до ручных буров, поэтому предлагают цены ниже. Геосервис же использует только дорогостоящие установки на базе тяжелых грузовиков 'Урал'. На севере области из-за особенностей почвы бурить можно только дорогостоящим оборудованием. Для этих районов Геосервис предлагает отличные условия. Как следствие, на севере процент выезда и процент продаж гораздо выше, чем на юге.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <div className={styles.area}>
                <picture className={styles.areaMap}>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/conversion-map-lg.png' />
                  <img className={styles.picImage} src='/images/projects/burenie/conversion-map.png' alt='' />
                </picture>
                <p className={cn('quote-m', styles.areaDescTop)}>Услуги Геосервиса пользуются высоким спросом на севере области — здесь обращения лучше конвертируются в продажу</p>
                <p className={cn('quote-m', styles.areaDescBottom)}>Для юга области буровые установки Геосервиса слишком мощные. Конкуренты с более дешевым оборудованием предлагают цену ниже, и потенциальные клиенты обращаются к ним</p>
              </div>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.summaryDesc)}>Мы перераспределили рекламный бюджет с юга области на север, внесли корректировки по геопозиции, отключили некоторые ключевые слова. Удалось снизить трафик из нецелевых районов области и увеличить его в целевых. <br /><br />Качество обращений повысилось, увеличилось количество выездов инженеров и количество продаж. <br /><br />После проделанной работы результаты за аналогичный период стали выглядеть так:</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <picture className={styles.summaryTable}>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/burenie/summary-table-lg.png' />
                <img className={styles.picImage} src='/images/projects/burenie/summary-table.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
