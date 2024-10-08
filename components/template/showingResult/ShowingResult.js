'use client'
// import PhoneNumbers from '@/components/module/PhoneNumbers'
import React , {useState} from 'react'
import { IoIosLogIn } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useRouter } from 'next/navigation';

function ShowingResultPage({data}) {
    const {carModel , color , description , firstName , installmentsMonth , installmentsPercentage , isConfirm , isRegisterModiran , isWon , knowMySite , lastName , nationalCode , phone , regModel} = data
    // console.log(data)
    const router = useRouter()
    
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const HomeHandler = () => router.push("/contactUs")
  return (
    <div className={`min-h-[100vh] flex flex-col justify-center mx-auto items-center w-full`}>
        <div className>
        <h2 className={`font-englishText text-white text-center text-[69px]`}>Gholamzadeh</h2>
        <p className={`my-5 text-white font-semibold text-center`}>نمایش پیش ثبت نام خودرو</p>
        </div>
    <div className={`border-2 border-[#474545] w-[380px] min-h-[500px] flex flex-col rounded-2xl bg-[#474545]`}>
        <div className={`flex justify-center items-center w-[380px] mx-auto min-h-[400px]`}>
            <div className={`flex flex-col w-[370px] p-2`}>
                <div className={`flex justify-between rounded-xl p-2 border my-1 w-full`}>
                    <p className="text-white">نام : </p>
                    <p className="mr-1 text-white"> {firstName} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">نام خانوادگی : </p>
                    <p className="mr-1 text-white"> {lastName} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">کد ملی : </p>
                    <p className="mr-1 text-white"> {nationalCode} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">تلفن همراه : </p>
                    <p className="mr-1 text-white"> {phone} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">خودرو : </p>
                    <p className="mr-1 text-white"> {carModel} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">شیوه پرداخت : </p>
                    <p className="mr-1 text-white"> {regModel} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">درصد اقساط : </p>
                    <p className="mr-1 text-white"> {installmentsPercentage} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white"> تعداد اقساط: </p>
                    <p className="mr-1 text-white"> {installmentsMonth} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">رنگ : </p>
                    <p className="mr-1 text-white"> {color} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">نحوه آشنایی با نمایندگی : </p>
                    <p className="mr-1 text-white"> {knowMySite} </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">وضعیت : </p>
                    <p className="mr-1 text-white"> {
                        isConfirm ? "تایید شده" : "در انتظار تایید"
                } </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white"> برنده : </p>
                    <p className="mr-1 text-white"> 
                    {
                        isConfirm ? "برنده شده" : "برنده نشده"
                    } 
                </p>
                </div>

                <div className={`flex justify-between rounded-xl border p-2 my-1 w-full`}>
                    <p className="text-white">توضیحات : </p>
                    <button onClick={onOpenModal}><IoEyeSharp className={`text-white`} /></button>
                    </div>

            </div>
            </div>
                <div className={`w-full flex justify-center items-center mx-auto my-[30px]`}>
            <button className={`bg-[#C38065] flex items-center mr-2 justify-center w-fit p-2 text-[15px] text-white rounded-lg`} 
            onClick={HomeHandler}>
            <IoIosLogIn />
                بازگشت به خانه
                </button>
                </div>
    </div>
    <Modal open={open} onClose={onCloseModal} center 
         classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
    >
        <h2 className={`text-center text-[16px] font-semibold`}>توضیحات</h2>
        <p className={`text-right mt-4`}>
          {description}
        </p>
      </Modal>
    </div>
  )
}

export default ShowingResultPage