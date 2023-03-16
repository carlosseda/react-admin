import { useContext } from 'react'
import MenuContext from '../../context/MenuContext'
import styles from './HamburgerButton.module.css'

export default function HamburgerButton () {
  const { open, setOpen } = useContext(MenuContext)
  const hamburgerClass = open ? `${styles.hamburgerButton} ${styles.active}` : `${styles.hamburgerButton}`

  return (
    <div className={hamburgerClass} onClick={() => setOpen(!open)}>
      <button>
        <span />
      </button>
    </div>
  )
}
