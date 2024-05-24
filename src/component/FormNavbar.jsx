import React from 'react'

const FormNavbar = () => {
  return (
    <div>
         <div className="bg-[#0d141e]">
      <footer class="footer flex items-center justify-center flex-col py-8 gap-1 text-sm">
        <div class="footer-content text-white">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div class="copyright text-white">
          &copy; 1996-2024, Amazon.com, Inc. and its affiliates
        </div>
      </footer>
    </div>

    <div className="bg-[#232f3e]">
      <div className="max-w-screen-xl ml-2">
        <img
          className="w-24"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          alt=""
        />
      </div>
    </div>
    </div>
  )
}

export default FormNavbar