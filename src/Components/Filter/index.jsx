import { Link, useLocation } from 'wouter'
import style from './style.module.css'

export function Filter({ styleTheme }) {
  const [location, setLocation] = useLocation()
  let region
  if (location !== '/') {
    region = location.slice(8)
    region = region[0].toUpperCase() + region.slice(1)
  }

  return (
    <div className={style.filter}>
      <div
        className={
          'element ' +
          style.width200 +
          ' ' +
          style.buttonFilter +
          ' ' +
          (styleTheme === 'light' ? '' : 'darkMode')
        }
      >
        {location === '/' ? (
          <span>Filter by Region</span>
        ) : (
          <span>{region}</span>
        )}

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z' />
        </svg>
      </div>
      <ul
        className={
          'element ' +
          style.width200 +
          ' ' +
          style.listFilter +
          ' ' +
          (styleTheme === 'light' ? '' : 'darkMode')
        }
      >
        <Link href='/'>
          <li>All</li>
        </Link>
        <Link href='/region/africa'>
          <li>Africa</li>
        </Link>
        <Link href='/region/america'>
          <li>America</li>
        </Link>
        <Link href='/region/asia'>
          <li>Asia</li>
        </Link>
        <Link href='/region/europe'>
          <li>Europa</li>
        </Link>
        <Link href='/region/oceania'>
          <li>Oceania</li>
        </Link>
      </ul>
    </div>
  )
}
