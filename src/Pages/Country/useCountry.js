import { useLocation } from 'wouter'
import { useState, useEffect } from 'react'

export function useCountry(country) {
  const [location, setLocation] = useLocation()
  const [countryData, setCountryData] = useState(null)
  const [countryBorders, setCountryBorders] = useState(null)
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0])
        /** begin country borders fetch */
        if (data[0].borders.length > 0) {
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
  }, [country])
  return [countryData, setLocation, countryBorders]
}
