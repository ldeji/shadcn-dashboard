"use client" // 1. This is required because forms need user interaction
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 2. THE SCHEMA (The Rules) and This acts like a "Bouncer" at a club. It checks IDs.
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})


export default function LoginForm() {
  // 3. THE HOOK (The Logic) and This connects your form to the rules above.
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {email: "", password: "",
    },
  })

  // 4. THE HANDLER (What happens on success)
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to your database
      // Logic to check password would go here...
  // For now, we just redirect:
     router.push("/dashboard")
    
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 text-center h-screen bg-light-gray">
      {/* We use a Card to make it look nice */}
      <p className="text-2xl md:text-xl text-medical-blue-1 font-extrabold mb-4">Welcome to Doctor Akano's Clinic</p>
      <Card className="w-90 h-90 shadow-lg bg bg-slate-900 border border-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-light-gray">Login</CardTitle>
        </CardHeader>
        <CardContent>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* EMAIL FIELD */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-light-gray">Email</FormLabel>
                    <FormControl>
                      <Input className="text-light-gray" placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage /> {/* This shows the red error text */}
                  </FormItem>
                )}
              />

              {/* PASSWORD FIELD */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-light-gray">Password</FormLabel>
                    <FormControl>
                      <Input className="text-light-gray" type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-medical-blue-1 hover:bg-medical-2 text-light-gray transition-all duration-300 hover:-translate-y-1">
                Sign In
              </Button>
            </form>
          </Form>

        </CardContent>
      </Card>
    </div>
  )
}
