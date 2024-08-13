// https://qiita.com/toki_dev/items/de537515bca92ad7a892 参考

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant: keyof typeof buttonStyle;
};

const buttonStyle = {
    "green-fill": "bg-green-400 text-white",
    "red-gradation": "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
} as const;

export const Button = ({children, variant, className, ...props}: Props) => {
    return (
        <button
            className={`inline-flex h-12 items-center justify-center rounded-md  px-6 font-medium text-neutral-50 transition active:scale-110 ${buttonStyle[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};