import cn from 'classnames'
import styles from './TradexProto.module.scss'

export default function TradexProto() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-3'>
            <div className={styles.top}>
              <h2 className='h3'>Прототип</h2>
              <p className={cn('txt-m', styles.desc)}>Но так как это лендинг, небольшой проект, мы провели  аудит по конкурентам, набросали Lo-fi прототип и сразу приступили к дизайну. <br /><br />После условного прототипа мы набросали сетку и концепт первых двух экранов. На этом этапе было первое согласование с клиентом по результатам работы </p>
            </div>
            <img className={styles.desktop} src='/images/projects/tradex/proto-desktop.png' alt='' />
          </div>
          <div className='col col-6 col-lg-3'>
            <img className={styles.image} src='/images/projects/tradex/proto-main.png' alt='' />
          </div>
          <div className='col col-6 col-lg-1'>
            <img className={styles.devices} src='/images/projects/tradex/proto-devices.png' alt='' />
          </div>
          <div className='col col-6 col-lg-2'>
            <p className={cn('txt-m', styles.note)}>Сетка получилась нестрандартной, потому мы адаптировали лендинг на большее кол-во разрешений, для удобства разработчика. Чем больше разрешений делает дизайнер - тем меньше остается вопросов по ходу разработки.</p>
          </div>
          <div className='col col-6 col-lg-3'>
            <img className={styles.mobile} src='/images/projects/tradex/proto-mobile.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
