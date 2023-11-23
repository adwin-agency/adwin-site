import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import Button from '../ui/Button'
import CheckBox from '../ui/CheckBox'
import FileInput from '../ui/FileInput'
import TextInput from '../ui/TextInput'
import styles from './ContactForm.module.scss'
import { useFormik } from 'formik'
import * as yup from 'yup';
import UTMContext from '../../context/UtmContext'

const validationSchema = yup.object().shape({
  name: yup.string().required('Введите ваше имя').min(2, 'Введите корректное имя'),
  phone: yup.string().required('Введите контактный телефон').min(16, 'Введите корректный номер телефона'),
  email: yup.string().email('Введите корректный email'),
});

export default function ContactForm() {
  const ctx = useContext(AppContext);
  const { utmParams } = useContext(UTMContext);

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: [],
    description: '',
    file: null,
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
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
          resetForm();
          ctx.openPopup();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section className={styles.el}>
      <div className={styles.side}>
        <h3 className='h3'>Если у вас остались вопросы или хотите обсудить проект — напишите нам :)</h3>
      </div>
      <div className={styles.main}>
        <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
          <div className={styles.contacts}>
            <p className={styles.title}>Ваши контакты</p>
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
          </div>
          <div className={styles.about}>
            <p className={styles.title}>О проекте</p>
            <div className={styles.inputs}>
              <div className={styles.boxes}>
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
                  onBlur={formik.handleBlur}
                  error={formik.touched.file && formik.errors.file}
                />
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
            <p className={styles.note}>Нажав на кнопку, соглашаюсь на обработку персональных данных</p>
          </div>
        </form>
      </div>
    </section>
  )
}
