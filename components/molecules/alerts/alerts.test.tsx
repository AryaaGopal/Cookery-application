import { render, screen } from '@testing-library/react';
import Alert from './alerts.component';

describe('Alert content rendering', () => {
  it('renders plain text content', () => {
    render(<Alert content="This is an alert" setAlertOpen={jest.fn()} />);
    expect(screen.getByText('This is an alert')).toBeInTheDocument();
  });

  it('renders JSX content', () => {
    render(
      <Alert
        content={
          <p>
            Message with <strong>bold</strong> text.
          </p>
        }
        setAlertOpen={jest.fn()}
      />
    );
    expect(screen.getByText(/Message with/i)).toBeInTheDocument();
    expect(screen.getByText(/bold/i)).toBeInTheDocument();
  });





  it('renders content with interactive elements', () => {
    render(
      <Alert
        content={<button onClick={() => {}}>Click me</button>}
        setAlertOpen={()=>false}
      />
    );
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });
  
});
