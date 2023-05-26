import { createContext,useContext,useState } from "react"

import axios from "../api/axios";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [errors,setErrors]=useState([]);
    const navigate=useNavigate()
    const csrf=()=>axios.get('/sanctum/csrf-cookie')
    const getUser=async()=>{
        const {data}=await axios.get('/api/user');
        setUser(data)
    }
    const login = async({...data})=>{
        await csrf();
        try{
            await axios.post("/login",data);
            await  getUser();
            navigate("/");
          }catch(e){
            if(e.response.status==422){
              setErrors(e.response.data.errors)
            }
            console.log(e);
          }
    }
    const register = async({...data})=>{
    await csrf();
    try{
      await axios.post("/register",data);
      await getUser();
      navigate("/");
    }catch(e){
      if(e.response.status==422){
        setErrors(e.response.data.errors)
      }
      console.log(e);
    }
    }

    const logout=()=>{
      axios.post("/logout").then(()=>{
        setUser(null);
      })
    }

    const resetPassword = async({...data})=>{
      await csrf();
      try{
        await axios.post("/register",data);
        await getUser();
        navigate("/");
      }catch(e){
        if(e.response.status==422){
          setErrors(e.response.data.errors)
        }
        console.log(e);
      }
      }

    return <AuthContext.Provider value={{user,errors,getUser,login,register,logout}}>
    {children}
    </AuthContext.Provider>
}
    export default function useAuthContext(){
        return useContext(AuthContext)
    }
