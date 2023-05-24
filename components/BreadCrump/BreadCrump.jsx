"use client"
import {usePathname} from 'next/navigation'
import PropTypes from 'prop-types'

const BreadCrump = props => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <section>
        <div className='container mx-auto py-4'>
            BREADCRUMP
        </div>
    </section>
  )
}

BreadCrump.propTypes = {}

export default BreadCrump