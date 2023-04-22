import axios from "axios";
import Input from "@/components/input";
import { useCallback, useState } from "react";
import {signIn} from 'next-auth/react'
const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const togglevariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    },[]);
    const register = useCallback(async()=>{
        try{
            await axios.post('/api/register',{
                email,
                name,
                password
            })
        } catch (error){
            console.log(error)
        }
    }, [email, name, password]);
    const login = useCallback(async() => {
         try{
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            })
         }catch
            (error){
                console.log(error);
            }
         
    }, [email, password]);
    return (
    
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {" "}
            <div className="w-full h-full bg-black bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="self-center w-full px-16 py-16 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        <h2 className="mb-8 text-4xl font-semibold text-white">{variant=='login' ? 'Sign in':'Register'}</h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' &&(
                            <Input 
                        label="Username"
                        onchange={(ev: any)=>setName(ev.target.value)}
                        id="name"
                        type="name"
                        value={name} />
                        )}
                            <Input 
                        label="Email"
                        onchange={(ev: any)=>setEmail(ev.target.value)}
                        id="email"
                        type="email"
                        value={email} />
                            <Input 
                        label="Password"
                        onchange={(ev: any)=>setPassword(ev.target.value)}
                        id="password"
                        type="password"
                        value={password} />
                         </div>
                         <button onClick={variant == 'login' ? login : register } className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">{variant == 'login' ? 'Login' : 'Signup'}</button>
                         <p className="mt-12 text-neutral-500">
                            {variant =='login'? 'First time using Netflix?': 'Already have an account?'}
                            <span onClick={togglevariant} className="ml-1 text-white cursor-pointer hover:underline">
                                {variant =='login' ?  'Create An Account':'login'}
                            </span>
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
