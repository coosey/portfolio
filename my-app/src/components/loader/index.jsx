import './index.css';

const circle = 'w-5 h-5 my-12 mx-1 bg-gray-200 rounded-full';

export const Loader = () => {
  return (
    <div className="preloader">
      <div className="flex justify-center items-center h-screen">
        <span className={`${circle} animate-loader`}></span>
        <span className={`${circle} animate-loader animation-delay-200`}></span>
        <span className={`${circle} animate-loader animation-delay-400`}></span>
      </div>
    </div>
  )
}