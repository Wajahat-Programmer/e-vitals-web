import Link from 'next/link';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline' | 'partner';
  className?: string;
}

export default function Button({ text, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses =
    'font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center';

  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#270949] to-[#a18adb] text-white hover:opacity-90 shadow-lg'
      : variant === 'outline'
      ? 'border border-[#a18adb] text-[#270949] hover:bg-[#a18adb] hover:text-white'
      : 'bg-[#293D55] hover:bg-[#1E2E45] text-white hover:shadow-lg';

  return (
    <Link href="#" className={`${baseClasses} ${variantClasses} ${className}`}>
      {text} <span className="ml-2">→</span>
    </Link>
  );
}
