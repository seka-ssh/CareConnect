import React from 'react'
import { assets } from '../assets/assets'

const Privacy = () => {
    return (
        <div>
            <div className='text-center text-3xl pt-10 text-gray-500'>
                <p>PRIVACY <span className='text-gray-800 font-medium'>POLICY</span></p>
            </div>
            <div className='pl-40 pr-40'>
                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>At CareConnect, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect the data you provide while using our platform. By accessing or using CareConnect, you agree to the terms outlined in this policy.</p>
                        <p>BY USING THE SERVICES OR BY OTHERWISE GIVING US YOUR INFORMATION, YOU WILL BE DEEMED TO HAVE READ, UNDERSTOOD AND AGREED TO THE PRACTICES AND POLICIES OUTLINED IN THIS PRIVACY POLICY AND AGREE TO BE BOUND BY THE PRIVACY POLICY. YOU HEREBY CONSENT TO OUR COLLECTION, USE AND SHARING, DISCLOSURE OF YOUR INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY. WE RESERVE THE RIGHT TO CHANGE, MODIFY, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY, AT OUR SOLE DISCRETION, AT ANY TIME. IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY AT ANY TIME, DO NOT USE ANY OF THE SERVICES OR GIVE US ANY OF YOUR INFORMATION. IF YOU USE THE SERVICES ON BEHALF OF SOMEONE ELSE (SUCH AS YOUR CHILD) OR AN ENTITY (SUCH AS YOUR EMPLOYER), YOU REPRESENT THAT YOU ARE AUTHORISED BY SUCH INDIVIDUAL OR ENTITY TO (I) ACCEPT THIS PRIVACY POLICY ON SUCH INDIVIDUAL’S OR ENTITY’S BEHALF, AND (II) CONSENT ON BEHALF OF SUCH INDIVIDUAL OR ENTITY TO OUR COLLECTION, USE AND DISCLOSURE OF SUCH INDIVIDUAL’S OR ENTITY’S INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY.</p>
                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>1. WHY <span className='text-gray-700 font-semibold'>THIS PRIVACY POLICY?</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>This Privacy Policy is created to inform users about:</p>
                        <ul className="list-disc pl-5">
                            <li>The type of personal information collected.</li>
                            <li>The purpose of collecting and using this data.</li>
                            <li>The security measures taken to protect your data.</li>
                            <li>Your rights regarding your personal information.</li>
                        </ul>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>2. INFORMATION <span className='text-gray-700 font-semibold'>WE COLLECT</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>To provide a smooth and efficient experience, we may collect the following types of information:</p>
                        <ul className="list-disc pl-5">
                            <li><span className='text-gray-700 font-semibold'>Personal Information:</span> This includes details such as your name, email address, phone number, and any other information provided while creating an account.</li>
                            <li><span className='text-gray-700 font-semibold'>Appointment and Healthcare Data:</span> Information about your doctor preferences, booking history, and appointment details.</li>
                            <li><span className='text-gray-700 font-semibold'>Payment Information:</span> When making payments for consultations, we may collect transaction-related details, but we do not store your credit or debit card details. All payments are securely processed through third-party gateways.</li>
                            <li><span className='text-gray-700 font-semibold'>Technical and Usage Data:</span> We may collect data such as your IP address, browser type, device information, and interaction with our platform to improve performance and user experience.</li>
                        </ul>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>3. HOW WE <span className='text-gray-700 font-semibold'>USE YOUR INFORMATION</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>The information collected is used for the following purposes:</p>
                        <ul className="list-disc pl-5">
                            <li>To facilitate appointment booking and communication with healthcare providers.</li>
                            <li>To authenticate users and provide secure access to our platform.</li>
                            <li>To process payments and ensure smooth transactions.</li>
                            <li>To improve platform functionality, performance, and overall user experience.</li>
                            <li>To provide customer support and respond to user inquiries.</li>
                            <li>To comply with applicable legal and regulatory requirements.</li>
                        </ul>
                        <p>CareConnect does not sell, trade, or rent your personal information to any third parties.</p>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>4. DATA SECURITY <span className='text-gray-700 font-semibold'>AND PROTECTION</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>We prioritize the security of your personal information and implement strict security measures to prevent unauthorized access, data breaches, or misuse. Some of these measures include:</p>
                        <ul className="list-disc pl-5">
                            <li>Encrypted storage of sensitive data.</li>
                            <li>Secure authentication and access control mechanisms.</li>
                            <li>Regular updates and security checks to prevent vulnerabilities.</li>
                        </ul>
                        <p>Despite our best efforts, no system is completely secure. Users are encouraged to take their own precautions, such as using strong passwords and keeping their login credentials confidential.</p>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>5. INFORMATION SHARING <span className='text-gray-700 font-semibold'>AND DISCLOSURE</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>CareConnect does not share user data with third parties except in the following situations:</p>
                        <ul className="list-disc pl-5">
                            <li><span className='text-gray-700 font-semibold'>With Healthcare Providers:</span> Your appointment details are shared with the respective doctors for scheduling and consultation purposes.</li>
                            <li><span className='text-gray-700 font-semibold'>With Payment Processors:</span> To facilitate secure payment transactions, we may share necessary details with third-party payment providers.</li>
                            <li><span className='text-gray-700 font-semibold'>Legal Compliance:</span> If required by law or in response to legal requests, we may disclose personal information to regulatory authorities or law enforcement agencies.</li>
                        </ul>
                        <p>We ensure that all third parties handling user data comply with relevant privacy and security standards.</p>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>6. USE OF COOKIES AND <span className='text-gray-700 font-semibold'>TRACKING TECHNOLOGIES</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>CareConnect uses cookies and similar tracking technologies to enhance user experience and analyze platform performance. These technologies help us:</p>
                        <ul className="list-disc pl-5">
                            <li>Recognize users when they log in.</li>
                            <li>Store user preferences for better customization.</li>
                            <li>Monitor and analyze website traffic to improve services.</li>
                        </ul>
                        <p>Users have the option to disable cookies in their browser settings. However, this may affect the functionality of certain features on the platform.</p>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>7. YOUR RIGHTS <span className='text-gray-700 font-semibold'>AND CHOICES</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>As a user, you have certain rights regarding your personal information, including:</p>
                        <ul className="list-disc pl-5">
                            <li>The right to access and review the data we have collected.</li>
                            <li>The right to request corrections or updates to inaccurate information.</li>
                            <li>The right to request the deletion of your account and personal data, subject to legal obligations.</li>
                            <li>The right to opt out of promotional emails and marketing communications.</li>
                        </ul>
                        <p>To exercise any of these rights, users can contact our support team at the provided contact details.</p>

                    </div>
                </div>

                <div className='text-xl my-4'>
                    <p>8. POLICY UPDATES <span className='text-gray-700 font-semibold'>AND CHANGES</span> </p>
                </div>

                <div className='my-10 flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col text-left md:text-justify gap-6 md:text-sm text-gray-600'>
                        <p>CareConnect reserves the right to update or modify this Privacy Policy at any time. Any changes made will be reflected on this page, and users are encouraged to review the policy periodically. Continued use of the platform after updates constitutes acceptance of the revised terms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy