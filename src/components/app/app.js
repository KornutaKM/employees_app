import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'Kirill', salary: 10000, increase: false, rise: false },
        { id: 2, name: 'Julik', salary: 8000, increase: false, rise: false },
        { id: 3, name: 'Mixa', salary: 8000, increase: false, rise: true },
        { id: 4, name: 'Damien', salary: 4000, increase: false, rise: false },
      ],
      term: '',
      filter: 'rise',
    }
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) }
    })
  }

  onAddNewUser = (user) => {
    this.setState(({ data }) => {
      return { data: [...data, user] }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item
      }),
    }))
  }
  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item
      }),
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => item.name.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise)
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000)
      default:
        return items
    }
  }
  onSelectFilter = (name) => {
    this.setState(({filter}) => {
      return {filter: name}
    })
  }
  render() {
    const { data, term, filter } = this.state
    let employees = data.length
    let increased = data.filter((item) => item.increase).length

    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    return (
      <div className='app'>
        <AppInfo data={data} employees={employees} increased={increased} />
        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onSelectFilter={this.onSelectFilter} filter={filter} />
        </div>
        <EmployeesList
          onDelete={(id) => this.onDelete(id)}
          onToggleIncrease={(id) => this.onToggleIncrease(id)}
          onToggleRise={(id) => this.onToggleRise(id)}
          data={visibleData}
        />
        <EmployeesAddForm onAddNewUser={(user) => this.onAddNewUser(user)} />
      </div>
    )
  }
}

export default App
