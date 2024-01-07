import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Image from 'next/image'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Headerder }) => {
  return (
    <nav className={[classes.header]}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-ecocrave-sakura.png" alt="ecocrave logo" width={70} height={70} />
        </Link>

        <HeaderNav></HeaderNav>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
