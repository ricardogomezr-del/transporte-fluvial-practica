export function estadoFlotaPractica(hora: number): string {
  if (hora < 7) {
    return 'En camino'
  }

  if (hora <= 13) {
    return 'En muelle'
  }

  return 'Zarpó'
}