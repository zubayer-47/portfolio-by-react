import classNames from "classnames";

const Classes = (navbarOpen) => {
   return {
      headerClass: classNames(
         {
            'col-span-4 hidden': navbarOpen,
            'col-span-12 h-screen grid': !navbarOpen,
         },
         'max-w-full md:col-span-4 xl:col-span-3 2xl:col-span-2 h-auto bg-gray-900 text-white text-center py-5 md:block overflow-auto'
      )

   }
}

export default Classes;
