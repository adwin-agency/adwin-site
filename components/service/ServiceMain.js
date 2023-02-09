export default function ServiceMain({ children }) {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'></div>
          <div className='col col-6 col-lg-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}
