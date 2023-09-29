
export const Timeline = () => {
  return (
    <section>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time class="mb-1 text-lg font-normal leading-none dark:text-gray-500">March 2022 - present</time>
          <h3 class="text-2xl font-semibold text-gray-900">Frontend Developer</h3>
          <ul className="mx-3 leading-6 list-disc font-medium text-left text-xl text-gray-800">
            <li className="py-2">
              Developed Bonza Airline’s Passenger Service System that is used by admins & travel agents to help book flights & manage
              bookings for thousands of Australian customers
            </li>
            <li className="py-2">
              Implemented layered architecture that separates data and business logic to improve maintainability and create modular,
              scalable React components for future reuse
            </li>
            <li className="py-2">
              Integrated internal SDK with backend API to modify or allow specific functionality of booking/management flow
            </li>
            <li className="py-2">
              Lead booking management & booking flow development process from concept to production while working alongside with
              business analysts, product managers, and developers
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )
}