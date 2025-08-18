import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable, type Column } from '../../components/DataTable'
import React from 'react'

type User = { id: number; name: string; email: string }

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
]

const data: User[] = [
  { id: 1, name: 'Ritik', email: 'b@gmail.com' },
  { id: 2, name: 'Chinmaya', email: 'a@gmail.com' },
]

describe('DataTable', () => {
  it('renders rows', () => {
    render(<DataTable<User> data={data} columns={columns} />)
    expect(screen.getByText('Ritik')).toBeInTheDocument()
    expect(screen.getByText('Chinmaya')).toBeInTheDocument()
  })

  it('sorts by column', () => {
    render(<DataTable<User> data={data} columns={columns} />)
    fireEvent.click(screen.getByRole('button', { name: /sort by name/i }))
    const cells = screen.getAllByRole('cell').map(el => el.textContent)
    expect(cells.join(' ')).toContain('Chinmaya')
  })
})
