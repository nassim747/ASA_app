export default function DecorativeBorder() {
  return (
    <div className="h-12 bg-heritage-red/10 border-y border-heritage-red/30 flex items-center justify-center overflow-hidden">
      <div className="flex gap-6 items-center">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center gap-1 text-heritage-red">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.4 0 2.7-.3 3.9-.8-3.1-1.8-5.2-5.2-5.2-9.2s2.1-7.4 5.2-9.2C14.7 2.3 13.4 2 12 2z"/>
            </svg>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
