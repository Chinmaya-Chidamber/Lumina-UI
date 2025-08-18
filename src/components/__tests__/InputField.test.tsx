import { render, screen, fireEvent } from '@testing-library/react'
import { InputField } from '../../components/InputField'
import React from 'react'

describe('InputField', () => {
  it('renders label and helper', () => {
    render(<InputField label="Email" helperText="We never share it" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByText('We never share it')).toBeInTheDocument()
  })

  it('supports clearable', () => {
    const Wrapper = () => {
      const [v, setV] = React.useState('hello')
      return <InputField value={v} onChange={(e) => setV(e.target.value)} clearable />
    }
    render(<Wrapper />)
    fireEvent.click(screen.getByRole('button', { name: /clear/i }))
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('')
  })
})
