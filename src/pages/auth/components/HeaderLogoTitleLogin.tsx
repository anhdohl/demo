import { HeaderLogoTitleLoginIF } from "../Interface/SignInInterface";


export default function HeaderLogoTitleLogin({
    title,
    description
}: HeaderLogoTitleLoginIF) {
    return (
        <>
            <div className='flex flex-col text-left mb-8'>
                <div className='flex justify-center'>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_15_8623)">
                            <path d="M41.2172 5.23618C42.5418 6.73513 42.7784 9.65656 41.0121 13.8236C39.303 17.8554 35.9252 22.4669 31.2293 26.6168C26.5335 30.7667 21.5417 33.5519 17.3303 34.7522C12.9777 35.9928 10.1075 35.3987 8.78284 33.8998C7.45816 32.4008 7.22156 29.4794 8.9879 25.3124C10.697 21.2805 14.0748 16.6691 18.7707 12.5192C23.4665 8.36921 28.4583 5.58407 32.6697 4.38375C37.0223 3.1432 39.8925 3.73724 41.2172 5.23618Z" stroke="url(#paint0_linear_15_8623)" strokeWidth="3.61806" />
                            <mask id="mask0_15_8623" maskUnits="userSpaceOnUse" x="13" y="20" width="30" height="25">
                                <path d="M30.8774 24.5185C30.2216 25.2195 27.983 26.9833 27.0332 27.6617C27.7342 28.7019 29.3171 30.624 30.0407 29.9908C30.9452 29.1994 32.6864 27.7748 33.6814 26.8024C34.6764 25.8301 35.8522 26.3049 36.0784 26.3502C36.2593 26.3863 38.7316 29.4707 39.9452 31.0084C40.6989 33.3225 42.22 37.9732 42.2743 38.0636C42.3421 38.1767 41.6185 42.1792 41.5733 42.3148C41.5371 42.4234 39.8999 43.8374 39.0859 44.5309L30.8322 44.8249L24.2971 42.1792L18.4177 37.1139L15.4554 32.9983C14.958 30.9783 13.9404 26.911 13.8499 26.8024C13.7595 26.6939 14.4454 22.8678 14.7997 20.9683C18.9529 20.6668 27.282 20.0728 27.3724 20.109C27.4855 20.1542 31.5332 23.8175 30.8774 24.5185Z" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_15_8623)">
                                <path d="M39.2647 40.5975C38.686 41.3642 37.1407 41.9573 34.2532 41.3705C31.5096 40.813 28.1429 39.2705 24.8764 36.8049C21.6098 34.3392 19.2037 31.5243 17.9155 29.0385C16.5598 26.4224 16.7067 24.7737 17.2854 24.007C17.8641 23.2404 19.4094 22.6473 22.2969 23.234C25.0405 23.7915 28.4072 25.334 31.6737 27.7997C34.9402 30.2653 37.3464 33.0803 38.6345 35.5661C39.9902 38.1822 39.8434 39.8308 39.2647 40.5975Z" stroke="url(#paint1_linear_15_8623)" strokeWidth="3.61806" />
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_15_8623" x1="14.8546" y1="43.5021" x2="53.2018" y2="7.23544" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF057C" />
                                <stop offset="0.770833" stopColor="#4CC3FF" />
                                <stop offset="1" stopColor="#7AFFF7" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_15_8623" x1="11.353" y1="28.8637" x2="40.0331" y2="49.0294" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF057C" />
                                <stop offset="0.770833" stopColor="#4CC3FF" />
                                <stop offset="1" stopColor="#7AFFF7" />
                            </linearGradient>
                            <clipPath id="clip0_15_8623">
                                <rect width="50" height="49.1917" fill="white" transform="translate(0 0.904297)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p className='text-[#0E0A29] text-[25px] text-center font-semibold'>
                    {title}
                </p>
                <p className='text-[#0E0A29] text-[14px] text-center font-normal'>
                    {description}
                </p>
            </div>
        </>
    )
}
