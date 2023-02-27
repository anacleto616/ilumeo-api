import toHoursAndMinutes from "./toHoursAndMinutes";

describe('To hours and minutes', () => {
  it('Deve ser possivel converter minutos em horas e retornar uma string formatada', () => {
    const hourFormatted = toHoursAndMinutes(480);

    expect(hourFormatted).toBe('8h');
  });
});
