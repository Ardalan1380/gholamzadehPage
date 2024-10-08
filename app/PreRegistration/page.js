import PreRegistrationPage from '@/components/template/PreRegistration/PreRegistrationPage';
import axios from 'axios';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

async function PreRegistrationRoute() {
  const cookieStore = cookies();
  const token = cookieStore.get("tokenG");
  const config = {
    headers: {
        'Authorization': `Bearer ${token.value}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};
  
if(token) {
  const res = await axios.get(`https://api.gholamzadeh.com/api/web/carRegister/createView` , {
    headers: config.headers 
  })
  // console.log(res.data.data.brands)
  return (
    <div>
        <PreRegistrationPage data={res.data.data.brands} />
    </div>
  )
}else {
  redirect('/login')
}
}

export default PreRegistrationRoute