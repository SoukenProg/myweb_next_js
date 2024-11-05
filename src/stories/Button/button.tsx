import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    color?: "default" | "primary" | "secondary";
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ href="#", children,color = 'default', className }) => {
    return (
        <Link href={href} className={　`${styles.button} ${styles[color]} ${className ? className : ''}`}>
                {children}
        </Link>
    );
};

export default Button;