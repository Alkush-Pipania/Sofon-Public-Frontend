export default function BarChartIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="26"
            viewBox="0 0 33 26"
            fill="none"
            className={className}
        >
            <g opacity="0.5">
                <path
                    d="M0 16.61C0 15.5054 0.895431 14.61 2 14.61C3.10457 14.61 4 15.5054 4 16.61V21H0V16.61Z"
                    fill="#A8A8AE"
                />
                <path
                    d="M6 13.41C6 12.3055 6.89543 11.41 8 11.41C9.10457 11.41 10 12.3055 10 13.41V21H6V13.41Z"
                    fill="#CECED0"
                />
                <path
                    d="M12 18.1999C12 17.0954 12.8954 16.2 14 16.2C15.1046 16.2 16 17.0954 16 18.2V21H12V18.1999Z"
                    fill="#CCCCCC"
                />
                <path
                    d="M18 10.2C18 9.09538 18.8954 8.19995 20 8.19995C21.1046 8.19995 22 9.09538 22 10.2V21H18V10.2Z"
                    fill="white"
                />
                <g filter="url(#filter0_d_31_75)">
                    <path
                        d="M24 7C24 5.89543 24.8954 5 26 5C27.1046 5 28 5.89543 28 7V21H24V7Z"
                        fill="#FDFDFD"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_31_75"
                    x="19"
                    y="0"
                    width="14"
                    height="26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_31_75"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_31_75"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
