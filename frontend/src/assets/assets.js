import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile.jpeg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './cclogo.png'
import logo2 from './cclogo2.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.jpg'
import Gastroenterologist from './Gastroenterologist.jpg'
import General_physician from './General_physician.jpg'
import Gynaecologist from './Gynaecologist.jpg'
import Neurologist from './Neurologist.jpg'
import Pediatrician from './Pediatricians.jpg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    logo2,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynaecologist',
        image: Gynaecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatrician
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anil Mehta',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. Mehta is a trusted physician known for his expertise in treating chronic illnesses, lifestyle disorders, and preventive healthcare. His holistic approach ensures comprehensive patient care.',
        fees: 600,
        address: {
            line1: 'Shivam Clinic',
            line2: 'Rajpur Road, Dehradun'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neha Gupta',
        image: doc2,
        speciality: 'Gynaecologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Gupta is an expert in prenatal care, high-risk pregnancies, and reproductive health. Her patient-friendly approach makes her a preferred choice for women\'s healthcare.',
        fees: 700,
        address: {
            line1: 'Women\'s Care Clinic',
            line2: 'Ballupur, Dehradun'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Manish Saxena',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '13 Years',
        about: 'Dr. Saxena is a skin specialist focusing on laser treatments, hair restoration, and aesthetic dermatology.',
        fees: 650,
        address: {
            line1: 'DermaCare Centre',
            line2: 'Dalanwala, Dehradun'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Rahul Choudhary',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Choudhary is a child specialist focused on immunization, child nutrition, and developmental disorders.',
        fees: 550,
        address: {
            line1: 'Sunshine Children\'s Hospital',
            line2: 'Ballupur, Dehradun'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Kavita Sharma',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '18 Years',
        about: 'Dr. Sharma specializes in movement disorders, Parkinson\'s disease, and neurorehabilitation.',
        fees: 850,
        address: {
            line1: 'Sharma Neuro Centre',
            line2: 'Prem Nagar, Dehradun'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Mohan Pratap',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Pratap is an expert in treating neurological disorders like epilepsy, migraine, and stroke management.',
        fees: 800,
        address: {
            line1: 'NeuroWell Hospital',
            line2: 'Clock Tower, Dehradun'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Ramesh Kumar',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '20 Years',
        about: 'With two decades of experience, Dr. Kumar is known for his accurate diagnosis and personalized treatment plans, helping patients manage chronic illnesses effectively.',
        fees: 800,
        address: {
            line1: 'HealWell Hospital',
            line2: 'Saharanpur Road, Dehradun'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rakesh Choudhary',
        image: doc8,
        speciality: 'Gynaecologist',
        degree: 'MBBS, MS',
        experience: '14 Years',
        about: 'Dr. Choudhary specializes in high-risk pregnancy management, infertility treatments, and minimally invasive gynecological surgeries.',
        fees: 750,
        address: {
            line1: 'Motherhood Clinic',
            line2: 'Jakhan, Dehradun'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Aditi Khanna',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '11 Years',
        about: 'Dr. Khanna is known for her advanced dermatological treatments, including acne, pigmentation, and cosmetic skin procedures.',
        fees: 600,
        address: {
            line1: 'SkinGlow Clinic',
            line2: 'Rajpur Road, Dehradun'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Aryan Khurana',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. Khurana specializes in newborn care, vaccinations, and adolescent medicine, ensuring holistic pediatric care.',
        fees: 600,
        address: {
            line1: 'KidsCare Clinic',
            line2: 'Saharanpur Road, Dehradun'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Pooja Mehra',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD',
        experience: '22 Years',
        about: 'Dr. Mehra specializes in digestive disorders, liver diseases, and endoscopic procedures.',
        fees: 850,
        address: {
            line1: 'GastroCare Clinic',
            line2: 'Dharampur, Dehradun'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Sameer Joshi',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '20 Years',
        about: 'Dr. Joshi is a senior consultant in neuro care, dealing with brain injuries, dementia, and neurological rehabilitation.',
        fees: 900,
        address: {
            line1: 'Max Super Speciality Hospital',
            line2: 'Mussoorie Road, Dehradun'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Priya Bansal',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Bansal specializes in managing acute and chronic medical conditions, with a strong focus on patient education and wellness strategies.',
        fees: 600,
        address: {
            line1: 'CityCare Clinic',
            line2: 'Clock Tower, Dehradun'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rajeev Sharma',
        image: doc14,
        speciality: 'Gynaecologist',
        degree: 'MBBS, MD',
        experience: '18 Years',
        about: 'Dr. Sharma has extensive experience in treating gynecological disorders, performing laparoscopic surgeries, and offering expert fertility solutions.',
        fees: 800,
        address: {
            line1: 'Sharma Women\'s Hospital',
            line2: 'Prem Nagar, Dehradun'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Sneha Malhotra',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '16 Years',
        about: 'Dr. Malhotra has vast experience in treating skin allergies, eczema, and cosmetic enhancements, ensuring personalized skincare for every patient.',
        fees: 700,
        address: {
            line1: 'Malhotra Skin & Hair Clinic',
            line2: 'Balliwala, Dehradun'
        }
    },
]