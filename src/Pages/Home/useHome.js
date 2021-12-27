import { useState, useEffect } from 'react'
export function useHome(region) {
  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [inputSearch, setInputSearch] = useState('')
  useEffect(() => {
    let cad = ''
    if (region) cad = `https://restcountries.com/v3.1/region/${region}`
    else cad = 'https://restcountries.com/v3.1/all'
    cad = cad + '?fields=name,flags,capital,population,region'
    fetch(cad)
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
