/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signInSchema, FormData } from './signin.schema';
import Field from '@/components/atoms/field/field.component';
import Button from '@/components/atoms/button/button.component';
import Card from '@/components/atoms/card/card.componet';
import Alert from '@/components/atoms/alerts/alerts.component';
import Image from 'next/image';

const SignIn: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [formError, setFormError] = useState<boolean>(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const { email: emailError, password: passwordError } = errors;

  const handleFormError = (): void => {
    setFormError(false);
  };


  const onSubmit = async (data: FormData) => {
    const signinData: FormData = {
      email: data.email,
      password: data.password,
    };

    const success = true;
    if (success) {
      router.push('/dashboard');
    }
  };
  
  const handleChangeRoute = (event: React.MouseEvent, route: string): void => {
    event.preventDefault();
    router.push( route);
  };

  return (
         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-orange-200 px-4">
                <Card className="w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-sm space-y-6">
  <div className="flex justify-center mb-4">
    <Image
      src="/cookery.jpg"
      alt="cookery"
      width={120}
      height={20}
      className="object-contain"
    />
  </div>

  <div className="text-center mb-2">
    <h2 className="text-2xl font-semibold text-gray-800">Sign in to your account</h2>
  </div>

            {formError && (
             <div className="mb-4">
             <Alert
               setAlertOpen={handleFormError}
               content="INCORRECT_EMAIL_OR_PASSWORD"
               severity="error"
             />
           </div>
            )}

            <div>
              <Field
                {...register('email')}
                placeholder="Email"
                error={!!emailError}
                helperText={emailError?.message}
              />
            </div>

            <div>
              <Field
                {...register('password')}
                type="password"
                placeholder="Password"
                error={!!passwordError}
                helperText={passwordError?.message}
              />
            </div>

            <div className="flex justify-center">
  <Button
    type="submit"
    disabled={!isValid || isSubmitting}
    className={`
      w-full max-w-sm 
      bg-green-600 
      text-white 
      hover:bg-blue-700 
      disabled:bg-gray-300 
      rounded-xl 
      py-2 px-4 
      transition duration-300 ease-in-out
    `}
  >
    Submit
  </Button>
</div>


            <div className="text-center">
              <button
                type="button"
                onClick={(e) => handleChangeRoute(e, '/forgot-password')}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default SignIn;
