import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
const inactiveLink = 'flex gap-2  flex opacity-80 text-stone-200  text-bold rounded-l-lg hover:text-neon-pink hover:bg-black-950';
const activeLink = inactiveLink+ ' bg-dodger-silver-200 text-neon-blue hover:opacity-100';
const router =useRouter();
const {pathname} = router;

    return (
        
       <aside className=" text-black-200 font-bold text-2xl p-4 pr-0 opacity-90">
        <sidebar>
            <span>Something</span>
            <link href="#">Goose.</link>
            <wrapper>
                <title>Menu</title>
                <menu>
                    <link href="#">
                    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z" />
     </svg>
                    Discover
                    </link>
                </menu>
            </wrapper>
        </sidebar>
       </aside>
    );
}
