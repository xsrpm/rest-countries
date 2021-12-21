import { CountryItem } from '../../Components/CountryItem'
import { Filter } from '../../Components/Filter'
import { Search } from '../../Components/Search'
import style from './style.module.css'
import { useHome } from './useHome'
import { Link } from 'https://cdn.skypack.dev/wouter@2.7.5'

export function Home({ params }) {
  const [filteredCountries, onChangeInputSearch, inputSearch] = useHome(
    params.region
  )
  return (
    <main className={style.Home}>
      <Search inputSearch={inputSearch} onChange={onChangeInputSearch} />
      <Filter />
      <ul className={style.ulList}>
        {filteredCountries.map((country) => (
          <Link
            key={country.name.common}
            href={'/country/' + country.name.common}
          >
            <a href=''>
              <CountryItem
                countryName={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </a>
          </Link>
        ))}
      </ul>
    </main>
  )
}
