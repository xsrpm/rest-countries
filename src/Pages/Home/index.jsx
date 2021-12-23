import { CountryItem } from '../../Components/CountryItem'
import { Filter } from '../../Components/Filter'
import { Search } from '../../Components/Search'
import style from './style.module.css'
import { useHome } from './useHome'
import { Link } from 'wouter'

export function Home({ params, styleTheme }) {
  const [filteredCountries, onChangeInputSearch, inputSearch] = useHome(
    params.region
  )
  return (
    <main className={style.Home}>
      <Search
        inputSearch={inputSearch}
        onChange={onChangeInputSearch}
        styleTheme={styleTheme}
      />
      <Filter styleTheme={styleTheme} />
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
                styleTheme={styleTheme}
              />
            </a>
          </Link>
        ))}
      </ul>
    </main>
  )
}
