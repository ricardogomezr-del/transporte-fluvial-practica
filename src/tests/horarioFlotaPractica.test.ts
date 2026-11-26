import { describe, it, expect } from 'vitest'
import { estadoFlotaPractica } from '../domain/horarioFlotaPractica'

describe('Horarios de flotas', () => {
  it('Antes de las 7 muestra En camino', () => {
    expect(estadoFlotaPractica(6)).toBe('En camino')
  })

  it('A las 10 muestra En muelle', () => {
    expect(estadoFlotaPractica(10)).toBe('En muelle')
  })

  it('Después de las 13 muestra Zarpó', () => {
    expect(estadoFlotaPractica(14)).toBe('Zarpó')
  })
})
