
export const SectionTitle = (props) => {
  return (
    <div className="m-auto">
      <h2 className={`
      text-4xl
      text-center
      font-bold
      mb-5
      border-b-[5px]
      w-[${props?.width}]
      border-primary
      pt-20
      `}
      >
        {props?.title}
      </h2>
    </div>
  )
}