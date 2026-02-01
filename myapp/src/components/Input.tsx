export default function Input({
    label,
    error,
    className = "",
    ...props
  }:{label?: string, error?: string, className?: string, props: React.InputHTMLAttributes<HTMLInputElement>}) {
    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
  
        <input
          className={`
            w-full px-3 py-2 border rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"}
            ${className}
          `}
          {...props}
        />
  
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
  