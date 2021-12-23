import { useState, useEffect } from 'https://cdn.skypack.dev/react@v17.0.1'
import { Link, useLocation } from 'https://cdn.skypack.dev/wouter@2.7.5'
import style from './style.module.css'
export function Country({ params }) {
  const [location, setLocation] = useLocation()
  const [countryData, setCountryData] = useState(null)
  const [countryBorders, setCountryBorders] = useState(null)
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0])
        /** begin country borders fetch */
        if (data[0].borders) {
          fetch(
            `https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join()}`
          )
            .then((res) => res.json())
            .then((borders) => {
              setCountryBorders(borders)
            })
        }
        /** end country borders fetch */
      })
  }, [params])
  if (countryData === null) return <div>Loading...</div>
  return (
    <main className={style.Country}>
      <button onClick={() => setLocation('/')}>
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
          {countryData.borders && (
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
                        <button>{country.name.common}</button>
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
