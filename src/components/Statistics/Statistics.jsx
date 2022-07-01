import PropTypes from 'prop-types';
import GetRandomColor from 'helpers/GetRandomColor';
import css from './Statistics.module.css';

export default function Statistics ({ title, stats }) {

  return (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.list}>
    {stats.map(({id, label, percentage}) => (

      <li className={css.item}
        key={id}
        style={{backgroundColor: GetRandomColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    ))}
    </ul>
  </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
}