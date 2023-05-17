import { fireEvent, render, screen } from '@testing-library/react';
import { Projects } from './Projects.page';

// TODO: the React Testing Library is for those taking a more user behavior-centric approach to testing
describe(Projects.name, () => {
    it(`should render ${Projects.name} page`, () => {
        const renderedProjects = render(<Projects />);
        const text = 'Treeconomy - {Application Name}';
        const headerElement = screen.getByText(text);

        expect(renderedProjects).toBeTruthy();
        expect(headerElement).toBeTruthy();
    });

    it(`should change the purchase button color after click`, () => {
        render(<Projects />);
        const button = screen
            .getAllByRole('button')
            .find((button) => button.innerHTML.includes('purchase'));
        fireEvent.click(button!);

        expect(
            screen
                .getAllByRole('button')
                .find((btn) =>
                    btn.classList.contains(
                        'MuiButton-containedError',
                    ),
                ),
        ).toBeTruthy();
        expect(
            screen
                .getAllByRole('button')
                .find((btn) => btn.innerHTML.includes('PURCHASED')),
        ).toBeTruthy();
    });

    it('should change the purchase button color to its normal after double click', () => {
        render(<Projects />);
        const button = screen
            .getAllByRole('button')
            .find((button) => button.innerHTML.includes('purchase'));
        fireEvent.doubleClick(button!);

        expect(
            screen
                .getAllByRole('button')
                .find((btn) =>
                    btn.classList.contains(
                        'MuiButton-containedPrimary',
                    ),
                ),
        ).toBeTruthy();
        expect(
            screen
                .getAllByRole('button')
                .find((btn) => btn.innerHTML.includes('purchase')),
        ).toBeTruthy();
    });
});
