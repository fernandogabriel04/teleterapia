interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
  }

export default function Input({icon, ...props}: InputProps) {
    return (
        <div className="relative w-full flex-1">
            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-muted-foreground">
                {icon}
            </span>
            <input
                {...props}
                className="w-full pl-16 h-16 rounded-full text-zinc-100 bg-zinc-950 bg-opacity-20 placeholder:text-sm placeholder:text-zinc-100 placeholder:relative placeholder:-top-1"
            />
        </div>
    )
}