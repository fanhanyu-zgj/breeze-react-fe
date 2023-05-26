import React, { useEffect } from 'react'
import useAuthContext from '../context/AuthContext';

export const Home = () => {
const {user,getUser}=useAuthContext();
useEffect(()=>{
  if(!user){
    getUser()
  }
},[]);
  return (
    <div className='max-w-7xl mx-auto mt-12'>{user?.name}87987</div>
  )
}
