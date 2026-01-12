import { ReactNode } from "react";

interface IButtonProps {
    label?: string;
    iconWithLabel?: ReactNode;
    iconBehindLabel?: ReactNode;
    variant?: "link" | "default" | "destructive" | "secondary" | "outline" | "ghost";
    customClasses?: string;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;