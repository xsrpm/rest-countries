import { useState, useEffect } from 'https://cdn.skypack.dev/react@v17.0.1'
import { CountryItem } from '../../Components/CountryItem'
import { Filter } from '../../Components/Filter'
import { Search } from '../../Components/Search'
import style from './style.module.css'

export function Home({ params }) {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/' + params.region)
      .then((response) => response.json())
      .then((data) => setCountries(data))
  }, [params])
  return (
    <main>
      <Search />
      <Filter />
      <ul className={style.ulList}>
        {countries.map((country) => (
          <CountryItem
            key={country.name.official}
            countryName={country.name.official}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </ul>
    </main>
  )
}
