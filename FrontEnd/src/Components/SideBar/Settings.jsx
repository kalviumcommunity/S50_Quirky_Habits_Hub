function Settings() {
  return (
    <>
        <div className="m-10 ">
          <div className="m-8 border settings bg-cyan-800 border-cyan-700 p-10 ">
            <div class="inline-flex px-4 mx-auto">
              <p class="text-4xl text-white font-semibold tracking-widest text-g uppercase">
                Settings:
              </p>
            </div>
            <div class="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-3 lg:mt-20   ">
              <a
                href="#"
                class="transition-all  duration-1000 bg-white   hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:w-1/2  "></div>
                <div class="py-2 px-9">
                  <svg
                    className="w-16 h-16 fill-current text-gray-400 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15c.3-.7.6-1.5.6-2.4s-.3-1.7-.8-2.4m-2.8-2.3c-.2.5-.4 1-.5 1.5m-8.2 0c-.2-.5-.4-1-.5-1.5m-.6-3.1c-.7-.1-1.5-.2-2.3-.2s-1.6.1-2.3.2m-.6 3.1c-.1.5-.2 1-.3 1.5m6 2.3c-.1-.5-.2-1-.3-1.5m1.9-2.3c-.2.5-.4 1-.5 1.5" />
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black  ">
                    Account Details
                  </h3>
                  <p class="mt-4 text-base text-gray-600   ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="transition-all  duration-1000 bg-white   hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 "
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 64 64"
                    viewBox="0 0 64 64"
                    id="furniture"
                  >
                    <path d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black  ">
                    Your Posts
                  </h3>
                  <p class="mt-4 text-base text-gray-600 ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="transition-all  duration-1000 bg-white   hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200 group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    className="animate-spin w-16 h-16 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black  ">
                    Loading..
                  </h3>
                  <p class="mt-4 text-base text-gray-600 "></p>
                </div>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Settings;
