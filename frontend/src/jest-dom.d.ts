/// <reference types="@testing-library/jest-dom" />

import '@testing-library/jest-dom'

// Extend Jest matchers for both global Jest and @jest/globals
declare global {
  namespace jest {
    interface Matchers<R = void> {
      toBeInTheDocument(): R
      toHaveTextContent(text: string | RegExp): R
      toHaveAttribute(attr: string, value?: string): R
      toBeVisible(): R
      toBeDisabled(): R
      toBeEnabled(): R
      toHaveClass(...classNames: string[]): R
      toHaveStyle(css: string | Record<string, unknown>): R
      toHaveValue(value: string | number | string[]): R
      toBeChecked(): R
      toBePartiallyChecked(): R
      toHaveFocus(): R
      toBeRequired(): R
      toBeInvalid(): R
      toBeValid(): R
    }
  }
}

// Extend @jest/globals Matchers interface
declare module '@jest/globals' {
  interface Matchers<R = void> {
    toBeInTheDocument(): R
    toHaveTextContent(text: string | RegExp): R
    toHaveAttribute(attr: string, value?: string): R
    toBeVisible(): R
    toBeDisabled(): R
    toBeEnabled(): R
    toHaveClass(...classNames: string[]): R
    toHaveStyle(css: string | Record<string, unknown>): R
    toHaveValue(value: string | number | string[]): R
    toBeChecked(): R
    toBePartiallyChecked(): R
    toHaveFocus(): R
    toBeRequired(): R
    toBeInvalid(): R
    toBeValid(): R
  }
}

export {}

