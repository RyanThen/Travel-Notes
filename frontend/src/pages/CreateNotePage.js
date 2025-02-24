import { useState } from 'react';

import NationalityDropdown from '../components/NationalityDropdown';

function CreateNotePage() {
  const [noteFormData, setNoteFormData] = useState({ country: '', title: '', content: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNoteFormData((prevNoteFormData) => ({ ...prevNoteFormData, [name]: value }));
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();

    // create notes table in postgres, make a post request to backend here
  }

  return (
    <div className="form-container max-w-md mx-auto">
      <form onSubmit={handleNoteSubmit} className="max-w-md mx-auto">

        <div className="mb-5">
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>

          <NationalityDropdown onChange={handleChange} value={noteFormData.country} name="country" id="country" />

        </div>

        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input onChange={handleChange} value={noteFormData.title} type="text" id="title" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Note title" required />
        </div>

        <div className="mb-5">
          <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <textarea onChange={handleChange} value={noteFormData.content} type="text" id="content" name="content" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Note content" required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new note!</button>

      </form>
    </div>
  )
}

export default CreateNotePage;