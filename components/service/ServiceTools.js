import tools from '/data/tools'
import styles from './ServiceTools.module.scss'

export default function ServiceTools({ type }) {
  return (
    <section>
      <div className={styles.top}>
        <h2 className='h2'>Используемые инструменты</h2>
        <p className={styles.desc}>Подбираем стек разработки исходя из потребностей клиента и задач ресурса</p>
      </div>
      <div className={styles.items}>
        {type && tools[type].map(item => (
          <img key={item.id} src={`/images/tools/${item}`} alt='' />
        ))}
      </div>
    </section>
  )
}
