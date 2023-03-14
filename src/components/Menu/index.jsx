import React, {useContext} from 'react';
import MenuContext from '../../context/MenuContext';
import styles from  './Menu.module.css';

export default function Menu() {

  const {open, setOpen} = useContext(MenuContext)
  const menuClass = open ? `${styles.menu} ${styles.active}` : `${styles.menu}`

  return (
    <div className={menuClass}>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
