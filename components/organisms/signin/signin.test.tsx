
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { act } from 'react';
import SignIn from './signin-component';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
  }));
  



describe('SignIn Component', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the sign-in form', () => {
    render(<SignIn />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<SignIn />);
    fireEvent.click(screen.getByText(/submit/i));

    
  });

  it('navigates to /dashboard on successful sign in', async () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<SignIn />);

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByText(/Submit/i);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(push).toHaveBeenNthCalledWith(1, '/dashboard');
  });

  it('navigates to forgot-password page on link click', async () => {
    render(<SignIn />);
    const forgotPasswordButton = screen.getByText(/forgot password/i);

    await act(async () => {
      fireEvent.click(forgotPasswordButton);
    });

  });
});
