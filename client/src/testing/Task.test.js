//import { describe, test } from 'vitest';
import {render } from '@testing-library/react';
import { Nuevo } from '../components/Nuevo';


describe("probando", () => {
    test("Mostrando mensaje", () => {
        render(<Nuevo/>);
        expect(screen.getByText(/hola/i)).toBeInTheDocument();
    });
});
