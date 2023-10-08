import { Button } from "../../components";
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/')
  };

  return (
    <div className="h-[100vh] container m-auto flex justify-center text-center">
      <div className="mx-auto flex flex-col items-center justify-center gap-[1rem]">
        <p className="text-6xl md:text-8xl text-montserrat font-semibold text-white">Page Not Found!</p>
        <p className="text-lg md:text-2xl text-white font-rale font-extralight">The page you're looking for could not be found</p>
        <Button btn btnName="Return Home" customBtnStyle="font-rale font-light text-xl text-white rounded-lg bg-black py-2 px-5 m-3 transition-all duration-300 transform hover:opacity-80 hover:shadow-lg hover:scale-110" onBtnClick={handleBtnClick} />
      </div>
    </div>
  )
};

export default ErrorPage;