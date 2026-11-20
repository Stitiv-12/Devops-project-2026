import App from './App.tsx'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('App', () => {
    it('renders correctly input', () => {
        render(<App />)
        expect(screen.getByPlaceholderText("ajouter une nouvelle tache")).toBeInTheDocument();
    });

    it('updates newTache when entering text in the input', () => {
        render(<App />)

        const input = screen.getByPlaceholderText('ajouter une nouvelle tache')
        fireEvent.change(input, { target: { value: 'acheter du lait' } })

        expect(input).toHaveValue('acheter du lait')
    });
    
});
