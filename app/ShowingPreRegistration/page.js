import ShowingResultPage from '@/components/template/showingResult/ShowingResult'
import axios from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

async function ShowingPreRegistrationRoute() {
    const cookieStore = cookies();
    const token = cookieStore.get("tokenG");

    if(token) {
        const config = {
            headers: {
                'Authorization': `Bearer ${token.value}`,
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        const res = await axios.get('https://api.gholamzadeh.com/api/web/carRegister/show' , {
            headers:config.headers
        })
        console.log(res)
        return (
          <ShowingResultPage data={res.data.data} />
        )
    }else {
        redirect('/login')
    }
}

export default ShowingPreRegistrationRoute