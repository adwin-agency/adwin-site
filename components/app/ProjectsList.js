import cn from 'classnames'
import ProjectCard from './ProjectCard'
import styles from './ProjectsList.module.scss'

const items = [
  {
    id: 1,
    images: ['kz.png', 'kz-lg.png'],
    tags: ['реклама', 'комплексная реклама', 'сквозная аналитика', 'интеграция с crm'],
    title: 'Кухонный завод',
    desc: 'Как комплексный подход экономит до 30% бюджета клиента'
  },
  {
    id: 2,
    images: ['gc.png', 'gc-lg.png'],
    tags: ['реклама', 'медийная реклама', 'таргетированная реклама', 'интеграция с crm'],
    title: 'Grand Clinic',
    desc: 'Как мы увеличили рост обращений на 30 % в сложной нише, у которой нет конкурентов'
  },
  {
    id: 3,
    images: ['bur.png', 'bur-lg.png'],
    tags: ['реклама', 'сквозная аналитика', 'комплексная реклама'],
    title: 'Burenie-spb',
    desc: 'Rак поднять выручку, не увеличивая бюджет?'
  },
  {
    id: 4,
    images: ['fitno.png', 'fitno-lg.png'],
    tags: ['реклама', 'сквозная аналитика', 'я.аудитории', , 'контекстная реклама'],
    title: 'Fitnoteca',
    desc: 'Точечная сегментация пользователей и увеличение коэффициента конверсии на 35%'
  },
  {
    id: 5,
    images: ['bur-site.png', 'bur-site-lg.png'],
    tags: ['разработка', 'корпоративный сайт', 'анализ ниши'],
    title: 'Burenie-spb',
    desc: 'Докопались до сути и сделали сайт'
  },
  {
    id: 6,
    images: ['wow.png', 'wow-lg.png'],
    tags: ['разработка', 'Корпоративный сайт', 'анализ ниши', 'брендинг'],
    title: 'WOW Kitchen',
    desc: 'вкусный сайт'
  }
]

const rowItems = items.reduce((acc, curr, index) => {
  if (index % 2 === 0) {
    acc.push([curr])
  } else {
    acc[Math.floor(index / 2)].push(curr)
  }
  return acc
}, [])

export default function ProjectsList({ className }) {
  return (
    <div className={cn(styles.el, className)}>
      {rowItems.map((items, index) => (
        <div key={index} className={styles.row}>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <ProjectCard
                images={item.images}
                tags={item.tags}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
