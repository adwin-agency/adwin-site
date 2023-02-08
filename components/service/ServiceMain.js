export default function ServiceMain({ children }) {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col col-6'></div>
          <div className='col col-6'>{children}</div>
        </div>
      </div>
    </div>
  )
}
