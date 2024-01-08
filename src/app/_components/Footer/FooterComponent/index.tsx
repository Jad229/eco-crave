'use client'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import classes from './index.module.scss'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../../../../payload/payload-types'
import { Button } from '../../Button'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  const navItems = footer?.navItems || []
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
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image
                src="/logo-ecocrave-sakura.png"
                alt="ecocrave sakura logo"
                width={170}
                height={50}
              />
            </Link>
            <p>{footer.copyright}</p>

            <div className={classes.socialLinks}>
              {navItems.map((item, idx) => {
                const icon = ' '

                return (
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    {item.link.label}
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
