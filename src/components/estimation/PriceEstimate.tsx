// import React from 'react'

// const PriceEstimate = () => {
//     return (
//         <div>  <form className="max-w-lg mx-auto">
//             <div className="mb-5">
//                 <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
//             </div>
//             <div className="mb-5">
//                 <label for="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What's Your Name</label>
//                 <span className='block mb-3 text-xs font-medium text-gray-900 dark:text-white'>Please enter your First name and Last name as it shows on your licence if any</span>
//                 <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//             </div>
//             <div className="mb-5">
//                 <label for="age" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Are you at least 16 years old at this moment ?</label>

//                 <fieldset>
//                     <legend className="sr-only">Countries</legend>

//                     <div className="flex items-center mb-4">
//                         <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
//                         <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
//                             United States
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Germany
//                         </label>
//                     </div>
//                 </fieldset>
//             </div>
//             <div className="mb-5">
//                 <label for="number" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What's Your Mobile Number</label>

//                 <input type="tel" id="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//             </div>

//             {/* valid drivers licence */}
//             <div className="mb-5">
//                 <label for="age" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Do you hold a valid driver's license?</label>
//                 <span className='block mb-3 text-xs font-medium text-gray-900 dark:text-white'>Let us know if you have a valid four wheeler licence, either full or learners including Class 7
//                 </span>
//                 <fieldset>
//                     <legend className="sr-only">Licence?</legend>

//                     <div className="flex items-center mb-4">
//                         <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
//                         <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
//                             No
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (Nova Scotia)
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (Other Canadian province or US state)
//                         </label>
//                     </div>
//                 </fieldset>
//             </div>
//             {/* valid drivers licence from other country */}
//             <div className="mb-5">
//                 <label for="age" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Do you hold a valid driver's license?</label>
//                 <span className='block mb-3 text-xs font-medium text-gray-900 dark:text-white'>Let us know if you have a valid four wheeler licence, either full or learners including Class 7
//                 </span>
//                 <fieldset>
//                     <legend className="sr-only">Licence?</legend>

//                     <div className="flex items-center mb-4">
//                         <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
//                         <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
//                             No
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (Canada)
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (USA)
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (India)
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Yes (Any other country)
//                         </label>
//                     </div>
//                 </fieldset>
//             </div>
//             {/* best time to callback */}
//             <div className="mb-5">
//                 <label for="age" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is the best time to call you ?</label>
//                 <span className='block mb-3 text-xs font-medium text-gray-900 dark:text-white'>Please select as soon as possible or specify time range
//                 </span>
//                 <fieldset>
//                     <legend className="sr-only">Licence?</legend>

//                     <div className="flex items-center mb-4">
//                         <input id="country-option-1" type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked />
//                         <label for="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
//                             As soon as possible
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <input id="country-option-2" type="radio" name="countries" value="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
//                         <label for="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//                             Other : <input />
//                         </label>
//                     </div>

//                 </fieldset>
//             </div>
//             <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//         </form></div>
//     )
// }

// export default PriceEstimate