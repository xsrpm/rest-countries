import style from './style.module.css'
export function Country() {
  return (
    <main className={style.Country}>
      <button className='button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z' />
        </svg>
        Back
      </button>
      <article>
        <picture>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg'
            alt='Perú'
          />
        </picture>
        <section>
          <h2>Belgium</h2>
          <ul>
            <li>
              <span>Native Name: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Population: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Region: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Sub Region: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Capital: </span>
              <span>Lorem ipsum dolor</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Currencies: </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li>
              <span>Languages: </span>
              <span>Lorem ipsum dolor</span>
            </li>
          </ul>
          <div>
            <h3>Border Countries:</h3>
            <div>
              <button className='button'>France</button>
              <button className='button'>Germany</button>
              <button className='button'>Netherlands</button>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
