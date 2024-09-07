import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 243 433"
      xmlSpace="preserve"
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="17"
        d="M101 60c-6.714-3.06-11.006-8.638-14.991-14.506-4.974-7.322-11.355-13.208-19.564-16.351-7.17-2.747-15.991.648-21.909 8.385-6.89 9.007-8.344 19.528-7.508 30.47 1.095 14.335 5.481 27.726 11.952 40.512 5.848 11.556 13.875 21.573 22.056 31.46 7.835 9.47 16.253 18.468 23.885 28.092 8.165 10.295 12.705 22.199 9.929 35.406-3.004 14.292-10.3 25.828-23.787 33.147-12.694 6.89-26.341 11.654-39.036 18.436-11.302 6.04-21.795 13.144-26.503 25.958-2.903 7.899-2.408 16.131-.39 23.956 4.368 16.929 13.884 31.218 24.93 44.482 3.377 4.056 7.12 7.89 11.436 11.053"
        opacity="1"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="13"
        d="M184 200c-.76-4.5 2.598-9.587-.206-13.346-3.243-4.346-5.625-9.046-8.375-13.605-1.389-2.304-2.747-4.688-4.872-6.601-5.63-5.07-11.77-5.345-17.548-.45-6.03 5.11-9.552 11.47-9.478 19.502.069 7.5-.291 15.076.639 22.48 1.055 8.4 5.091 16.002 8.897 23.49 4.729 9.305 10.563 18.07 13.902 28.044 1.617 4.83 4.36 9.633 2.503 14.973-3.18 9.143-8.043 16.737-17.394 21.157-6.953 3.286-14.067 4.383-21.494 5.757-9.717 1.797-20.342 3.239-27.56 11.612-6.884 7.987-8.061 16.669-5.318 27.067 2.328 8.824 6.69 16.573 9.65 24.974.824 2.338 3.029 3.268 3.654 5.446"
        opacity="1"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="20"
        d="M101.75 73c-.25-3.333-.57-6.664-.706-10.002-.04-.975-.593-2.15.457-2.997 8.037-6.475 12.089-16.392 19.971-23.034 4.836-4.075 10.488-6.358 16.539-6.833 8.41-.659 14.473 3.367 19.653 10.242 7.068 9.38 5.925 19.803 3.993 29.556-2.518 12.712-9.309 23.893-17.57 34.139-8.069 10.008-15.594 20.474-22.988 30.999-2.41 3.43-5.54 6.267-7.599 9.93"
        opacity="1"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="13"
        d="M185.5 187.5c5.362-1.514 8.575-6.124 12.971-9.043 9.34-6.202 20.389-4.858 25.824 5.649 1.988 3.843 1.582 9.074.083 13.351-2.175 6.207-5.349 11.874-10.304 16.62-9.806 9.39-19.758 18.605-30.124 27.364-1.71 1.446-3.141 2.678-2.95 5.059"
        opacity="1"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M78.5 415.5v5h5"
        opacity="1"
      ></path>
    </svg>
  );
}


function SectionHero() {
  return (
    <Section id="hero" color="clean" className="h-screen bg-[#faf9f9]">


      <Container>
        <div className="flex mb-10 mt-12">
          <div className="relative">
            <div className="absolute w-[30px] -top-[35px] -left-[30px]">
              <Icon />
            </div>

            <h1 className="text-8xl font-bold font-playFair leading-[0.85] max-w-screen-md mb-4"><span className="hand-underline">Personalized</span> HR Support for Small Businesses</h1>
            <p className="max-w-screen-sm text-lg">Join small business founders who trust MidsomerHR for tailored HR solutions. From bespoke contracts to ongoing support and flexible projects, enjoy hands-on expertise without the faceless consultancy.</p>
            <div className="mt-6 space-x-4">
              <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 px-4 text-white">Schedule a Call with Kristina</button>
              <button className="px-4 py-3 border border-transparent hover:border-black rounded-lg">Learn more</button>
              {/* <button className="hidden lg:inline-flex nav-cta border border-[#131313] rounded-lg py-3 px-4 items-center align-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5 w-5 mr-2">
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                </svg>
                Meet Kristina
              </button> */}
            </div>
          </div>

          <div className="absolute top-16 right-20">
            <div className="relative h-[580px] cursor-pointer">
              {/* <div className="absolute -top-16 -left-48 rotate-[-10deg] w-[150px]">
                <IconHandwrittenName />
              </div> */}
              <img
                // src="https://media.licdn.com/dms/image/D4E22AQGvGUQY33uOKQ/feedshare-shrink_800/0/1722549905988?e=2147483647&v=beta&t=x2gBAuo7khObVRfNCH3Mqs0Gi80gdixwjSbmatTUJkI"
                src="https://media.licdn.com/dms/image/D5622AQHO-FLTYEQ6mA/feedshare-shrink_800/0/1719263806377?e=2147483647&v=beta&t=NHxj33VoH6vREEXH0P7kxI6vwp8bnTqxbh2d28w-uGk"
                // src="https://img.freepik.com/premium-photo/discussing-ideas-weekends-work-break-sitting-outdoors-city-bench_168386-500.jpg"
                className="rounded-3xl h-[580px]"
              />
              {/* #913c3c - nice brown */}
              <svg className="fill-[#913c6d] absolute w-16 h-16 z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 52.821 52.821">
                <g>
                  <path d="M51.82,19.074c-1.488-5.344-4.965-10.164-9.608-13.189C37.292,2.68,30.86,1.717,25.106,1.588   C17.071,1.404,6.893,4.49,2.94,12.152c-0.329,0.637,0.64,1.184,0.969,0.547c2.801-5.43,9.491-8.566,15.263-9.594   c6.209-1.104,12.998-0.236,18.873,1.955c6.134,2.287,10.393,7.537,12.486,13.611c2.33,6.758,1.04,13.488-2.679,19.424   c-7.678,12.252-26.522,16.229-37.982,6.943c-5.25-4.254-8.674-9.945-8.74-16.752c-0.039-4.012,0.743-8.492,2.746-12.012   c0.621-1.09,1.455-2.024,2.396-2.867c0.014-0.219,0.03-0.436,0.045-0.652c-0.109-0.139-0.202-0.289-0.25-0.475   c-0.005-0.021-0.004-0.037-0.009-0.059c-0.572,0.481-1.126,0.986-1.65,1.529c-2.291,2.371-3.194,5.66-3.832,8.801   c-1.268,6.24-0.515,12.074,3.063,17.346c3.063,4.514,7.787,8.715,13.131,10.182c6.42,1.762,13.123,1.613,19.198-1.108   c2.749-1.23,5.729-2.438,8.039-4.424c2.833-2.438,4.961-5.881,6.679-9.156C53.305,30.399,53.303,24.397,51.82,19.074z" />
                  <path d="M17.736,31.85c0.103,1.15,0.121,3.08,1.325,3.598c0.051,0.066,0.105,0.127,0.167,0.174   c1.198,0.902,2.868-0.504,3.876-1.109c2.797-1.674,12.586-8.037,14.039-10.277c0.151-0.234,0.098-0.455-0.046-0.609   c-0.01-0.16-0.081-0.318-0.258-0.428c-1.622-0.992-8.87-4.297-10.89-5.045c-1.044-0.389-5.593-2.34-6.212-2.355   c-2.373-1.525-2.021,5.525-2.033,6.152C17.639,25.235,17.444,28.574,17.736,31.85z M20.96,25.033   c-0.088,0.039-0.162,0.102-0.217,0.182c-0.004-0.299-0.009-0.596-0.011-0.891c0.096,0.055,0.197,0.104,0.298,0.154   C21.009,24.66,20.984,24.846,20.96,25.033z M21.167,29.695c0.063-0.248,0.151-0.498,0.257-0.748   c1.583-0.371,3.088-1.146,4.634-1.645c0.754-0.207,1.509-0.414,2.259-0.633C25.981,27.764,23.595,28.74,21.167,29.695z    M24.587,25.762c-0.18,0.082-0.362,0.162-0.539,0.25c-0.158-0.098-0.319-0.174-0.483-0.244   C23.905,25.758,24.246,25.754,24.587,25.762z M24.108,24.285c0.023-0.014,0.048-0.025,0.074-0.037   c0.642,0.137,1.284,0.231,1.944,0.24c0.459,0.055,0.918,0.113,1.378,0.166c-0.044,0.016-0.088,0.029-0.133,0.045   C26.401,24.598,25.23,24.488,24.108,24.285z M28.874,23.106c-0.761-0.27-1.523-0.549-2.291-0.854   c-1.265-0.502-2.525-0.859-3.846-1.17c-0.413-0.096-0.753-0.26-1.052-0.465C24.175,21.008,26.571,21.971,28.874,23.106z    M22.896,22.258c-0.75-0.072-1.509-0.107-2.278-0.105c-0.026-0.297-0.056-0.592-0.085-0.889   C21.281,21.785,22.06,22.047,22.896,22.258z" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <ul className="flex space-x-4">
          <li className="flex items-center align-center space-x-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
            <span>
              No Obligations
            </span>
          </li>
          <li className="flex items-center align-center space-x-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
            <span>
              Flexible Pricing
            </span>
          </li>
          <li className="flex items-center align-center space-x-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
            <span>
              Tailored Solution
            </span>
          </li>
        </ul>



      </Container>
    </Section>
  )
}

export default SectionHero
