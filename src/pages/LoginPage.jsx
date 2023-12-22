import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence
} from 'firebase/auth'
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
import { useToast } from '../components/ui/use-toast'
import { LoginSchema } from '../schemas/formSchemas'

const validationSchema = LoginSchema

const LoginForm = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values) => {
    try {
      const auth = getAuth()
      await setPersistence(auth, browserLocalPersistence)
      await signInWithEmailAndPassword(auth, values.email, values.password)
      navigate('/')
    } catch (error) {
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
          <p className="header-subtitle">Log in and get tracking!</p>
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
                    <Input className="rounded-md" placeholder="mail@example.com" {...field} />
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
            <div className="text-right">
              <Link to="/reset-password" className="form-link text-sm">
                Forgot password?
              </Link>
            </div>
            <Button className="form-button bg-secondary text-base hover:bg-primary" type="submit">
              Login
            </Button>

            <p className="form-small-text">
              If you don&apos;t have an account, please{' '}
              <Link className="form-link" to="/register">
                Sign up
              </Link>
              <span>.</span>
            </p>
          </form>
        </Form>
      </section>
    </main>
  )
}

export default LoginForm
