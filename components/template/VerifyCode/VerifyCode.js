"use client"
import React , {useState , useEffect , useRef} from 'react'
import styles from "./VerifyCode.module.css"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function VerifyCodePage() {

    const phoneNumber = Cookies.get("MyNumber");
    // const { , setMyRoute} = useCardContext();

    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const [error, setError] = useState([]);
    const [goPay, setGoPay] = useState(false);

    const inputRefs = inputValues.map(() => useRef());
    const enterCodeRef = useRef();
    const router = useRouter();

    
    const nextInput = (index, endValue) => {
        if (index === 3) {
            enterCodeRef.current.click();
        } else {
            inputRefs[index + 1]?.current.focus();
        }
        setInputValues((prevValues) => {
            const newInputValues = [...prevValues];
            newInputValues[index] = endValue;
            return newInputValues;
        });
    };

    const prevInput = (index) => {
        if (index > 0) {
            inputRefs[index - 1]?.current.focus();
        }
    };

    const onChangeHandler = (e, index) => {
        const inputValue = e.target.value;
        const lastCharacter = inputValue[inputValue.length - 1] || '';
        setInputValues((prevValues) => {
            const newInputValues = [...prevValues];
            newInputValues[index] = lastCharacter;
            return newInputValues;
        });

        if (lastCharacter.trim().length === 0) {
            prevInput(index);
        } else {
            nextInput(index, lastCharacter);
        }
    };

    const clickHandler = async () => {
        const verificationCode = inputValues.join("");
        const formData = new FormData();
        formData.append("code", verificationCode);
        formData.append("phone", phoneNumber);

        axios.post(`https://api.gholamzadeh.com/api/auth/v1/verify`, formData)
            .then(res => {
                if (res.data.data.status === "success") {
                    const token = res.data.data.token;
                    Cookies.set('tokenG', token, { expires: 5 });
                    setGoPay(true);
                    router.push("/PreRegistration");
                } else {
                    setError(res.data.data.message);
                }
                })
            .catch(err => {
                setError(err.response.data.message);
            });
    };

    const HomeHandler = () => router.push("/contactUs")

  return (
    <div className={`${styles.container}`}>
         <div className={styles.child}>
           <div className={`flex flex-col items-center mt-[50px]`}>
             <h2 className={`font-englishText text-[69px]`} onClick={HomeHandler}>Gholamzadeh</h2>
             <p className={`my-9`}>به هلدینگ غلام زاده خوش آمدید</p>
             <div className="flex" dir='ltr'>
             {inputValues.map((input, index) => (
                                <input
                                    value={input}
                                    ref={inputRefs[index]}
                                    key={index}
                                    maxLength={1}
                                    onChange={(e) => onChangeHandler(e, index)}
                                    type="text"
                                    inputMode="numeric"
                                    className="w-[50px] h-[50px] text-center mx-2 bg-[#393939] border-none rounded-2xl outline-none"
                                />
                               
            ))}
             </div>
                        <div className={`text-[13px] text-red-500`}>
                            <p>{error}</p>
                        </div>
                        {goPay ?
                        <button  disabled type="button" className="py-2.5 outline-none px-5 my-5 mr-2 text-sm font-medium text-white rounded-2xl bg-[#C38065]  border-none border-gray-200 hover:bg-gray-100 inline-flex items-center">
                            <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                            </svg>
                            در حال بار گیری
                        </button>
                        :
                        <button className={`text-[#FFFFFF] rounded-2xl bg-[#C38065] px-4 py-2 my-5`} onClick={clickHandler}>ورود / عضویت</button>
                    }
             <p className={`text-[13px] mt-4`}>کد تایید ارسال شده به {phoneNumber} را وارد نمایید</p>
         <button onClick={() => router.push("/login")} className={`border rounded-xl p-3 mt-4`}>ویرایش شماره</button>
           </div>
         </div>
    </div>
  )
}

export default VerifyCodePage