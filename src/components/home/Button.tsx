import Link from 'next/link'

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline' | 'partner';
  className?: string;
}

export default function Button({ text, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = "font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
  
  const variantClasses = 
    variant === 'primary' 
      ? "bg-[rgb(var(--primary-rgb))] hover:bg-[rgba(var(--primary-rgb),0.9)] text-white hover:shadow-lg" 
      : variant === 'outline'
      ? "border border-[rgb(var(--primary-rgb))] text-[rgb(var(--primary-rgb))] hover:bg-[rgb(var(--primary-rgb))] hover:text-white"
      : "bg-[#293D55] hover:bg-[#1E2E45] text-white hover:shadow-lg !important"

  return (
    <Link 
      href="#" 
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text} <span className="ml-2">→</span>
    </Link>
  )
}