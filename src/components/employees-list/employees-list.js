import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  return (
    <ul className='app-list list-group'>
      {data.map((item) => (
        <EmployeesListItem
          onToggleIncrease={() => onToggleIncrease(item.id)}
          onToggleRise={() => onToggleRise(item.id)}
          onDelete={() => onDelete(item.id)}
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  )
}

export default EmployeesList
