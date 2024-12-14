import { useContext } from 'react';
import TravelNotesContext from '../context/TravelNotes';

function LoginPage() {

  const { handleLoginSubmit, loginFormData, setLoginFormData, loginMessage, currentUser } = useContext(TravelNotesContext);

  // const [loginMessage, setLoginMessage] = useState('');

  // const isMounted = useRef(false);

  // useEffect(() => {
  //   if(!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   }

  //   if(currentUser) {
  //     setLoginMessage(currentUser + ' is logged in');
  //     return;
  //   } 
    
  //   setLoginMessage('User not found, please try again');
    
  // }, [currentUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevLoginFormData) => ({ ...prevLoginFormData, [name]: value }));
  };

  return (
    <div>
      
      <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">

        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input onChange={handleChange} value={loginFormData.username} type="text" id="username" name="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="johndoe123" required />
        </div>
     
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input onChange={handleChange} value={loginFormData.password} type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

      </form>

      <p className="submitMessage max-w-md mt-4 mx-auto">{currentUser ? currentUser + ' logged in' : loginMessage}</p>

    </div>
  )
}

export default LoginPage;