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
        <li>
          <Link href='/'>All </Link>
        </li>

        <li>
          <Link href='/region/africa'>Africa </Link>
        </li>

        <li>
          <Link href='/region/america'>America</Link>
        </li>

        <li>
          <Link href='/region/asia'>Asia</Link>
        </li>

        <li>
          <Link href='/region/europe'>Europa</Link>
        </li>

        <li>
          <Link href='/region/oceania'>Oceania</Link>
        </li>
      </ul>
    </div>
  )
}
