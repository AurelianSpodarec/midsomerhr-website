import coffee from "./_icons/coffee.json"
import shield from "./_icons/shield.json"
import pig from "./_icons/pig.json"
import timer from "./_icons/timer.json"
import settings from "./_icons/settings.json"
import snowflake from "./_icons/snowflake.json"
import { IItem } from "./IItem"

export const dataPainPoints: IItem[] = [
  {
    title: "Flexible Contracts",
    desc: "We offer flexible, no-obligation packages. You can scale up or down as your business needs change - no strings attached.",
    // icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><g data-name="options"><path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path></g></svg>
    icon: settings
  },
  {
    title: "Speak to the Same Expert Every Time",
    desc: (
      <>
        You’ll always work directly with me, <span className="italic">Kristina</span>, someone who knows your business inside and out, and offers tailored advice every time.
      </>
    ),
    icon: coffee,
    scale: 2.5
    // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill="currentColor" d="M1.38197865,8.50468479 L1.38197865,13.5631773 C1.38197865,16.3563179 3.64597172,18.6206981 6.43875483,18.6206981 L10.1164674,18.6206981 C12.9092315,18.6206981 15.1731941,16.3563849 15.1731941,13.5632501 L15.1731941,8.50570164 L1.38197865,8.50468479 Z M11.887167,0.161126688 C12.1790318,0.405797785 12.2173171,0.840778552 11.9726796,1.13268342 C11.3308774,1.89849054 11.1893646,2.41967954 11.3874211,2.76994178 C11.4488712,2.8786161 11.9803359,3.71845921 12.1019698,3.97653935 C12.3777947,4.56177877 12.4141083,5.12932211 12.1755421,5.79896276 C12.0096241,6.26468436 11.7585443,6.7072078 11.424894,7.12657781 L15.306126,7.12640952 C15.7430066,7.14261066 16.0599124,7.25440509 16.2568432,7.46179281 C16.3655095,7.57622922 16.4442154,7.72017702 16.4929381,7.89363623 L16.5522181,7.89203692 L16.5522181,7.89203692 C18.4563755,7.89203692 20,9.43587318 20,11.3402917 C20,13.2447103 18.4563755,14.7885465 16.5522181,14.7885465 L16.4365643,14.7847793 C15.8659428,17.7555445 13.2532898,20 10.1164728,20 L6.43872469,20 C2.88430599,20 0.00288657549,17.1180836 0.00288657549,13.5631773 L0.00286521846,8.33673221 C-0.0167941967,7.90387044 0.0647147488,7.59740722 0.247392055,7.41734256 C0.430069361,7.2372779 0.699557002,7.14030022 1.05585498,7.12640952 L4.00913096,7.12670462 C4.04659087,7.06454857 4.09457662,7.00729401 4.15287076,6.95765169 C4.76165561,6.43922067 5.15955413,5.89859775 5.35998008,5.33601443 C5.47365368,5.01693962 5.46146952,4.82651397 5.33804655,4.56463778 C5.25990012,4.39882836 4.76908244,3.62321744 4.67052633,3.44892126 C4.13215786,2.49681825 4.42865329,1.40483106 5.39929252,0.246650998 C5.64393006,-0.0452538722 6.07885117,-0.0835444104 6.370716,0.161126688 C6.66258084,0.405797785 6.70086613,0.840778552 6.45622859,1.13268342 C5.81442645,1.89849054 5.67291366,2.41967954 5.87097011,2.76994178 C5.93242021,2.8786161 6.46388494,3.71845921 6.58551882,3.97653935 C6.86134377,4.56177877 6.89765735,5.12932211 6.65909115,5.79896276 C6.49317317,6.26468436 6.24209337,6.7072078 5.90844306,7.12657781 L6.76735645,7.12670462 C6.80481636,7.06454857 6.8528021,7.00729401 6.91109625,6.95765169 C7.5198811,6.43922067 7.91777962,5.89859775 8.11820556,5.33601443 C8.23187916,5.01693962 8.21969501,4.82651397 8.09627204,4.56463778 C8.0181256,4.39882836 7.52730793,3.62321744 7.42875181,3.44892126 C6.89038335,2.49681825 7.18687878,1.40483106 8.15751801,0.246650998 C8.40215555,-0.0452538722 8.83707666,-0.0835444104 9.12894149,0.161126688 C9.42080633,0.405797785 9.45909161,0.840778552 9.21445407,1.13268342 C8.57265194,1.89849054 8.43113915,2.41967954 8.6291956,2.76994178 C8.6906457,2.8786161 9.22211043,3.71845921 9.34374431,3.97653935 C9.61956926,4.56177877 9.65588284,5.12932211 9.41731664,5.79896276 C9.25139865,6.26468436 9.00031885,6.7072078 8.66666855,7.12657781 L9.52558193,7.12670462 C9.56304184,7.06454857 9.61102759,7.00729401 9.66932174,6.95765169 C10.2781066,6.43922067 10.6760051,5.89859775 10.8764311,5.33601443 C10.9901047,5.01693962 10.9779205,4.82651397 10.8544975,4.56463778 C10.7763511,4.39882836 10.2855334,3.62321744 10.1869773,3.44892126 C9.64860884,2.49681825 9.94510427,1.40483106 10.9157435,0.246650998 C11.160381,-0.0452538722 11.5953021,-0.0835444104 11.887167,0.161126688 Z M16.5522181,9.27133884 L16.5522181,13.4092446 L16.5522181,13.4092446 C17.6947125,13.4092446 18.6208873,12.4829429 18.6208873,11.3402917 C18.6208873,10.1976406 17.6947125,9.27133884 16.5522181,9.27133884 Z"></path></svg>
  },
  {
    title: "Affordable Pricing for Small Businesses",
    desc: "Our pricing is designed with small businesses in mind. Get the high-quality HR support you need without breaking the bank.",
    // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    //   <path d="M15 11v.01"></path>
    //   <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377"></path>
    //   <path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z"></path>
    // </svg>
    icon: pig,
    scale: 1.2
  },
  {
    title: "Tailored, Proactive Advice",
    desc: "Instead of generic solutions, we provide personalized, proactive guidance that fits your specific business challenges and goals.",
    // icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M24 4V44" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.72461 14L41.3656 34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.71923 33.9773L41.2814 14.0228" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10L15 19L6 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 27L15 29L12 38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36 10L33 19L42 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42 27L33 29L36 38" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 7L24 13L30 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 41L24 35L30 41" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    icon: snowflake
  },
  {
    title: "Fast, Reliable Responses",
    desc: "You won’t be left waiting for weeks. I offer prompt, reliable support, addressing your issues as quickly as possible.",
    // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"></path></svg>
    icon: timer
  },
  {
    title: "Proactive Solutions",
    desc: "Instead of waiting for problems to arise, I’ll help you prevent them with strategic, forward-thinking HR practices designed to keep your business ahead.",
    icon: shield
    // icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m3.003 4.702 4.22-2.025a1.8 1.8 0 0 1 1.554 0l4.22 2.025a.89.89 0 0 1 .503.8V6a8.55 8.55 0 0 1-3.941 7.201l-.986.631a1.06 1.06 0 0 1-1.146 0l-.986-.63A8.55 8.55 0 0 1 2.5 6v-.498c0-.341.196-.652.503-.8m3.57-3.377L2.354 3.35A2.39 2.39 0 0 0 1 5.502V6a10.05 10.05 0 0 0 4.632 8.465l.986.63a2.56 2.56 0 0 0 2.764 0l.986-.63A10.05 10.05 0 0 0 15 6v-.498c0-.918-.526-1.755-1.354-2.152l-4.22-2.025a3.3 3.3 0 0 0-2.852 0M8.47 9.97a.75.75 0 1 0 1.06 1.06c.575-.574 1.118-1.398 1.516-2.195.386-.772.704-1.653.704-2.335a.75.75 0 0 0-1.5 0c0 .318-.182.937-.546 1.665-.352.703-.809 1.379-1.234 1.805" clip-rule="evenodd"></path></svg>
  }
]
