const button_style = "text-xl py-2 px-4 m-2 bg-primary text-white transition-all duration-500 transform hover:opacity-90 hover:shadow-lg hover:scale-105";

export const Button = (props) => {

  const downloadPDF = () => {
    fetch('/files/matthew-nguyen-resume.pdf').then(res => {
      res?.blob?.()?.then(blob => {
        const pdfURL = window?.URL?.createObjectURL(blob);
        let alink = document?.createElement?.('a');
        alink.href = pdfURL;
        alink.download = 'matthew-nguyen-resume.pdf';
        alink?.click?.();
      })
    });
  }

  return (
    <>
      {props?.btn && (
        <button
          className={props?.btnStyle ? button_style : props?.customBtnStyle}
          onClick={() => props?.onBtnClick()}
        >
          {props?.btnName}
        </button>
      )}
      {props?.downloadBtn && (
        <button
          onClick={() => downloadPDF()}
          className={props?.btnStyle ? button_style : props?.customDownloadBtnStyle}
        >
          {props?.downloadBtnName}
        </button>
      )}
    </>
  )
}