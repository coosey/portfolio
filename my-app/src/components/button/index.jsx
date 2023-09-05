const button_style = "text-xl p-2 m-5 bg-primary text-white transition-all duration-500 transform hover:opacity-90 hover:shadow-lg hover:scale-105";

export const Button = (props) => {
  return (
    <>
      {props?.btn && (
        <button
          className={props?.btnStyle ? button_style : props?.customBtnStyle}
        >
          {props?.btnName}
        </button>
      )}
      {props?.downloadBtn && (
        <button
          download
          target="_blank"
          className={props?.btnStyle ? button_style : props?.customDownloadBtnStyle}
        >
          {props?.downloadBtnName}
        </button>
      )}
    </>
  )
}