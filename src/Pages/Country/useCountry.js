import { useLocation } from 'https://cdn.skypack.dev/wouter@2.7.5'
import { useState, useEffect } from 'https://cdn.skypack.dev/react@v17.0.1'

export function useCountry(country) {
  const [location, setLocation] = useLocation()
  const [countryData, setCountryData] = useState(null)
  const [countryBorders, setCountryBorders] = useState(null)
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
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
  }, [country])
  return [countryData, setLocation, countryBorders]
}