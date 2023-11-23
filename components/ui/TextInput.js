import cn from 'classnames'
import styles from './TextInput.module.scss'

export default function TextInput({
  className,
  type,
  textarea,
  title,
  name,
  placeholder,
  onChange,
  onBlur,
  value
}) {

  function onInput(e) {
    if (e.target.type === 'tel') {
      let val = e.target.value.replace(/\D/g, '')

      if (val) {
        if (val[0] === '7' || val[0] === '8') {
          val = val.slice(1)
        }

        val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        val = '+7' + (val[2] ? '(' + val[1] + ')' + val[2] : (val[1] ? val[1] : '')) + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '')
      }

      e.target.value = val
    }
  }

  let input = (
    <input
      type={type || 'text'}
      value={value}
      name={name}
      placeholder={placeholder}
      className={styles.input}
      onInput={onInput}
      onBlur={onBlur}
      onChange={onChange}
    />
  )

  if (textarea) {
    input = (
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        className={cn(styles.input, styles.textarea)}
      ></textarea>
    )
  }

  return (
    <div className={cn(styles.el, className)}>
      {title && <p className={styles.title}>{title}</p>}
      {input}
    </div>
  )
}
