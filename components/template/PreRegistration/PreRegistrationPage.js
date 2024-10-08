"use client"
import React , {useState , useEffect} from 'react'
import styles from "./PreRegistrationPage.module.css"
import Cookies from "js-cookie";
import axios from 'axios';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

function PreRegistrationPage({data}) {
    
    const [count , setCount] = useState([]);
    const [percent , setPercent] = useState();
    const [selectedCount, setSelectedCount] = useState("");
    const [name , setName] = useState("");
    const [lastNameInput , setLastNameInput] = useState("");
    const [reqModel , setReqModel] = useState("");
    const [codeNational , setCodeNational] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [carBrand , setCarBrand] = useState();
    const [color, setColor] = useState("");
    const [description , setDescription] = useState();
    const [knowen , setKnowen] = useState();
    const [errors , setErrors] = useState([]);
    const [goPay , setGoPay] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const newCount = Array.from({ length: 61 }, (_, index) => index);
        setCount(newCount);
    }, []);


    const numberHandler = (e) => {
        const value = e.target.value;
        const numberValue = value.replace(/[^0-9]/g, '');
        setPhoneNumber(numberValue)
    }

    const natioalHandler = (e) => {
        const value = e.target.value;
        const numberValue = value.replace(/[^0-9]/g, '');
        setCodeNational(numberValue)
    }


    const handleCountChange = (e) => {
        setSelectedCount(e.target.value); // Set the selected value from the dropdown
    };

    const sumbitHandler = async () => {
        const token = Cookies.get("tokenG");
        const config = {
            headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
            }
        }

        const formData = new FormData;
        formData.append("firstName", name)
        formData.append("lastName", lastNameInput)
        formData.append("phone", phoneNumber)
        formData.append("carModel", carBrand)
        formData.append("regModel", reqModel)
        formData.append("nationalCode" , codeNational)
        formData.append("color", color);
        formData.append("installmentsPercentage", percent);
        formData.append("installmentsMonth", selectedCount);
        formData.append("description", description);
        formData.append("knowMySite", knowen);
        await axios.post(`https://api.gholamzadeh.com/api/web/carRegister/store` , formData , {
            headers: config.headers
        }).then(res =>{
            if(res.status === 201) {
                toast.success(res.data.message)
                setTimeout(() => {
                    router.push("/ShowingPreRegistration")
                } , 2000)
            }
        }).catch((err) => {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
            

        }
        // toast.error("لطفا فیلد های مربوطه را به درستی تکمیل کنید")
        )
    }

    const HomeHandler = () => router.push("/contactUs")

  return (
    <div className={`${styles.container}`}>
         <div className={styles.child}>
           <div className={`flex flex-col items-center mt-[10px]`}>
             <h2 className={`font-englishText text-center text-[69px]`} onClick={HomeHandler}>Gholamzadeh</h2>
             <p className={`my-3 text-center`}>فرم پیش ثبت نام نمایندگی غلامزاده</p>
            <div className={`flex w-[370px] justify-around`}>
                <div className="flex flex-col">
            <input  
                            value={name} onChange={(e) => setName(e.target.value)}
                            className={`w-[180px] ${errors.firstName ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939]`} type='text'
                            placeholder='نام '
                           />
                            {
                            errors && errors.firstName ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.firstName [0]}</p>
                            )  : null
                        }
                </div>
                <div className="flex flex-col">
            <input 
                            value={lastNameInput}
                            onChange={(e) => setLastNameInput(e.target.value)}
                            className={`w-[180px]  ${errors.lastName ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939]`} type='text'
                            placeholder='نام خانوادگی'
                           />
                        {
                            errors && errors.lastName ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.lastName [0]}</p>
                            )  : null
                        }
                </div>
            </div>

            <div className={`flex w-[370px] justify-around`}>
                <div className="flex flex-col">
            <input
                            onChange={numberHandler}
                            value={phoneNumber}
                            className={`w-[180px]  ${errors.phone ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939]`} type='text'
                            placeholder='تلفن همراه'
                            maxLength={11}
                           />
                           {
                            errors && errors.phone ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.phone [0]}</p>
                            )  : null
                        }

                </div>
                <div className="flex flex-col">
            <input 
                            className={`w-[180px]  ${errors.nationalCode ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939]`} type='text'
                            placeholder='کدملی'
                            value={codeNational}
                            onChange={natioalHandler}
                            maxLength={10}

                           />
                           {
                            errors && errors.nationalCode ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.nationalCode [0]}</p>
                            )  : null
                        }

                </div>
            </div>
            <div className={`flex w-[370px] justify-around`}>
                <div className="flex flex-col">
            <select
                        className={`w-[180px]  ${errors.carModel ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                        value={carBrand}
                        onChange={(e) => setCarBrand(e.target.value)}>

                        <option value="" disabled={!data.length} selected={!data.length}>
                            {!data.length ? 'در حال بارگیری...' : 'مدل ماشین'}
                        </option>

                        {!data.length ? null : data.map((item) => (
                            <option key={item.id} value={item.id} className=" outline-none  py-5 px-[18px] m-8 w-[90%]">
                            {item}
                            </option>
                        ))}
            </select>
            {
                            errors && errors.carModel ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.carModel [0]}</p>
                            )  : null
                        }

                    
                </div>

           
                        <div className="flex flex-col">
            <select  className={`w-[180px]  ${errors.regModel ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                        value={reqModel}
                        onChange={(e) => setReqModel(e.target.value)}>
                           <option value="" disabled={!data.length} selected={!data.length}>
                            {'شیوه پرداخت'}
                        </option>
                        <option value={'نقدی'}>
                            نقد
                        </option>
                        <option value={'اقساطی'}>
                            اقساط
                        </option>
            </select>

            {
                            errors && errors.regModel ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.regModel [0]}</p>
                            )  : null
                        }
           
                        </div>
            </div>

            <div className={`flex w-[370px] justify-around`}>
                {
                    reqModel === "نقدی" ? 
                    <select
                            className={`w-[180px] mb-3 text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                            value={percent} // Use selectedCount as the value
                            onChange={(e) =>setPercent(e.target.value)}
                             // Call handleCountChange on selection
                            disabled
                        >
                            <option value="" >
                                {'درصد اقساط'}
                            </option>
                            
                        </select>
                        : 
                        <select
                            className={`w-[180px] mb-3 text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                            value={percent} // Use selectedCount as the value
                            onChange={(e) =>setPercent(e.target.value)}
                             // Call handleCountChange on selection    
                        >
                            <option value="" >
                                {'درصد اقساط'}
                            </option>
                            <option  value={40}>40 درصد </option>
                            <option  value={50}>50 درصد </option>
                            <option  value={60}>60 درصد </option>
                            <option value={70}> 70 درصد </option>
                        </select>
                }
                {
                    reqModel === "نقدی" ? 
                    <select
                            className={`w-[180px] mb-3 text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                            value={selectedCount} // Use selectedCount as the value
                            onChange={handleCountChange} // Call handleCountChange on selection
                            disabled
                        >
                            <option value="" >
                                {'تعداد اقساط'}
                            </option>
                            {count.map((num) => (
                                <option key={num} value={num}>
                                    {num} ماهه
                                </option>
                            ))}
                        </select>
                         : 
                        <select
                            className={`w-[180px] mb-3 text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                            value={selectedCount} // Use selectedCount as the value
                            onChange={handleCountChange} // Call handleCountChange on selection
                        >
                            <option value="" >
                                {'تعداد اقساط'}
                            </option>
                            {count.map((num) => (
                                <option key={num} value={num}>
                                    {num} ماهه
                                </option>
                            ))}
                        </select> 
                }
            </div>

            <div className={`flex w-[370px] justify-around`}>

                <div className="flex flex-col">
           <select
                 className={`w-[180px]  ${errors.color ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                 value={color}
                 onChange={(e) => setColor(e.target.value)}
           >
            <option value="" >
                                {'رنگ'}
                            </option>
                            <option value={"سفید"}>سفید </option>
                            <option value={"مشکی"}>مشکی </option>
                            <option value={"نوک مدادی"}>نوک مدادی</option>
           </select>
           {
                            errors && errors.color ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.color [0]}</p>
                            )  : null
                        }
                </div>
            
                <div className="flex flex-col">
           <select
                 className={`w-[180px]  ${errors.knowMySite ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939] ${styles.input}`}
                 value={knowen}
                 onChange={(e) => setKnowen(e.target.value)}
           >
            <option value="" >
                                {'شیوه آشنایی با نمایندگی'}
                            </option>
                            <option value={"گوگل"}>گوگل </option>
                            <option value={"اینستاگرام"}>اینستاگرام </option>
                            <option value={"معرفی دوستان"}>معرفی دوستان</option>
           </select>
                    {
                            errors && errors.knowMySite ? (
                            <p className="text-red-500 my-1 text-center text-[12px]">{errors.knowMySite [0]}</p>
                            )  : null
                    }
                </div>
                </div>
            
            <div className={`flex w-[370px] justify-around`}>
            <textarea 
                            className={`w-[80%]  ${errors.firstName ? "mb-0" : "mb-3"} text-center rounded-xl p-2 border-none outline-none bg-[#393939]`} type='text'
                            placeholder='توضیحات'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                           />
            </div>
            
            <button className={`bg-[#C38065] font-semibold py-1 px-3 text-[18px] rounded-lg`} onClick={sumbitHandler}>ثبت اطلاعات</button>
           </div>

         </div>
    </div>
  )
}

export default PreRegistrationPage