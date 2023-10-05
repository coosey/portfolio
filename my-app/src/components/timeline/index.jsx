export const Timeline = () => {
  return (
    <section className="font-satoshi m-auto ml-5 mr-5 flex flex-col flex-wrap p-4 text-justify">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-lg font-montserrat leading-none text-gray-900">March 2022 - present</time>
          <h3 className="text-2xl font-semibold text-white">Frontend Developer</h3>
          <ul className="mx-3 list-disc font-rale font-normal text-left xs:text-md text-xl text-white">
            <li className="py-2">
              Devised and implemented a bespoke airline internal ecommerce travel platform for admins and agents to purchase flights and manage bookings, generating over AUD 800,000 in sales in its first week
            </li>
            <li className="py-2">
              Designed and utilized a modular React architecture to decouple data and UI logic, improving maintainability and enabling scalable React components for code reuse
            </li>
            <li className="py-2">
              Integrated frontend logic with SDKs to orchestrate interactions with Java APIs for flight inventory management, departure control, RSVPS, and payments
            </li>
            <li className="py-2">
              Reengineered the booking and payment flow to accommodate a third-party payment API, enhancing user experience and simplifying the overall process
            </li>
            <li className="py-2">
              Restructured legacy code to enhance scalability, readability, and performance, delivering a 7% improvement in overall speed
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )
}