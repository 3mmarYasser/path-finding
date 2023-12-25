import React, {useState} from 'react';
import { useFormik} from "formik";
import MapContact from "./Map/Map.contact.tsx";
import {ContactFormValues} from "./Contact.interface.ts";
import emailjs from '@emailjs/browser';
import classNames from "classnames";
import {FaMapLocationDot} from "react-icons/fa6";


const Contact:React.FC = () => {
    const [emailSending,setEmailSending] = useState<boolean>(false)
    const formik = useFormik<ContactFormValues>({
        initialValues: {
            name: "",
            email: "" ,
            msg:"",
            country:""
        },
        onSubmit: async (values,formikHelpers) => {
            setEmailSending(true)
            await emailjs.send('service_klqusth', 'template_tflbnx8', {...values}, 'E6B1RiGnbtt2ChUl1')
                .then((result) => {
                    formikHelpers.resetForm();
                }, (error) => {
                    console.log(error.text);
                });
            setEmailSending(false)
        }
    });

    return (
        <div id={"contact"} className="h-screen snap-center">
            <div className="w-full h-full flex justify-between gap-8 ">
                <div className="flex items-center justify-end flex-1">

                    <div className=" w-full max-w-md">

                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <h1 className="text-xl mb-2">Contact Us</h1>

                            <div className="form-control">
                                <input name="name" type="text"
                                       onChange={formik.handleChange}
                                       disabled={emailSending}
                                       value={formik.values.name}
                                       placeholder="Name"
                                       className="input bg-base-300 input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="email"
                                       disabled={emailSending}
                                       type="email"
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                       placeholder="Email"
                                       className="input bg-base-300 input-bordered" required />
                            </div>
                            <div className="form-control">
                                <textarea name="msg"
                                          disabled={emailSending}
                                          onChange={formik.handleChange}
                                          value={formik.values.msg}
                                          placeholder="Message"
                                          className="textarea bg-base-300 h-52 textarea-bordered" required />
                            </div>
                            <div className="w-full p-3 bg-base-300 rounded-md border-[1px] border-base-content/10 hidden items-center gap-2  xl:flex">
                                <FaMapLocationDot className="text-primary text-xl"/>
                                {!formik.values.country &&<span> Choose You country from the map</span>}
                                {formik.values.country &&<span>{`I'm From ${formik.values.country}`}</span>}
                            </div>
                            <div className="form-control mt-6 ">
                                <button type="submit"
                                        className={classNames("btn btn-primary " ,{'btn-disabled':emailSending})}
                                >
                                    {emailSending &&  <span className="loading loading-spinner"></span>}
                                    {emailSending &&  "Sending"}
                                    {!emailSending &&  "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex-1 hidden xl:block">
                    <MapContact formik={formik}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
