import { useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import TextInput from '../ui/TextInput'
import CheckBox from '../ui/CheckBox'
import FileInput from '../ui/FileInput'
import Button from '../ui/Button'
import Expand from '/icons/expand.svg'
import Send from '/icons/send.svg'
import AppContext from '../../context/AppContext'
import styles from './Modal.module.scss'

export default function Modal() {
  const [activeAbout, setActiveAbout] = useState(false)
  const [success, setSuccess] = useState(false)

  const modalRef = useRef()
  const aboutRef = useRef()

  const ctx = useContext(AppContext)
  const { activeModal, closingModal } = ctx

  function toggleAbout() {
    if (activeAbout) {
      aboutRef.current.style.height = ''
      setActiveAbout(false)
    } else {
      aboutRef.current.style.height = aboutRef.current.scrollHeight + 'px'
      setActiveAbout(true)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (activeModal === 'request') {
      ctx.closeModal()
      setTimeout(() => ctx.openPopup(), 300)
    }

    if (activeModal === 'callback') {
      setSuccess(true)
    }
  }

  useEffect(() => {
    if (closingModal) {
      modalRef.current.style.opacity = ''

      setTimeout(() => {
        modalRef.current.style.display = ''
      }, 300)
    } else if (activeModal) {
      modalRef.current.style.display = 'block'

      setTimeout(() => {
        modalRef.current.style.opacity = '1'
      })
    } else {
      setSuccess(false)
    }
  }, [activeModal, closingModal])

  return (
    <div className={styles.el} ref={modalRef}>
      <div className={styles.area}>
        <div className={styles.overlay} onClick={ctx.closeModal}></div>
        <div className={styles.box}>
          {activeModal === 'request' && (
            <div className={styles.request}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <p className='h3'>Оставить заявку</p>
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
                  <Button className={styles.btn} mod='send' color='magenta' type='submit'>Отправить</Button>
                  <p className={styles.note}>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
                </div>
              </form>
            </div>
          )}
          {activeModal === 'callback' && (
            <div className={styles.callback}>
              <div className={styles.inner}>
                <form className={cn(styles.form, { [styles.disabled]: success })} onSubmit={handleSubmit}>
                  <p className='h3'>Обратный звонок</p>
                  <div className={styles.fields}>
                    <TextInput className={styles.field} name='name' placeholder='Ваше имя' />
                    <TextInput className={styles.field} type='tel' name='phone' placeholder='Контактный телефон' />
                  </div>
                  <div className={styles.actions}>
                    <Button className={styles.btn} mod='send' color='magenta' type='submit'>Отправить</Button>
                    <p className={styles.note}>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
                  </div>
                </form>
                <div className={cn(styles.success, { [styles.active]: success })}>
                  <Send className={styles.successIcon} />
                  <p className={styles.successTitle}>Ваша заявка принята и мы скоро свяжемся для уточнения деталей</p>
                  <Button className={styles.successBtn} mod='send' color='magenta' onClick={ctx.closeModal}>Ок, спасибо</Button>
                </div>
              </div>
            </div>
          )}
          <button className={styles.close} onClick={ctx.closeModal}></button>
        </div>
      </div>
    </div>
  )
}
