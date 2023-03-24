import cn from 'classnames'
import media from '/data/media'
import styles from './FitnotecaDetails.module.scss'

export default function FitnotecaDetails() {
  return (
    <section>
      <div className={styles.top}>
        <div className='container'>
          <div className='row'>
            <div className='col col-6 col-lg-2'>
              <h2 className={'h3'}>Наш подход</h2>
            </div>
            <div className='col col-6 col-lg-3'>
              <p className={cn('quote-m', styles.desc)}>Почему мы считаем необходимым вести работу по сегментам и интересами в Яндекс.Аудиториях, а не ограничиваться стандартным набором поисковой рекламы и РСЯ:</p>
              <ul className={cn('txt-m', styles.topList)}>
                <li className={styles.topItem}>Взаимодействие с пользователем на разных этапах воронки - т.е. работать с горячей и холодной аудиторией;</li>
                <li className={styles.topItem}>Широкий функционал настроек - от загрузки данных CRM, местоположения целевой аудитории до поиска их смежных интересов на основе реальных конверсий;</li>
                <li className={styles.topItem}>Возможность расширить охват за счет указания схожести аудитории;</li>
                <li className={styles.topItem}>В зависимости от типа кампании можно показать как просто текстовое объявление на поиске самой горячей аудитории, так и графический баннер или видео более холодной аудитории.</li>
                <li className={styles.topItem}>Персонализация объявлений - показывайте актуальные предложения для конкретной группы пользователей;</li>
              </ul>
            </div>
            <div className='col col-6 col-lg-1'></div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.data}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <h3 className={styles.dataTitle}>Мало данных по действующим клиентам</h3>
                <p className={cn('txt-m', styles.dataDesc)}>Для нахождения системой интересующей нас аудитории необходимо минимум 1000 уникальных номеров или адресов эл. почты клиентов. Мы работали с этим проектом уже на протяжении 3-х месяцев, но столько у нас не было. <br /><br />Нужны актуальные и свежие данные, так как предпочтения и интересы пользователей меняются. Есть риск таргетироваться на не заинтересованную аудиторию.</p>
                <p className={cn('quote-m', styles.dataNote)}>Мы решили таргетироваться на посетителей других сайтов. Нам нужны клиенты на фитнес, но мы можем нацелиться на похожих клиентов, которые интересуются салонами красоты, спа-салонами и т.д.</p>
                <p className={cn('txt-m', styles.dataDesc)}>Вместо того, чтобы постоянно расширять семантическое ядро - говорим Я.Аудиториям находить похожих людей на тех, которые платежеспособны и совершают покупки в смежных сферах бизнеса. <br /><br />Анонимизированный сегмент - представляет из себя просто ссылку, условие таргетинга, по которому Яндекс понимает похожих на какую аудиторию нужно приводить посетителей.</p>
                <picture className={styles.dataTable}>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/fitnoteca/data-table-lg.png' />
                  <img className={styles.picImage} src='/images/projects/fitnoteca/data-table.png' alt='' />
                </picture>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
          <picture className={styles.dataBg}>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/fitnoteca/data-bg-lg.png' />
            <img className={styles.picImage} src='/images/projects/fitnoteca/data-bg.png' alt='' />
          </picture>
        </div>
        <div className={styles.conversion}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <h3 className='h3'>Низкое число конверсий</h3>
                <p className={cn('txt-m', styles.conversionDesc)}>Если прямых заказов для создания сегмента не хватает, можно использовать микроконверсии, которые дадут системе понять какой портрет пользователя нам интересен. Например:</p>
                <ul className={cn('txt-m', styles.list, styles.conversionList)}>
                  <li className={styles.listItem}>смотрели контакты</li>
                  <li className={styles.listItem}>были на сайте больше минуты</li>
                  <li className={styles.listItem}>добавили товар в корзину, но не купили</li>
                  <li className={styles.listItem}>просмотрели более 4-х страниц</li>
                  <li className={styles.listItem}>начали заполнять заявку но не завершили и т.д.</li>
                </ul>
                <p className={cn('txt-m', styles.conversionDesc)}>Берем свою “эталонную” аудиторию, т.е. смотрим на портрет Интересов посетителей нашего сайта через Я.Метрику, которые совершили конверсию. <br /><br />Нас интересует аффинити-индекс - это индекс соответствия рейтинга вашей целевой аудитории относительно базовой аудитории.</p>
                <picture className={styles.conversionTable}>
                  <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/fitnoteca/conversion-table-lg.png' />
                  <img className={styles.picImage} src='/images/projects/fitnoteca/conversion-table.png' alt='' />
                </picture>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
        </div>
        <div className={styles.season}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <h3 className='h3'>Сезонность товара или услуги</h3>
                <p className={cn('txt-m', styles.seasonDesc)}>Еще один важный момент - тестировать аудитории через инструмент Эксперименты в Яндекс.Директ. Чтобы нивелировать сезонность, платежеспособность, конкурентную борьбу и прочие факторы.</p>
                <p className={cn('quote-m', styles.seasonNote)}>Мы разделяем трафик на 2 части. Первые 50% мы запускаем на нашу собственную классическую аудиторию по ключевым словам, а вторые 50% на сегмент Яндекс.Аудиторий.</p>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
        </div>
        <div className={styles.client}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <h3 className='h3'>Поиск аудитории, похожей на потенциальных клиентов</h3>
                <p className={cn('txt-m', styles.clientDesc)}>Мы можем искать похожую аудиторию (Look-alike) на основании уже готовых сегментов. Это означает, что алгоритмы Яндекса анализируя файлы cookie будет находить максимально заинтересованных в покупке нашей услуге новых пользователей:</p>
                <ul className={cn('txt-m', styles.list, styles.clientList)}>
                  <li className={styles.listItem}>Look-alike на основе данных о тех, кто уже совершил сделку;</li>
                  <li className={styles.listItem}>Look-alike на основе данных о тех, кто обращался в компанию, но сделку не завершил;</li>
                  <li className={styles.listItem}>Look-alike на основе данных о тех, кто был на сайте, но не обращался в компанию.</li>
                </ul>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
          <picture className={styles.clientBg}>
            <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/fitnoteca/client-bg-lg.png' />
            <img className={styles.picImage} src='/images/projects/fitnoteca/client-bg.png' alt='' />
          </picture>
        </div>
        <div className={styles.recommend}>
          <div className='container'>
            <div className='row'>
              <div className='col col-6 col-lg-2'></div>
              <div className='col col-6 col-lg-3'>
                <h3 className='h3'>Наши рекомендации</h3>
                <p className={cn('txt-m', styles.recommendDesc)}>Мы выработали рекомендации по работе с Я.Аудиториями практически для любой сферы бизнеса:</p>
                <ul className={cn('txt-m', styles.list, styles.recommendList)}>
                  <li className={styles.listItem}>Чтобы оптимизировать рекламу определите, какие конверсии на сайте корректно считать хорошими, а какие - нет.</li>
                  <li className={styles.listItem}>Не настраивайте слишком узкие аудитории. Так системе будет сложнее обучиться и найти подходящую аудиторию.</li>
                  <li className={styles.listItem}>Используйте полученные сегменты для корректировок ставок.</li>
                  <li className={styles.listItem}>Проводите А/В тестирование с помощью инструмента “Эксперименты”, чтобы нивелировать сезонность и прочие факторы.</li>
                  <li className={styles.listItem}>Используйте сегменты схожих бизнесов и отслеживать на аффинити-индекс их аудиторий.</li>
                </ul>
              </div>
              <div className='col col-6 col-lg-1'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
