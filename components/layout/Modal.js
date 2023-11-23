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
import { useFormik } from 'formik'
import * as yup from 'yup';
import UTMContext from '../../context/UtmContext'

const validationSchema = yup.object().shape({
  name: yup.string().required('Введите ваше имя').min(2, 'Введите корректное имя'),
  phone: yup.string().required('Введите контактный телефон').min(16, 'Введите корректный номер телефона'),
  email: yup.string().email('Введите корректный email'),
  company: yup.string().nullable(),
  service: yup.array().nullable(),
  description: yup.string().nullable(),
  file: yup.mixed().nullable(),
})

export default function Modal() {
  const ctx = useContext(AppContext)
  const { utmParams } = useContext(UTMContext)

  const { activeModal, closingModal } = ctx
  const [activeAbout, setActiveAbout] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: [],
    description: '',
    file: null,
    // ...utmParams
  });

  const modalRef = useRef()
  const aboutRef = useRef()


  function toggleAbout() {
    if (activeAbout) {
      aboutRef.current.style.height = ''
      setActiveAbout(false)
    } else {
      aboutRef.current.style.height = aboutRef.current.scrollHeight + 'px'
      setActiveAbout(true)
    }
  }

  const formik = useFormik({
    initialValues: formValues,
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();

      for (const field in values) {
        if (field === 'file') {
          const files = values.file;
          if (files && files.length) {
            for (let i = 0; i < files.length; i++) {
              formData.append('file', files[i]);
            }
          }
        } else {
          formData.append(field, values[field]);
        }
      }

      const comagicData = window.Comagic ? window.Comagic.getCredentials() : null;
      for (const item in comagicData) {
        if (comagicData.hasOwnProperty(item)) {
          formData.append(item, comagicData[item]);
        }
      }

      for (const param in utmParams) {
        formData.append(param, utmParams[param]);
      }

      fetch('/send.php', {
        method: 'POST',
        body: formData,
      })
        .then((data) => {
          window.ym && window.ym('93715079', 'reachGoal', 'lead');
          formik.resetForm();
          ctx.openPopup();
          ctx.closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })


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
              <form className={styles.form} onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                <p className='h3'>Оставить заявку</p>
                <div className={styles.fields}>
                  <TextInput
                    className={`${styles.field}`}
                    name='name'
                    placeholder='Ваше имя'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && formik.errors.name}
                  />
                  <TextInput
                    className={`${styles.field}`}
                    type='tel'
                    name='phone'
                    placeholder='Контактный телефон'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && formik.errors.phone}
                  />
                  <TextInput
                    className={styles.field}
                    type='email'
                    name='email'
                    placeholder='Mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                  />
                  <TextInput
                    className={styles.field}
                    name='company'
                    placeholder='Сайт'
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
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
                          <CheckBox
                            className={styles.box}
                            name='service'
                            value='Реклама'
                            title='Реклама'
                            checked={formik.values.service.includes('Реклама')}
                            onChange={formik.handleChange}
                          />
                          <CheckBox
                            className={styles.box}
                            name='service'
                            value='Разработка'
                            title='Разработка'
                            checked={formik.values.service.includes('Разработка')}
                            onChange={formik.handleChange}
                          />
                          <CheckBox
                            className={styles.box}
                            name='service'
                            value='Брендинг'
                            title='Брендинг'
                            checked={formik.values.service.includes('Брендинг')}
                            onChange={formik.handleChange}
                          />
                          <CheckBox
                            className={styles.box}
                            name='service'
                            value='Хочу всё и сразу'
                            title='Хочу всё и сразу'
                            checked={formik.values.service.includes('Хочу всё и сразу')}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className={styles.additional}>
                          <TextInput
                            className={styles.textarea}
                            textarea
                            name='description'
                            title='Опишите задачу'
                            placeholder='Опишите, чем занимается ваша компания и как мы можем вам помочь. Можете рассказать о желаемых сроках или на какой бюджет рассчитываете...'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <FileInput
                            name='file'
                            className={styles.file}
                            onChange={(e) => formik.setFieldValue('file', Array.from(e.target.files))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Button
                    className={`${styles.btn} ${(!(formik.isValid && !!formik.values.phone.length)) ? styles.disabled : ''}`}
                    mod='send'
                    color='magenta'
                    type='submit'
                    disabled={!(formik.isValid && !!formik.values.phone.length)}
                  >
                    Отправить
                  </Button>
                  <p className={styles.note}>
                    Нажав на кнопку, соглашаюсь c
                    <a href="/policy.pdf" target='_blank' className={styles.policy}> Политикой конфиденциальности</a>
                  </p>
                </div>
              </form>
            </div>
          )}
          {activeModal === 'callback' && (
            <div className={styles.callback}>
              <div className={styles.inner}>
                <form className={cn(styles.form, { [styles.disabled]: success })} onSubmit={formik.handleSubmit}>
                  <p className='h3'>Обратный звонок</p>
                  <div className={styles.fields}>
                    <TextInput
                      className={`${styles.field}`}
                      name='name'
                      placeholder='Ваше имя'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && formik.errors.name}
                    />
                    <TextInput
                      className={`${styles.field}`}
                      type='tel'
                      name='phone'
                      placeholder='Контактный телефон'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && formik.errors.phone}
                    />
                  </div>
                  <div className={styles.actions}>
                    <Button
                      className={`${styles.btn} ${(!(formik.isValid && !!formik.values.phone.length)) ? styles.disabled : ''}`}
                      mod='send'
                      color='magenta'
                      type='submit'
                      disabled={!(formik.isValid && !!formik.values.phone.length)}
                    >
                      Отправить
                    </Button>
                    <p className={styles.note}>
                      Нажав на кнопку, соглашаюсь c
                      <a href="/policy.pdf" target='_blank' className={styles.policy}> Политикой конфиденциальности</a>
                    </p>
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
