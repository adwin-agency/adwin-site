import cn from 'classnames'
import styles from './Stats.module.scss'

const items = [
  {
    id: 1,
    em: true,
    num: 'с 2018',
    unit: 'года',
    desc: 'сертифицированный партнёр Яндекса'
  },
  {
    id: 2,
    num: '>45',
    unit: 'млн ₽',
    desc: 'общий рекламный бюджет клиентов'
  },
  {
    id: 3,
    num: '20+',
    unit: 'сотрудников',
    desc: 'в штате компании'
  },
  {
    id: 4,
    num: '12+',
    unit: 'лет',
    desc: 'опыт компании на рынке'
  },
  {
    id: 5,
    num: '15+',
    unit: 'ниш',
    desc: 'с которыми мы успешно работали'
  }
]

export default function Stats() {
  return (
    <div className={styles.el}>
      {items.map(item => (
        <div key={item.id} className={styles.item}>
          <p className={cn(styles.title, { [styles.em]: item.em })}>
            <span className={cn('num', styles.num)}>{item.num}</span>
            <span className={cn('h5', styles.unit)}>{item.unit}</span>
          </p>
          <p className={cn('extra', styles.desc)}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
