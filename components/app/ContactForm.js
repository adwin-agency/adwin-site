import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Button from '../ui/Button'
import CheckBox from '../ui/CheckBox'
import FileInput from '../ui/FileInput'
import TextInput from '../ui/TextInput'
import styles from './ContactForm.module.scss'

export default function ContactForm() {
  const ctx = useContext(AppContext)

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    ctx.openPopup()
  }

  return (
    <section className={styles.el}>
      <div className={styles.side}>
        <h3 className='h3'>Если у вас остались вопросы или хотите обсудить проект — напишите нам :)</h3>
      </div>
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.contacts}>
            <p className={styles.title}>Ваши контакты</p>
            <div className={styles.fields}>
              <TextInput className={styles.field} name='name' placeholder='Ваше имя' />
              <TextInput className={styles.field} type='tel' name='phone' placeholder='Контактный телефон' />
              <TextInput className={styles.field} type='email' name='email' placeholder='Mail' />
              <TextInput className={styles.field} name='company' placeholder='Сайт' />
            </div>
          </div>
          <div className={styles.about}>
            <p className={styles.title}>О проекте</p>
            <div className={styles.inputs}>
              <div className={styles.boxes}>
                <CheckBox className={styles.box} name='service' title='Реклама' />
                <CheckBox className={styles.box} name='service' title='Разработка' />
                <CheckBox className={styles.box} name='service' title='Брендинг' />
                <CheckBox className={styles.box} name='service' title='Хочу всё и сразу!' />
              </div>
              <div className={styles.additional}>
                <TextInput
                  className={styles.textarea}
                  textarea
                  name='description'
                  title='Опишите задачу'
                  placeholder='Опишите, чем занимается ваша компания и как мы можем вам помочь. Можете рассказать о желаемых сроках или на какой бюджет рассчитываете...'
                />
                <FileInput name='file' className={styles.file} />
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <Button className={styles.btn} mod='send' color='magenta' type='submit'>Отправить</Button>
            <p className={styles.note}>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
          </div>
        </form>
      </div>
    </section>
  )
}
