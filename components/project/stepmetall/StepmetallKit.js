import cn from 'classnames'
import Squares from '/icons/stepmetall/squares.svg'
import media from '/data/media'
import styles from './StepmetallKit.module.scss'

export default function StepmetallKit() {
  return (
    <section className={styles.el}>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <div className={styles.side}>
              <h2 className={cn('h2', styles.heading)}>UI Kit</h2>
            </div>
          </div>
          <div className='col col-6 col-lg-4'>
            <div className={styles.main}>
              <p className={cn('txt-quote', styles.desc)}>Мало кто из дизайнеров рассказывает о таком промежуточном этапе как UI-kit (это гайд с проработанными цветами, шрифтами, кнопками и тд)  Но этот этап не маловажен, поэтому покажем его изнутри. <br /><br />Грамотно отстроенная система помогает нам в ходе разработки страниц не сбиться и ненаделать лишних кнопок и размеров. От этого вид сайта становится более цельным, а у разработчиков не будет лишней работы.</p>
              <picture>
                <source media={`(min-width: ${media.lg}px)`} srcSet='/images/projects/stepmetall/buttons.png' />
                <img className={styles.image} src='/images/projects/stepmetall/elements.png' alt='' />
              </picture>
              <div className={styles.elements}>
                <img className={styles.menu} src='/images/projects/stepmetall/menu.png' alt='' />
                <img className={styles.inputs} src='/images/projects/stepmetall/inputs.png' alt='' />
                <div className={styles.note}>
                  <Squares className={styles.noteSquares} />
                  <p className={styles.noteTitle}>UI Kit </p>
                  <p className={styles.noteDesc}>UI Kit - это специальный гайд, где собраны правила и особенности всех графических элементов для сайта. Это помогает придерживаться одной стилистики как на этапе дизайна, так и на этапе верстки. <br /><br />UI Kit ускоряет работу для всех следующих этапов с момента его создания. Создавать этот гайд можно сразу после согласования прототипа клиентом. </p>
                </div>
                <img className={styles.icons} src='/images/projects/stepmetall/icons.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
