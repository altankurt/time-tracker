import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { useToast } from '../hooks/useToast'
import { RegisterSchema } from '../schemas/formSchemas'

const validationSchema = RegisterSchema

const Signup = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (values) => {
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, values.email, values.password)

      // toast({
      //   title: "Success",
      //   description: "Account created successfully! Welcome aboard!",
      // });

      navigate('/')
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error',
        description: error.message
      })
    }
  }

  return (
    <main className="main-layout bg-main-layout">
      <section className="form-container">
        <header className="text-center">
          <h1 className="header-title">TimeTune</h1>
          <p className="header-subtitle">Sign up and start your journey!</p>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="form-submit">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input className="rounded-md " placeholder="mail@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="rounded-md" placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md"
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md"
                      placeholder="Re-enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="form-button bg-secondary text-base hover:bg-primary" type="submit">
              Sign up
            </Button>
            <p className="m-8 text-center text-xs text-dark">
              By proceeding, you agree to our
              <Link className="form-link" to="/">
                {' '}
                Terms of Service
              </Link>{' '}
              and
              <Link className="form-link" to="/">
                {' '}
                Privacy Policy
              </Link>
              <span>.</span>
            </p>

            <p className="form-small-text">
              Already have an account?{' '}
              <Link className="form-link" to="/login">
                Sign in
              </Link>
            </p>
          </form>
        </Form>
      </section>
    </main>
  )
}

export default Signup
