import Link from 'next/link'
import Styles from '../Header/header.module.css'

export const Header = () => {
  return (
    <div>
      <h1 className= {Styles.h1}>My Next Project</h1>
    <nav>
        <ul className={Styles.ul}>
            <li className={Styles.li}><Link href="/">Home</Link></li>
            <li className={Styles.li}><Link href="/about" target='_blank'>About</Link></li>
            <li className={Styles.li}><Link href="/contact" target='_blank'>Contact</Link></li>
            <li className={Styles.li}><Link href="/services" target='_blank'>Services</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Header;