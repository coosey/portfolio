
export const SectionTitle = (props) => {
  return (
    <div className="pt-5 m-auto">
      <h2 className={`
      text-4xl
      text-center
      mb-2
      border-b-[2px]
      border-black
      pt-20
      text-white
      font-rale
      font-light
      `}
      >
        {props?.title}
      </h2>
    </div>
  )
}