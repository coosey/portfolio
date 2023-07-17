
export const SectionTitle = (props) => {
  return (
    <div class="m-auto">
      <h2 class={`
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