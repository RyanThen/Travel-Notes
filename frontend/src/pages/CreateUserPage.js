import { useState } from 'react';
import axios from 'axios';
import NationalityDropdown from '../components/NationalityDropdown';

function CreateUserPage() {
  
  // Should I create a function or variable in the TravelNotes context for logged in user?  Think about this!

  const [userFormData, setUserFormData] = useState({ email: '', username: '', nationality: 'Afghanistan', password: '', repeatPassword: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userFormData);

    // Add form validation and form sanitization

    await axios.post('http://localhost:3001/user', { userFormData });

    setUserFormData({email: '', username: '', nationality: 'Afghanistan', password: '', repeatPassword: ''});
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input onChange={handleChange} value={userFormData.email} type="email" id="email" name="email"
           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="john.doe@example.com" required />
        </div>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input onChange={handleChange} value={userFormData.username} type="text" id="username" name="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="johndoe123" required />
        </div>
        <div className="mb-5">
          <label htmlFor="nationality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationality</label>

          <NationalityDropdown onChange={handleChange} value={userFormData.nationality} name="nationality" />

        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input onChange={handleChange} value={userFormData.password} type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
          <input onChange={handleChange} value={userFormData.repeatEmail} type="password" id="repeat-password" name="repeatPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
      </form>

    </div>
  )
}

export default CreateUserPage;