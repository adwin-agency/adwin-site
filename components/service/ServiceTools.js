import cn from 'classnames'
import tools from '../../data/tools'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceTools.module.scss'

export default function ServiceTools({ category }) {
  const items = tools[category]

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='tools' ref={animRef}>
      <div className={styles.top}>
        <h2 className='h2'>Используемые инструменты</h2>
        <p className={styles.desc}>Подбираем стек разработки исходя из потребностей клиента и задач ресурса</p>
      </div>
      <div className={styles.items}>
        {items.map(item => (
          <img key={item.id} src={item.image} alt='' className={styles.image} />
        ))}
      </div>
    </section>
  )
}
