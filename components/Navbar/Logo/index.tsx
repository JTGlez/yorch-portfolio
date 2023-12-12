import { useTheme } from "next-themes";
import * as React from "react";

function Logo(props: any) {
    const { theme } = useTheme();
    const color = theme === 'dark' ? '#ffffff' : '#000000';

    return (
        <div style={{ color: color }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 232.000000 55.000000"
                {...props}
            >
                <path
                    d="M1190 526c0-23 4-25 53-28l52-3V85l-52-3c-51-3-53-4-53-33V20h320v30c0 30-1 30-55 30h-55v470h-105c-105 0-105 0-105-24zM110 510c0-29 1-29 63-32l62-3 3-160c4-235 4-235-129-235H20V20h118c189 0 192 5 192 305v215H110v-30zM410 510c0-30 1-30 55-30h55V20h100v460h50c49 0 50 1 50 30v30H410v-30zM852 524c-46-32-52-61-52-244 0-250 7-260 197-260h123v290H940v-29c0-28 3-30 43-33l42-3V85l-45-3c-83-5-85 0-85 198 0 207-5 200 127 200h88v60H992c-90 0-123-4-140-16zM1618 414c-15-8-31-27-35-42-10-35-10-259 0-294 12-45 52-58 177-58h110v60h-84c-100 0-119 12-114 69l3 36 80 3c112 3 124 7 141 47 27 65 9 161-34 184-31 17-211 13-244-5zm190-56c13-13 16-66 6-92-5-12-21-16-75-16h-69v44c0 27 6 51 16 60 19 19 104 22 122 4zM1970 400v-30h95c65 0 95-4 95-11s-43-78-95-158c-52-81-95-155-95-164 0-15 16-17 160-17h160v60h-90c-55 0-90 4-90 10s41 75 90 153c50 79 90 153 90 165 0 22-2 22-160 22h-160v-30z"
                    fill="currentColor"
                    transform="matrix(.1 0 0 -.1 0 55)"
                />
            </svg>
        </div>
    )
}

export default Logo