import { CountryItem } from '../../Components/CountryItem'
import { Filter } from '../../Components/Filter'
import { Search } from '../../Components/Search'
import style from './style.module.css'
import { useHome } from './useHome'

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
          <CountryItem
            key={country.name.common}
            countryName={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
            styleTheme={styleTheme}
          />
        ))}
      </ul>
    </main>
  )
}
