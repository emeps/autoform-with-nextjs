"use client"
import AutoForm, {AutoFormSubmit} from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button';
import * as z from 'zod';


export default function Home() {
  return (
    <div className='flex min-h-screen w-full py-12 justify-center'>
      <AutoForm
        formSchema={z.object({
          name: z.string().min(3).max(255),
          terms: z.boolean(),
          password: z.string().min(8).max(255),
        })}
        fieldConfig={{
          password:{
            inputProps:{
              type:"password",
              placeholder:"Password",
              autoComplete:"new-password",
            }, 
          },
          terms:{
            fieldType:'switch',
            description: 'I agree to the terms and conditions'
          }
        }}>
        <Button>Submit</Button>
    </AutoForm>
    </div>
  )
}
