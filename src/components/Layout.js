import React from 'react'

export const Layout = ({children}) => {
  return (
    <>
    {children}
         <footer class="bg-dark  p-5 text-center mt-5 xyz">
      {/* <!-- text-light --> */}

      Copyright &copy; All right reserved. Made with ❤️ by me

    </footer>
   
      <a href="#navbar" id="go-up"><i class="fa-solid fa-circle-up"></i></a>

 
    </>
  )
}
