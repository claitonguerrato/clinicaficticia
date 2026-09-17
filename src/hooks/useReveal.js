import { useEffect, useRef } from 'react'

/**
 * Adiciona a classe "is-visible" aos elementos filhos marcados com
 * a classe "reveal" assim que entram na viewport (Intersection Observer).
 * Uso: const ref = useReveal(); <section ref={ref}>...</section>
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.classList.contains('reveal')
      ? [root]
      : Array.from(root.querySelectorAll('.reveal'))

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
