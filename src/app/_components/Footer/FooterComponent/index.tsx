'use client'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import classes from './index.module.scss'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

const FooterComponent = () => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, idx) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}></div>
    </footer>
  )
}

export default FooterComponent
