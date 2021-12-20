import style from './style.module.css'

export function CountryItem({
  countryName,
  flag,
  population,
  region,
  capital
}) {
  return (
    <article
      className={
        'element ' +
        style.CountryItem +
        ' ' +
        style.height336 +
        ' ' +
        style.width264
      }
    >
      <picture>
        <img
          className={style.width264 + ' ' + style.height160}
          src={flag}
          alt={'Flag of ' + countryName}
        />
      </picture>
      <section>
        <h2>{countryName}</h2>
        <p>
          <span>Population: </span>
          <span>{population}</span>
        </p>
        <p>
          <span>Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span>{capital}</span>
        </p>
      </section>
    </article>
  )
}
