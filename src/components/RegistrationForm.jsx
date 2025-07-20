import React, { useState } from 'react'
import {useForm} from 'react-hook-form'


const RegistrationForm = () => {
    const [submitted,setSubmitted]=useState(false)

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState :{errors , isSubmitSuccessful}
    } =useForm()

    const onSubmit=(data)=>{

        if(data.password !== data.confirmPassword){
            alert("Password do not match")
            return
        }
        console.log("Form Data",data)
        setSubmitted(true)
        // alert("Registered Successfully")
        reset()
    }

    const password =watch("password")




  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
            placeholder='Full Name'
            {...register('name',{required :"Full Name is required"})}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input type="email"
            placeholder='xyz@gmail.com'
            {...register('email',{required:"Email is Required",
                pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:'Enter a Valid Email'
                }
                
            })

            }
            />
            {errors.email && <p>{errors.email.message}</p>}




            <input type="password"
            placeholder='Enter Password'
            {...register("password",
                {required :"Password is Required",
                minLength :{
                    value:6,
                    message:"Minimum 6 Charactor"
                }
                }

            )}
            
            
            />
            {errors.password && <p>{errors.password.message}</p>}



            <input type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword",
                {required:"Please confirm Password",
                    validate : (value) =>
                        value === watch ('password') || "Password do not Match"


                }
            )}
            
            
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

            <button type='submit'>register</button>



        </form>

        {isSubmitSuccessful && (
            <p className='text-green-400'>Register Successfully</p>
        )}
        
      
    </div>
  )
}

export default RegistrationForm
