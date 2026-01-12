import { Button as ShadcnButton } from '@/lib/shadcn/ui/button';
import { IButton } from './types';

export const Button: React.FC<IButton> = ({ label, onClick, variant = 'default', customClasses, size }) => {
    return (
        <div>
            <ShadcnButton
                className={`rounded-sm font-medium cursor-pointer ${customClasses}`}
                onClick={onClick}
                variant={variant}
                size={size}
            >
                {label}
            </ShadcnButton>
        </div>
    );
};