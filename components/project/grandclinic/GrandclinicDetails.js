import cn from 'classnames'
import Confused from '/icons/grandclinic/confused.svg'
import media from '/data/media'
import styles from './GrandclinicDetails.module.scss'

export default function GrandclinicDetails() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className={styles.top}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className='h2'>Анализ сайта</h2>
            </div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.topDesc)}>Без качественного, интуитивно понятного, и быстрого сайта любая реклама будет не очень эффективна. <br /><br />Пользователь хочет максимально быстро и точно получить отклик на свой запрос, для этого изменили форму заявки. Указаны фотографии до/после.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <div className={styles.topImages}>
                <img className={styles.topImage} src='/images/projects/grandclinic/form-before.png' alt='' />
                <img className={styles.topImage} src='/images/projects/grandclinic/form-after.png' alt='' />
              </div>
            </div>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('txt-m', styles.topDesc)}>В каждую процедуру добавили подробную и легко читаемую инфо, а также видеоролик. <br /><br />Информацию о пользе перенесли на первый экран в каждой процедуре, что повысило конверсию на 0,7 %.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6'>
              <div className={styles.topImages}>
                <img className={styles.topImage} src='/images/projects/grandclinic/extras.png' alt='' />
                <img className={styles.topImage} src='/images/projects/grandclinic/1screen.png' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.prepare}>
          <div className='row'>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-4'>
              <h3 className='h3'>Подготовительный этап</h3>
            </div>
            <div className='col col-6 col-lg-1'>
              <div className={styles.prepareOffer}>
                <p className={cn('txt-m', styles.prepareOfferTitle)}>Предложение для новых клиентов: скидка на первое посещение</p>
                <p className={styles.prepareOfferNum}>-30%</p>
              </div>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('quote-m', styles.prepareDesc)}>При работе в нише медицины и beauty очень важно сформировать у потенциальных потребителей доверие к бренду и организовать легкий вход в воронку продаж. При большом выборе клиник будущий клиент согласится на более выгодное и качественное предложение.</p>
              <p className={cn('txt-m', styles.prepareNote)}>На первом этапе запуска мы сосредоточились на продвижении криотерапии. Составили и согласовали с клиникой оффер 30% скидку на первое посещение (процедура делается курсом, и после первого посещения пациенты становятся постоянными).</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
        <div className={styles.competition}>
          <div className='row'>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Анализ конкурентов и использование таргетинга в контекстной рекламе</h3>
              <p className={cn('txt-m', styles.competitionDesc)}>Мы искали среди конкурентов близкие по эффекту и ценнику процедуры, т.к. конкурентов на услугу не было. <br /><br />Подготовили список адресов клиник с интересующим ценником на процедуры и использовали их в таргетинге по ГЕО. Это позволило узка нацелится только на посетителей данных клиник без учета работников.</p>
            </div>
            <div className='col col-6 col-lg-3'></div>
          </div>
        </div>
        <div className={styles.portrait}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <img className={styles.portraitImage} src='/images/projects/grandclinic/geo-target.png' alt='' />
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Портрет потенциального клиента</h3>
              <p className={cn('txt-m', styles.portraitDesc)}>Уникальная услуга, которой гордится Grand Clinic - это криотерапия - процедура лечения холодом на собственном уникальном оборудовании, криокапсуле ICEQUEEN. <br /><br />Процедура дорогостоящая и практически не имеющая аналогов, поэтому приходилось точечно искать интерес и заинтересовывать Пользователей очень точными посылами в креативах.</p>
            </div>
          </div>
        </div>
        <div className={styles.creative}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h3 className='h3'>Создание гипотез и сюжетов для креативов</h3>
            </div>
            <div className='col col-6 col-lg-4'></div>
            <div className='col col-6 col-lg-2'>
              <p className={cn('txt-quote-m', styles.creativeDesc)}>Важно коротко и понятно объяснить в креативе, что за услугу мы предлагаем и зачем она нужна, донести ее пользу. <br /><br />Пациент должен сразу понять, что даст ему конкретная процедура, ведь клиника предлагает методы превентивной медицины, а у большинства людей не сформирован спрос на них.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-3'>
              <div className={styles.creativeAccent}>
                <p className={styles.creativeAccentTitle}>Основной акцент в креативах мы делаем на закрытии боли аудитории</p>
                <div className={styles.creativeAccentItems}>
                  <div className={styles.creativeAccentItem}>
                    <Confused className={styles.creativeAccentIcon} />
                    <p className={cn('txt-m', styles.creativeAccentText)}>недоверие к эффективности новой процедуры</p>
                  </div>
                  <div className={styles.creativeAccentItem}>
                    <Confused className={styles.creativeAccentIcon} />
                    <p className={cn('txt-m', styles.creativeAccentText)}>есть ли подтвержденные исследования безопасности процедуры</p>
                  </div>
                  <div className={styles.creativeAccentItem}>
                    <Confused className={styles.creativeAccentIcon} />
                    <p className={cn('txt-m', styles.creativeAccentText)}>долгосрочный ли эффект или разовый</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.utp}>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h3 className={styles.utpTitle}>Основные УТП, которые мы используем в рекламе:</h3>
            </div>
            <div className='col col-6 col-lg-4'></div>
            <div className='col col-6 col-lg-4'>
              <div className={styles.utpItems}>
                <div className={styles.utpItem}>
                  <p className={cn('txt-m', styles.utpText)}>Конкретные проблемы, от которых можно избавиться после лечения в клинике</p>
                </div>
                <div className={styles.utpItem}>
                  <p className={cn('txt-m', styles.utpText)}>Цена</p>
                </div>
                <div className={styles.utpItem}>
                  <p className={cn('txt-m', styles.utpText)}>Скидка 30% на первое посещение</p>
                </div>
                <div className={styles.utpItem}>
                  <p className={cn('txt-m', styles.utpText)}>Бесплатная консультация (в том числе и видео-) врача перед процедурой</p>
                </div>
              </div>
            </div>
            <div className='col col-6 col-lg-1'></div>
            <div className='col col-6 col-lg-1'>
              <p className={cn('quote-m', styles.utpDesc)}>В визуале тестировали фото и видео, их результативность примерно равнозначна - поэтому в равных пропорциях используем и тот, и тот формат.</p>
            </div>
          </div>
        </div>
        <div className={styles.target}>
          <div className={styles.targetMain}>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-2'>
                <h3 className='h3'>Запуск таргетированной рекламы</h3>
              </div>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <p className={cn('txt-m', styles.targetDesc)}>Процедуры не популярны у широких масс. У клиники фактически нет конкурентов, которые предлагают услуги адаптационной медицины - найти в Facebook* и Instagram* аудиторию по интересам невозможно. Таких интересов просто нет в детальном таргетинге :) <br /><br />Поэтому мы использовали Lookalike (похожую аудиторию) на основе базы клиентов, а также взаимодействующих с профилем Instagram*. <br /><br />В отдельной кампании протестировали рекламу на широкую аудиторию - ограниченную только по социально-демографическим характеристикам. После оптимизации аудитория вышла на стабильный результат.</p>
                <p className={cn('quote-m', styles.targetAccent)}>Использовали холодную и теплую аудиторию - поскольку заказчика интересовало привлечение новых клиентов, на ретаргет не делали ставку.</p>
                <p className={cn('txt-m', styles.targetDesc)}>В начале тестировали два канала: Facebook*/Instagram* и ВКонтакте. <br /><br />На этапе тестов качественных заявок из Вконтакте практически не было, к тому же клиент больше внимания уделял Instagram*, а группа клиники ВКонтакте практически не велась - и мы решили аккумулировать рекламный бюджет только в Facebook* и Instagram*. <br /><br />Когда мы определили список процедур, возник важный вопрос - куда вести трафик? <br /><br />Вариантов было несколько.</p>
                <div className='row'>
                  <div className='col col-2 col-lg-6'></div>
                  <div className='col col-4 col-lg-6'>
                    <ol className={styles.targetList}>
                      <li className={styles.targetListItem}>
                        <p className={styles.targetListNum}>1.</p>
                        <p className={cn('txt-m', styles.targetListText)}>Во-первых, у клиники есть сайт, но он имеет несколько существенных недостатков - на нем размещено совсем немного информации о процедурах, нет отзывов пациентов, тексты сложные, изобилуют медицинскими терминами и непонятны для широкой аудитории.</p>
                      </li>
                      <li className={styles.targetListItem}>
                        <p className={styles.targetListNum}>2.</p>
                        <p className={cn('txt-m', styles.targetListText)}>Второй вариант для работы - Instagram*-профиль, который активно ведется силами самой клиники.</p>
                      </li>
                      <li className={styles.targetListItem}>
                        <p className={styles.targetListNum}>3.</p>
                        <p className={cn('txt-m', styles.targetListText)}>Третий вариант - можно не уводить трафик по внешним URL вообще, а использовать форму заявок Facebook*.</p>
                      </li>
                    </ol>
                  </div>
                </div>
                <p className={styles.targetNote}>*официально запрещена на территории России</p>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
          <div className={styles.targetTest}>
            <div className='row'>
              <div className='col col-6 col-lg-3'>
                <picture className={styles.targetTestPicture}>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/grandclinic/target-test-lg.png' />
                  <img className={styles.targetTestImage} src='/images/projects/grandclinic/target-test.png' alt='' />
                </picture>
              </div>
              <div className='col col-6 col-lg-2'>
                <p className={cn('quote-m', styles.targetTestTitle)}>Тестирование мы начали с сайта. Спустя месяц выявили стабильную стоимость конверсии. В среднем заявка с сайта стоила 800-900 ₽.</p>
                <p className={cn('txt-m', styles.targetTestDesc)}>Затем мы протестировали сообщения и форму заявок - нам удалось снизить стоимость лида до 600 ₽. Хотя и конверсия в запись после обработки лидов в call-центре с этих кампаний ниже, низкая стоимость лида компенсирует этот показатель. <br /><br />Когда основные связки по воронке были найдены, мы включили в рекламу дополнительные процедуры: гидромассаж, сухую иммерсию, озонотерапию, а также услуги из области эстетической медицины.</p>
                <p className={cn('quote-m', styles.targetTestNote)}>После завершения тестов стоимость заявки на отдельные услуги снизилась до 200-300 ₽.</p>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
        </div>
        <div className={styles.context}>
          <div className='row'>
            <div className='col col-6 col-lg-2'></div>
            <div className='col col-6 col-lg-3'>
              <h3 className='h3'>Медийная реклама в контекстной рекламе</h3>
              <p className={cn('txt-m', styles.contextDesc)}>В Медийной рекламе тестировали различные аудитории. Но результаты были отрицательными. За 30 дней было потрачено 20 000 руб. и всего 4 заявки. <br /><br />Логичным решением было бы отключить кампанию с нулевым результатом. <br /><br />Но мы накапливали статистику по влиянию на заявки тех Пользователей, которые видели наши баннеры, но не кликали на них напрямую и не совершали конверсий. <br /><br />Благодаря ассоциированным конверсиям мы дополнительно привели 6 заявок.</p>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
