import { ButtonWithIconProps, NormalButtonProps } from "../props/buttonProps"

export const NormalButton = ({ className, text, onClick, style }: NormalButtonProps) => {
    return <button className={className} onClick={onClick} style={style}>{text}</button>
}

export const ButtonWithIcon = ({ className, onClick, style, text }: ButtonWithIconProps) => {
    return <button className={className[0]?.button} onClick={onClick} style={style[0]?.button}> <i className={className[1]?.icon} style={style[1]?.icon}></i> {text}</button>
} 