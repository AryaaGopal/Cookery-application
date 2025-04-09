import Button from "./button.component"
import { render ,screen} from '@testing-library/react';


describe("Button component",()=>{
    it("renders button",()=>{
        render(<Button>clickme</Button>)
        const buttonElement = screen.getByText('clickme');
        expect(buttonElement).toBeInTheDocument();    })
        it("check if button has full width property",()=>{
            const button=render(<Button fullWidth></Button>).getByRole('button')
            expect(button).toHaveClass('w-full')
        })
})