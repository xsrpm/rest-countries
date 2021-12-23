import { useRef } from 'https://cdn.skypack.dev/react@v17.0.1'
import { Link } from 'https://cdn.skypack.dev/wouter@2.7.5'
import style from './style.module.css'

export function Filter({ styleTheme }) {
  return (
    <article className={style.filter}>
      <section
        className={
          'element ' +
          style.width200 +
          ' ' +
          style.buttonFilter +
          ' ' +
          (styleTheme === 'light' ? '' : 'darkMode')
        }
      >
        <span>Filter by Region</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z' />
        </svg>
      </section>
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
          <Link href='/'>Africa</Link>
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
    </article>
  )
}
