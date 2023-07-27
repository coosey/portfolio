

export const Button = (props) => {
  return (
    <button class="text-xl p-2 m-5 bg-primary text-white transition-all duration-500 transform hover:opacity-90 hover:shadow-lg hover:scale-125">{props?.btnName}</button>
  )
}