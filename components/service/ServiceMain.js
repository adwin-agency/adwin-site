import SideMenu from '../app/SideMenu'
import menu from '/data/menu'

export default function ServiceMain({ children, category }) {
  const menuItems = menu[category]

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col col-6 col-lg-2'>
            <SideMenu items={menuItems} />
          </div>
          <div className='col col-6 col-lg-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}
