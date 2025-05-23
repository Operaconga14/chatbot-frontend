import { CSSProperties } from "react";

export interface NormalButtonProps {
    className?: string;
    text?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

export interface ButtonWithIconProps {
    className: [{ button: string }, { icon: string }];
    text?: string;
    style: [{ button: CSSProperties }, { icon: CSSProperties }];
    onClick?: () => void;
}
