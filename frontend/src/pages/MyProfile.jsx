import React, { useContext } from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const updateUserProfileData = async () => {
    try {
      setIsLoading(true)

      const updateData = {
        name: userData.name,
        phone: userData.phone,
        address: JSON.stringify(userData.address),
        gender: userData.gender,
        dob: userData.dob
      }

      console.log('📤 Sending profile update request...')
      console.log('📋 Form data:', updateData)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', updateData, { 
        headers: { 
          token,
          'Content-Type': 'application/json'
        } 
      })

      console.log('📥 Response:', data)

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
      } else {
        toast.error(data.message || 'Update failed')
      }

    } catch (error) {
      console.log('❌ Profile update error:', error)
      toast.error(error.response?.data?.message || error.message || 'Update failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setIsEdit(false)
    // Reload user data to reset any changes
    loadUserProfileData()
  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      {/* Profile Image - Always show placeholder */}
      <div className='inline-block relative'>
        <img 
          className='w-36 rounded' 
          src="https://via.placeholder.com/150x150/17A4A5/ffffff?text=User" 
          alt="Profile" 
        />
      </div>

      {/* Name */}
      {
        isEdit
          ? <input 
              className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 border border-gray-300 rounded px-2 py-1' 
              type="text" 
              value={userData.name} 
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
            />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      
      {/* Contact Information */}
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input 
                  className='bg-gray-100 max-w-52 border border-gray-300 rounded px-2 py-1' 
                  type="text" 
                  value={userData.phone} 
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <div className='space-y-1'>
                  <input 
                    className='bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full' 
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                    value={userData.address?.line1 || ''} 
                    type="text" 
                    placeholder="Address Line 1"
                  />
                  <input 
                    className='bg-gray-50 border border-gray-300 rounded px-2 py-1 w-full' 
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                    value={userData.address?.line2 || ''} 
                    type="text" 
                    placeholder="Address Line 2"
                  />
                </div>
              : <p className='text-gray-500'>
                  {userData.address?.line1 || 'Not provided'}
                  <br />
                  {userData.address?.line2 || ''}
                </p>
          }
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select 
                  className='max-w-20 bg-gray-100 border border-gray-300 rounded px-2 py-1' 
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-medium'>Birthday:</p>
          {
            isEdit
              ? <input 
                  className='max-w-28 bg-gray-100 border border-gray-300 rounded px-2 py-1' 
                  type="date" 
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                  value={userData.dob} 
                />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      {/* Action Buttons */}
      <div className='mt-10 flex gap-4'>
        {
          isEdit
            ? <>
                <button 
                  className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all disabled:opacity-50' 
                  onClick={updateUserProfileData}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save information'}
                </button>
                <button 
                  className='border border-gray-400 px-8 py-2 rounded-full hover:bg-gray-400 hover:text-white transition-all' 
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </>
            : <button 
                className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' 
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
        }
      </div>

    </div>
  )
}

export default MyProfile