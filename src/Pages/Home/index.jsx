import { CountryItem } from '../../Components/CountryItem'
import { Filter } from '../../Components/Filter'
import { Search } from '../../Components/Search'
import style from './style.module.css'
import { useHome } from './useHome'

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
          <CountryItem
            key={country.name.common}
            countryName={country.name.common}
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
