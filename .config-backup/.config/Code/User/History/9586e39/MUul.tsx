"use client";

import { ButtonProps } from "./types";
import { Button as ShadCnButton } from "@/lib/shadCn";

const Button: React.FC<ButtonProps> = ({
    label,
    iconWithLabel,
    iconBehindLabel,
    onClick,
    variant = "default",
    customClasses = "",
    ...rest
}) => {
    return (
        <ShadCnButton onClick={onClick} variant={variant} {...rest} className={`cursor-pointer ${customClasses}`}>
            <div className="flex justify-center items-center gap-2">
                {iconBehindLabel && <span>{iconBehindLabel}</span>}
                {label && <span>{label}</span>}
                {iconWithLabel && <span>{iconWithLabel}</span>}
            </div>
        </ShadCnButton>
    );
};

export default Button;