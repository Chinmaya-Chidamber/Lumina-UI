import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField';
import React from 'react';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  args: {
    label: 'Label',
    placeholder: 'Type here',
    helperText: 'Helper text',
    variant: 'outlined',
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Basic: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required',
  }
}

export const Disabled: Story = {
  args: { disabled: true }
}

export const Loading: Story = {
  args: { loading: true }
}

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-4 w-80">
      <InputField {...args} variant="filled" label="Filled" />
      <InputField {...args} variant="outlined" label="Outlined" />
      <InputField {...args} variant="ghost" label="Ghost" />
    </div>
  )
}

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4 w-80">
      <InputField {...args} size="sm" label="Small" />
      <InputField {...args} size="md" label="Medium" />
      <InputField {...args} size="lg" label="Large" />
    </div>
  )
}

export const ClearAndPassword: Story = {
  args: {
    clearable: true,
    passwordToggle: true,
    type: 'password',
    label: 'Password',
    helperText: 'Try toggling visibility',
  }
}
