import './app-filter.css'

const AppFilter = (props) => {
  let buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ]
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name
    const clazz = active ? 'btn-light' : 'btn-outline-light'

    return (
      <button
        type='button'
        className={`btn ${clazz}`}
        name={name}
        onClick={() => props.onSelectFilter(name)}
      >
        {label}
      </button>
    )
  })
  return <div className='btn-group'>{buttons}</div>
}

export default AppFilter
