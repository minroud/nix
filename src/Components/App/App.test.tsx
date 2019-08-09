import React from 'react';
import App from './App';
import { render } from '@testing-library/react'

describe('App wrapper', () => {
  it('Contains exactly one header', () => {
    const { container } = render(<App />);
    const statusBar = container.getElementsByTagName("ion-header")
    expect(statusBar.length).toBe(1)
  });

  it('Contains exactly one content-wrapper element', () => {
    const { container } = render(<App />);
    const statusBar = container.getElementsByTagName("ion-content")
    expect(statusBar.length).toBe(1)
  });
});
