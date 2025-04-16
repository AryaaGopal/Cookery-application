import {  render } from "@testing-library/react"
import Field from "./field.component"

describe("Field",()=>{
    it("render field",()=>{
       const {getByPlaceholderText}= render(<Field placeholder="emailAdress"></Field>)
         const FieldElement=getByPlaceholderText("emailAdress")
                expect(FieldElement).toBeInTheDocument()
    })
    it("render field with input props",()=>{
        const {getByPlaceholderText}= render(<Field disabled placeholder="emailAdress"></Field>)
          const FieldElement=getByPlaceholderText("emailAdress")
                 expect(FieldElement).toHaveClass("w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 cursor-not-allowed")
     })
     it("render field with erros",()=>{
        const {getByPlaceholderText}= render(<Field error placeholder="emailAdress"></Field>)
          const FieldElement=getByPlaceholderText("emailAdress")
                 expect(FieldElement).toHaveClass("w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-red-500")
     })
     it("render field with helpertext",()=>{
        const {getByText}= render(<Field helperText="error" placeholder="emailAdress"></Field>)
          const FieldElement=getByText("error")
                 expect(FieldElement).toHaveClass('text-xs')
     })
     it('applies  text style when error is true', () => {
        const { getByText } = render(<Field name="email" helperText="Required" error />);
        const helper = getByText('Required');
        expect(helper).toHaveClass('text-red-500');
      });
})