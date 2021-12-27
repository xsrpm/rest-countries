import { Link } from 'wouter'
import style from './style.module.css'
import { useCountry } from './useCountry'
export function Country({ params, styleTheme }) {
  const [countryData, setLocation, countryBorders] = useCountry(params.country)
  if (countryData === null) return <div>Loading...</div>
  return (
    <main className={style.Country}>
      <button
        className={styleTheme === 'light' ? '' : 'darkMode'}
        onClick={() => setLocation('/')}
      >
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
          <img src={countryData.flags.svg} alt={countryData.name.common} />
        </picture>
        <section>
          <h2>{countryData.name.common} </h2>
          <ul>
            <li>
              <span>Native Name: </span>
              <span>
                {Object.entries(countryData.name.nativeName).pop()[1].common}
              </span>
            </li>
            <li>
              <span>Population: </span>
              <span>{countryData.population}</span>
            </li>
            <li>
              <span>Region: </span>
              <span>{countryData.region}</span>
            </li>
            <li>
              <span>Sub Region: </span>
              <span>{countryData.subregion}</span>
            </li>
            <li>
              <span>Capital: </span>
              <span>{countryData.capital}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain: </span>
              <span>{countryData.tld}</span>
            </li>
            <li>
              <span>Currencies: </span>
              <span>
                {Object.values(countryData.currencies)
                  .map((elem) => elem.name)
                  .join(', ')}
              </span>
            </li>
            <li>
              <span>Languages: </span>
              <span>{Object.values(countryData.languages).join(', ')}</span>
            </li>
          </ul>
          {countryData.borders.length > 0 && (
            <div>
              <h3>Border Countries:</h3>
              <div>
                {countryBorders &&
                  countryBorders.map((country) => (
                    <Link
                      key={country.name.common}
                      href={'/country/' + country.name.common}
                    >
                      <a href=''>
                        <button
                          className={styleTheme === 'light' ? '' : 'darkMode'}
                        >
                          {country.name.common}
                        </button>
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </section>
      </article>
    </main>
  )
}
