export const Timeline = () => {
  return (
    <section className="font-satoshi m-auto ml-5 mr-5 flex flex-col flex-wrap p-4 text-justify">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time class="mb-1 text-lg font-normal leading-none dark:text-gray-500">March 2022 - present</time>
          <h3 class="text-2xl font-semibold text-gray-900">Frontend Developer</h3>
          <ul className="mx-3 leading-6 list-disc font-medium text-left text-xl text-gray-800">
            <li className="py-2">
              Developed a Passenger Service System (internal Ecommerce platform) for admins & travel agents to help book flights & manage
              bookings for thousands of Australian customers which generated over 600k AUD within the first week of sales
            </li>
            <li className="py-2">
              Utilized a layered architecture to create separation of logic between UI and data layer to improve maintainability and create modular,
              scalable React components for code reuse
            </li>
            <li className="py-2">
              Integrated internal SDK to execute with backend API which in turn allows modification to specific functionality within booking/management flow
              (i.e. pending payment, order retrieval, order change)
            </li>
            <li className="py-2">
              Executed as one of the leading developer for the booking and management development's process from concept to production
            </li>
            <li className="py-2">
              Updated current payment system to utilize Uplift's 3rd Party payment API throughout booking process
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )
}