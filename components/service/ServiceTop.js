import cn from 'classnames'
import styles from './ServiceTop.module.scss'
import details from '../../data/details'
import useAnim from '../../helpers/useAnim'

export default function ServiceTop({ type }) {
  const { heading, desc } = details[type]

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, styles[type], { [styles.anim]: anim })} ref={animRef}>
      <div className='container'>
        <div className={styles.main}>
          <div className={styles.info}>
            <h1 className={cn('h1', styles.heading)}>{heading}</h1>
            <p className={styles.desc}>
              <span className={styles.arrow}></span>
              {desc}
            </p>
          </div>

          {type === 'landing' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 541" fill="none" className={styles.image}>
              <path d="M232.5 2.5H368.5V9C368.5 11.4853 366.485 13.5 364 13.5H237C234.515 13.5 232.5 11.4853 232.5 9V2.5Z" stroke="#1B1A1A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '5rem'})`, transitionDelay: '1.5s' }} />

              <rect x="26.5" y="29.5" width="93" height="40" rx="6.5" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="463.5" y="33.5" width="119" height="30" rx="15" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="160.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" stroke-width="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="231.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" stroke-width="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="302.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" stroke-width="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />
              <rect x="375.75" y="46.75" width="51.5" height="1.5" stroke="#D2113A" stroke-width="1.5"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.5s' }} />

              <rect x="26.5" y="95.5" width="556" height="177" rx="6.5" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '1.75s' }} />

              <rect x="26.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />
              <rect x="214.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />
              <rect x="402.5" y="302.5" width="180" height="117" rx="6.5" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2s' }} />

              <path d="M2 541V22C2 10.9543 10.9543 2 22 2H594C605.046 2 614 10.9543 614 22V541" stroke="#1B1A1A" stroke-width="3" />

              <path d="M26 541V436C26 431.582 29.5817 428 34 428H387C391.418 428 395 431.582 395 436V541" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2.25s' }} />
              <path d="M404 541V436C404 431.582 407.582 428 412 428H575C579.418 428 583 431.582 583 436V541" stroke="#D2113A" stroke-width="3"
                style={{ transform: `translateY(${anim ? '0' : '100rem'})`, transitionDelay: '2.25s' }} />
            </svg>
          )}

        </div>
      </div>
    </section>
  )
}
