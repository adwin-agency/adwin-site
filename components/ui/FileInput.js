import { useRef, useState } from 'react'
import cn from 'classnames'
import Check from '/icons/check.svg'
import Clip from '/icons/clip.svg'
import Remove from '/icons/remove.svg'
import styles from './FileInput.module.scss'

export default function FileInput({ className, name }) {
  const [fileName, setFileName] = useState(null)
  const [fileSize, setFileSize] = useState(null)
  const [fileError, setFileError] = useState(null)

  const fileInputRef = useRef()

  function handleFileChange(e) {
    const file = e.target.files[0]

    if (file) {
      if (file.size > 1024 * 1024 * 50) {
        e.target.value = ''
        setFileName(null)
        setFileSize(null)
        setFileError('Превышен размер файла (50 Мб)')
        return
      }

      const size = (file.size < 1024 * 1024) ? Math.ceil(file.size / 1024) + ' Кб' : Math.ceil(file.size / 1024 / 1204) + ' Мб'

      setFileName(file.name)
      setFileSize(size)
      setFileError(null)
    } else {
      setFileName(null)
      setFileSize(null)
    }
  }

  function handleRemoveClick() {
    fileInputRef.current.value = ''
    setFileName(null)
    setFileSize(null)
  }

  return (
    <div className={className}>
      <label className={cn(styles.label, { [styles.hidden]: fileName })}>
        <input type='file' name={name} className={styles.input} onChange={handleFileChange} ref={fileInputRef} />
        <Clip className={styles.icon} />
        <span className={styles.title}>Прикрепить файл</span>
        <span className={styles.desc}>Если у несколько эскизов или наработок, их можно отправить одним архивом до&nbsp;50&nbsp;Мб</span>
        {fileError && <span className={styles.error}>{fileError}</span>}
      </label>
      {fileName && (
        <div className={styles.uploaded}>
          <Check className={styles.icon} />
          <span className={styles.title}>Файл загружен</span>
          <span className={styles.desc}>
            <span className={styles.name}>{fileName}</span>
            <span className={styles.size}>({fileSize})</span>
            <button type='button' className={styles.remove} onClick={handleRemoveClick}>
              <Remove className={styles.removeIcon} />
            </button>
          </span>
        </div>
      )}
    </div>
  )
}
