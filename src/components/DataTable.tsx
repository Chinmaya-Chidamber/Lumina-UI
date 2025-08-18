import React from 'react'

export interface Column<T> {
  key: string
  title: string
  dataIndex: keyof T
  sortable?: boolean
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  onRowSelect?: (selectedRows: T[]) => void
  emptyText?: string
}

export function DataTable<T extends { id?: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  emptyText = 'No data',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(null)
  const [sortAsc, setSortAsc] = React.useState(true)
  const [selected, setSelected] = React.useState<Set<string | number>>(new Set())

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortAsc((s) => !s)
    } else {
      setSortKey(key)
      setSortAsc(true)
    }
  }

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data
    const col = columns.find((c) => c.key === sortKey)
    if (!col) return data
    const copy = [...data]
    copy.sort((a: any, b: any) => {
      const av = a[col.dataIndex]
      const bv = b[col.dataIndex]
      if (av == null && bv == null) return 0
      if (av == null) return sortAsc ? -1 : 1
      if (bv == null) return sortAsc ? 1 : -1
      if (typeof av === 'number' && typeof bv === 'number') {
        return sortAsc ? av - bv : bv - av
      }
      return sortAsc
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av))
    })
    return copy
  }, [data, columns, sortKey, sortAsc])

  const allSelected = selectable && data.length > 0 && selected.size === data.length

  function toggleAll() {
    if (!selectable) return
    if (allSelected) {
      setSelected(new Set())
      onRowSelect?.([])
    } else {
      const all = new Set((sortedData as any[]).map((r) => r.id).filter(Boolean))
      setSelected(all as any)
      onRowSelect?.(sortedData.filter((r: any) => r.id != null) as T[])
    }
  }

  function toggleRow(id: string | number, row: T) {
    if (!selectable) return
    const next = new Set(selected)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelected(next)
    onRowSelect?.(sortedData.filter((r: any) => r.id != null && next.has(r.id)) as T[])
  }

  return (
    <div className="w-full border rounded-xl overflow-hidden bg-white dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {selectable && (
                <th className="p-3 w-10">
                  <input
                    type="checkbox"
                    aria-label="Select all rows"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {columns.map((col) => {
                const isActive = sortKey === col.key
                const ariaSort = !col.sortable
                  ? 'none'
                  : isActive
                  ? (sortAsc ? 'ascending' : 'descending')
                  : 'none'
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className="text-left p-3 font-medium text-gray-900 dark:text-white select-none"
                    aria-sort={ariaSort as any}
                  >
                    {col.sortable ? (
                      <button
                        type="button"
                        onClick={() => handleSort(col.key)}
                        className="inline-flex items-center gap-1 underline focus:outline-none"
                        aria-label={`Sort by ${col.title}`}
                      >
                        {col.title}
                        {isActive ? (sortAsc ? '▲' : '▼') : ''}
                      </button>
                    ) : (
                      col.title
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900">
            {loading ? (
              <tr>
                <td
                  className="p-6 text-center text-gray-500 dark:text-white"
                  colSpan={columns.length + (selectable ? 1 : 0)}
                >
                  Loading...
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr>
                <td
                  className="p-6 text-center text-gray-500 dark:text-white"
                  colSpan={columns.length + (selectable ? 1 : 0)}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              sortedData.map((row: any, idx) => {
                const id = row.id ?? idx
                const isSelected = selectable && selected.has(id)
                return (
                  <tr
                    key={id}
                    aria-selected={isSelected || undefined}
                    className={`border-t hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      isSelected ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}
                  >
                    {selectable && (
                      <td className="p-3">
                        <input
                          type="checkbox"
                          aria-label={`Select row ${idx + 1}`}
                          checked={isSelected}
                          onChange={() => toggleRow(id, row)}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td key={col.key} className="p-3 text-gray-900 dark:text-white">
                        {String(row[col.dataIndex] ?? '')}
                      </td>
                    ))}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
