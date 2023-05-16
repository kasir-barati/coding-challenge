import { render } from '@testing-library/react';
import App from './App';

describe(App.name, () => {
    it(`should render ${App.name}`, () => {
        const renderedApp = render(<App />);
        expect(renderedApp).toBeTruthy();
    });
});
