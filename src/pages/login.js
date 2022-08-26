import React from 'react'
import { getProviders, getSession, signIn } from "next-auth/react"
import Image from 'next/image';

function login({ providers }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 "
	>
	<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
		<div className="scale-50 text-center">
				<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 1000 301.354"><path d="M620.38 235.668c-58.111 42.833-142.34 65.686-214.86 65.686-101.685 0-193.227-37.61-262.483-100.161-5.44-4.919-.565-11.622 5.964-7.792 74.74 43.486 167.153 69.647 262.613 69.647 64.38 0 135.202-13.32 200.322-40.961 9.837-4.179 18.064 6.442 8.444 13.581" fill="#f90" fill-opacity="1" fill-rule="evenodd" stroke="none"/><path d="M644.54 208.027c-7.4-9.49-49.102-4.483-67.82-2.263-5.702.696-6.572-4.266-1.436-7.836 33.213-23.375 87.712-16.628 94.067-8.793 6.355 7.88-1.654 62.508-32.865 88.583-4.788 4.004-9.359 1.871-7.226-3.44 7.009-17.498 22.723-56.718 15.28-66.251" fill="#f90" fill-opacity="1" fill-rule="evenodd" stroke="none"/><path d="M578.026 32.908V10.186c0-3.439 2.612-5.746 5.746-5.746H685.5c3.265 0 5.877 2.35 5.877 5.746v19.458c-.044 3.264-2.786 7.53-7.661 14.277l-52.714 75.263c19.588-.48 40.264 2.437 58.024 12.449 4.005 2.264 5.093 5.572 5.398 8.836v24.246c0 3.309-3.657 7.183-7.487 5.18-31.298-16.41-72.868-18.195-107.474.174-3.526 1.916-7.226-1.915-7.226-5.223v-23.027c0-3.7.043-10.012 3.743-15.627l61.072-87.581h-53.15c-3.264 0-5.876-2.307-5.876-5.703M206.939 174.684h-30.95c-2.96-.218-5.31-2.438-5.528-5.268V10.578c0-3.178 2.655-5.702 5.963-5.702h28.86c3.004.13 5.398 2.437 5.616 5.31V30.95h.566c7.53-20.067 21.677-29.426 40.743-29.426 19.37 0 31.472 9.359 40.178 29.426 7.487-20.067 24.507-29.426 42.746-29.426 12.971 0 27.162 5.354 35.824 17.368 9.794 13.363 7.792 32.778 7.792 49.798l-.044 100.248c0 3.177-2.655 5.746-5.963 5.746h-30.906c-3.09-.218-5.572-2.7-5.572-5.746V84.752c0-6.704.61-23.419-.87-29.774-2.307-10.665-9.228-13.668-18.196-13.668-7.487 0-15.322 5.005-18.5 13.015-3.177 8.01-2.872 21.416-2.872 30.427v84.186c0 3.177-2.656 5.746-5.964 5.746h-30.906c-3.134-.218-5.572-2.7-5.572-5.746l-.043-84.186c0-17.717 2.916-43.79-19.066-43.79-22.243 0-21.373 25.42-21.373 43.79v84.186c0 3.177-2.655 5.746-5.963 5.746M778.958 1.524c45.923 0 70.779 39.437 70.779 89.583 0 48.448-27.467 86.885-70.78 86.885-45.096 0-69.646-39.438-69.646-88.582 0-49.45 24.855-87.886 69.647-87.886m.261 32.43c-22.81 0-24.246 31.08-24.246 50.45 0 19.414-.304 60.854 23.985 60.854 23.985 0 25.116-33.43 25.116-53.803 0-13.407-.566-29.425-4.614-42.136-3.482-11.056-10.403-15.366-20.24-15.366M909.285 174.684h-30.819c-3.09-.218-5.572-2.7-5.572-5.746l-.043-158.882c.26-2.917 2.83-5.18 5.963-5.18H907.5c2.699.13 4.919 1.958 5.528 4.44v24.289h.566c8.663-21.721 20.807-32.081 42.18-32.081 13.886 0 27.424 5.006 36.13 18.717C1000 32.951 1000 54.325 1000 69.691v99.987c-.348 2.786-2.916 5.006-5.963 5.006H963c-2.83-.218-5.18-2.307-5.485-5.006V83.402c0-17.368 2.003-42.789-19.37-42.789-7.53 0-14.452 5.05-17.89 12.71-4.354 9.708-4.92 19.371-4.92 30.08v85.535c-.043 3.177-2.742 5.746-6.05 5.746M496.931 98.812c0 12.058.305 22.113-5.79 32.821-4.918 8.706-12.753 14.06-21.416 14.06-11.883 0-18.848-9.054-18.848-22.418 0-26.378 23.637-31.167 46.054-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.96-7.312.74-10.273-8.531-12.145-12.493-17.76-20.633-16.977 17.325-29.034 22.505-51.017 22.505-26.074 0-46.315-16.062-46.315-48.23 0-25.117 13.581-42.224 32.995-50.582 16.803-7.4 40.265-8.705 58.2-10.751v-4.005c0-7.357.565-16.062-3.788-22.418-3.743-5.702-10.97-8.053-17.368-8.053-11.797 0-22.287 6.05-24.855 18.587-.523 2.786-2.569 5.529-5.398 5.66l-29.992-3.222c-2.524-.566-5.354-2.612-4.614-6.486C417.795 10.97 450.703 0 480.13 0c15.061 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.008 20.851 11.666 28.686 1.96 2.786 2.394 6.138-.13 8.227-6.312 5.268-17.543 15.062-23.724 20.546l-.043-.087M91.194 98.812c0 12.058.305 22.113-5.79 32.821-4.918 8.706-12.71 14.06-21.416 14.06-11.883 0-18.805-9.054-18.805-22.418 0-26.378 23.637-31.167 46.011-31.167v6.704m31.21 75.436c-2.045 1.828-5.005 1.96-7.312.74-10.273-8.531-12.102-12.493-17.76-20.633-16.977 17.325-28.99 22.505-51.017 22.505C20.285 176.86 0 160.798 0 128.63c0-25.117 13.625-42.224 32.995-50.582 16.803-7.4 40.265-8.705 58.199-10.751v-4.005c0-7.357.566-16.062-3.744-22.418-3.787-5.702-11.012-8.053-17.368-8.053-11.796 0-22.33 6.05-24.899 18.587-.522 2.786-2.568 5.529-5.354 5.66L9.794 53.845c-2.525-.566-5.31-2.612-4.614-6.486C12.101 10.97 44.966 0 74.392 0c15.06 0 34.736 4.005 46.62 15.41 15.06 14.06 13.624 32.82 13.624 53.236v48.23c0 14.496 6.007 20.851 11.666 28.686 2.003 2.786 2.438 6.138-.087 8.227-6.312 5.268-17.542 15.062-23.723 20.546l-.087-.087" fill="#1a1a2c" fill-rule="evenodd" stroke="none"/></svg>
		</div>
		<div className=" flex flex-row justify-center items-center space-x-3">
        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full  px-3 py-3  items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
</button>
<button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-full  px-3 py-3   items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
  <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
</button>
<button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-3 py-3   items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
</button>
<button onClick={() => signIn(`google`)}  type="button" className="text-white bg-[#ac032e] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full  px-3 py-3 text-center  items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
</button>
<button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full  px-3 py-3   items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
  <svg className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
</button>
		</div>
		<div className="flex items-center justify-center space-x-2">
			<span className="h-px w-16 bg-gray-300"></span>
			<span className="text-gray-500 font-normal">OR</span>
			<span className="h-px w-16 bg-gray-300"></span>
		</div>
		<form className="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true" />
			<div className="relative">
				<div className="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
                </div>
				<label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
				<input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your email"  />
            </div>
			<div className="mt-8 content-center">
				<label className="text-sm font-bold text-gray-700 tracking-wide">
					Password
				</label>
				<input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password"  />
            </div>
			<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
						<label for="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
					</div>
				<div className="text-sm">
					<a href="#" className="font-medium  hover:text-yellow-500">
								Forgot your password?
					</a>
				</div>
			</div>
			<div>
				<button type="submit" className="w-full flex justify-center bg-yellow-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-yellow-800 shadow-lg cursor-pointer transition ease-in duration-300">
                    Sign in
                </button>
			</div>
			<p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
				<span>Don't have an account ?</span>
				<a href="#" className="hover:text-yellow-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</a>
			</p>
		</form>
	</div>
</div>
  )
}

export default login

export async function getServerSideProps(context) {
          const {req}=context;
        const session = await getSession({req})

      if(session){
        return {
          redirect : {destination : "/"}
        }
      }


    const providers = await getProviders()
    return {
      props: { providers },
    }
  }