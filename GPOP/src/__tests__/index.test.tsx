import React from 'react';
import { render, screen } from '@testing-library/react';
import index from '../pages/index.tsx';

test('renders ExamplePage with Header and form', () => {
    render(<index />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
});