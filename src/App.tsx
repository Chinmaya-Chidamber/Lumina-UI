import React from 'react'
import { InputField } from './components/InputField'
import { DataTable, type Column } from './components/DataTable'

type User = { id: number; name: string; email: string; role: string }

const data: User[] = [
  { id: 1, name: 'Chinmaya', email: 'Chinmaya@gmail.com', role: 'Admin' },
  { id: 2, name: 'Ritik', email: 'Ritik@gmail.com', role: 'User' },
  { id: 3, name: 'Bhuban', email: 'Bhuban@gmail.com', role: 'User' },
  { id: 4, name: 'Biswajit', email: 'Biswajit@gmail.com', role: 'Admin' },
  { id: 5, name: 'Bedika', email: 'Bedika@gmail.com', role: 'User' },
  { id: 6, name: 'Chandan', email: 'Chandan@gmail.com', role: 'User' },
  { id: 7, name: 'Bismay', email: 'Bismay@gmail.com', role: 'User' },
  { id: 8, name: 'Sneha', email: 'Sneha@gmail.com', role: 'User' },
  { id: 9, name: 'Adyasha', email: 'Adyasha@gmail.com', role: 'User' },  
]

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
]

export default function App() {
  const [query, setQuery] = React.useState('')
  const filtered = data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">Components Demo</h1>
        <p className="text-gray-600">InputField and DataTable</p>
      </header>

      <section className="space-y-3">
        <InputField
          label="Search Users"
          placeholder="Type a name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          helperText="Try: Chinmaya"
          variant="outlined"
          size="md"
        />
      </section>

      <section>
        <DataTable
          data={filtered}
          columns={columns}
          selectable
          onRowSelect={(rows) => console.log('Selected rows:', rows)}
        />
      </section>
    </div>
  )
}
