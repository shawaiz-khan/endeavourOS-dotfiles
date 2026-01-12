import { Icon } from "lucide-react";
import { ReactNode } from "react";

export type IButton = {
    label: string | typeof Icon;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
    size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
    onClick?: () => void;
    customClasses?: string;
}