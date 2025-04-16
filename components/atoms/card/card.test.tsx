import { render,screen } from "@testing-library/react"
import Card from "./card.component"

describe("Card",()=>{
    it("renders card",()=>{
        render(<Card>Test</Card>)
        const Cardelement=screen.getByText("Test")
        expect(Cardelement).toBeInTheDocument()
    })
    it("Test wheather the card component has raised in it",()=>{
        const {getByTestId}=render(<Card raised>Test</Card>)
        const card=getByTestId('tailwind-card')
        expect(card).toHaveClass('bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 shadow-md hover:shadow-lg')
    })
    
    it('applies additional className when provided (lines 24–25)', () => {
        const { getByTestId } = render(<Card className="rounded-xl">Test</Card>);
        const card = getByTestId('tailwind-card');
        expect(card).toHaveClass('rounded-xl');
      });
})