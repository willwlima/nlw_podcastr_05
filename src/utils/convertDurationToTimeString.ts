export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600) // Arredonda a hora para baixo
  const minutes = Math.floor((duration % 3600) / 60); 
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) // Para cada unidade percorrida converte em String com 2 caracteres adicionando o 0
    .join(':')

    return timeString;
}