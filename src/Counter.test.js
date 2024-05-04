import { screen, fireEvent } from '@testing-library/react';
import Counter from "./components/counter/Counter";
import {renderWithProviders} from "./test-utils/test-utils";


describe('Counter component tests', () => {
    test('counter component starts from 0', () => {
        renderWithProviders(
            <Counter />
        )
        const countElement = screen.getByRole('heading', { level: 1 });
        expect(countElement.textContent).toBe('Il conteggio è: 0');
    });

    test('click on increment button sum 1 to current state', () => {
        renderWithProviders(
            <Counter />
        )

        const incrementButton = screen.getByText('Incrementa');
        const countElement = screen.getByRole('heading', { level: 1 });
        fireEvent.click(incrementButton)

        expect(countElement.textContent).toBe('Il conteggio è: 1');
    })

    test('increment then click on decrement to check if subtract 1 to state', () => {
        renderWithProviders(
            <Counter />
        )

        const incrementButton = screen.getByText('Incrementa');
        const decrementButton = screen.getByText('Decrementa');
        const countElement = screen.getByRole('heading', { level: 1 });
        fireEvent.click(incrementButton)

        expect(countElement.textContent).toBe('Il conteggio è: 1');

        fireEvent.click(decrementButton)
        expect(countElement.textContent).toBe('Il conteggio è: 0');
    })

    test('check if decrement prevent state to be negative', () => {
        renderWithProviders(
            <Counter />
        )

        const decrementButton = screen.getByText('Decrementa');
        const countElement = screen.getByRole('heading', { level: 1 });

        fireEvent.click(decrementButton)
        expect(countElement.textContent).toBe('Il conteggio è: 0');
    })
})




