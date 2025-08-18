import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type Column } from '../components/DataTable';
import React from 'react';

type User = { id: number; name: string; email: string; role: string }

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
]

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

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable<User>,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Basic: Story = {
  render: (args) => <DataTable<User> {...args} data={data} columns={columns} />
}

export const SortableAndSelectable: Story = {
  render: () => (
    <div className="p-6">
      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={(rows) => console.log(rows)}
      />
    </div>
  )
}

export const Loading: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} loading />
}

export const Empty: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} />
}
