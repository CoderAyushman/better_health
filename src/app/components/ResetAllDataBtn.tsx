"use client"
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from 'next/navigation'
const ResetAllDataBtn = () => {
    const router = useRouter();
    const handleOnclick = () => {
        // localStorage.removeItem('counter');
        // localStorage.removeItem('data');
        localStorage.clear();


        window.location.assign('/');


    }
    return (
        <div className="flex justify-center items-center">

            <Dialog>
                <DialogTrigger >
                    <button


                        className="flex text-sm  md:text-base bg-customGreen rounded-full overflow-visible  text-white py-5 mt-[10px]   px-28 my-5"
                    >
                        <b>Reset All Data</b>
                        {/* <img src="reset-buttons.png" alt="reset button" className='ml-3 max-w-[30px]' /> */}
                    </button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your given data and ai generated diet plans.
                        </DialogDescription>
                        <button

                            onClick={handleOnclick}
                            className=" bg-customGreen rounded-full overflow-visible  text-white py-2 my-5   px-2 "
                        >
                            <b>Reset</b>

                        </button>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>

        // <button
        //     onClick={handleOnclick}

        //     className="bg-customGreen rounded-full overflow-visible  text-white pt-5 mt-[10px] pb-5  pl-28 pr-28 "
        // >
        //     <b>CONTINUE</b>
        // </button>

    )
}

export default ResetAllDataBtn