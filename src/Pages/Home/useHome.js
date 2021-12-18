import { useState, useEffect } from 'https://cdn.skypack.dev/react@v17.0.1'
export function useHome(region) {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/' + region)
      .then((response) => response.json())
      .then((data) => {
        setInputSearch('')
        setCountries(data)
        setFilteredCountries(data)
      })
  }, [region])
  const onChangeInputSearch = (event) => {
    setInputSearch(event.target.value)
    setFilteredCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      })
    )
  }
  return [filteredCountries, onChangeInputSearch, inputSearch]
}
