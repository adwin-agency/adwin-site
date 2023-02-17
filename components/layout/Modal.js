import { useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import TextInput from '../ui/TextInput'
import CheckBox from '../ui/CheckBox'
import FileInput from '../ui/FileInput'
import Button from '../ui/Button'
import Expand from '/icons/expand.svg'
import AppContext from '../../context/AppContext'
import styles from './Modal.module.scss'

export default function Modal() {
  const [activeAbout, setActiveAbout] = useState(false)

  const modalRef = useRef()
  const aboutRef = useRef()

  const ctx = useContext(AppContext)
  const activeModal = ctx.activeModal

  function toggleAbout() {
    if (activeAbout) {
      aboutRef.current.style.height = ''
      setActiveAbout(false)
    } else {
      aboutRef.current.style.height = aboutRef.current.scrollHeight + 'px'
      setActiveAbout(true)
    }
  }

  useEffect(() => {
    if (activeModal) {      
      modalRef.current.style.display = 'block'

      setTimeout(() => {
        modalRef.current.style.opacity = '1'
      })
    } else {
      modalRef.current.style.opacity = ''

      setTimeout(() => {
        modalRef.current.style.display = ''        
      }, 300)
    }
  }, [activeModal])

  return (
    <div className={styles.el} ref={modalRef}>
      <div className={styles.area}>
        <div className={styles.overlay} onClick={ctx.toggleModal}></div>
        <div className={styles.box}>
          <p className='h3'>Оставить заявку</p>
          <form className={styles.form}>
            <div className={styles.fields}>
              <TextInput className={styles.field} name='name' placeholder='Ваше имя' />
              <TextInput className={styles.field} type='tel' name='phone' placeholder='Контактный телефон' />
              <TextInput className={styles.field} type='email' name='email' placeholder='Mail' />
              <TextInput className={styles.field} name='company' placeholder='Название компании' />
            </div>
            <div className={styles.expand}>
              <p className={styles.expandTitle} onClick={toggleAbout}>
                Рассказать о проекте
                <Expand className={cn(styles.expandIcon, { [styles.active]: activeAbout })} />
              </p>
              <div className={cn(styles.expandContent, { [styles.active]: activeAbout })} ref={aboutRef}>
                <div className={styles.about}>
                  <p className={styles.title}>О проекте</p>
                  <div className={styles.inputs}>
                    <div className={styles.checkboxes}>
                      <CheckBox className={styles.checkbox} name='service' title='Реклама' />
                      <CheckBox className={styles.checkbox} name='service' title='Разработка' />
                      <CheckBox className={styles.checkbox} name='service' title='Брендинг' />
                      <CheckBox className={styles.checkbox} name='service' title='Хочу всё и сразу!' />
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
              </div>
            </div>
            <div className={styles.actions}>
              <Button className={styles.btn} mod='send' color='magenta'>Отправить</Button>
              <p className={styles.note}>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
            </div>
          </form>
          <button className={styles.close} onClick={ctx.toggleModal}></button>
        </div>
      </div>
    </div>
  )
}
