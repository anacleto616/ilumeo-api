import toHoursAndMinutes from "./toHoursAndMinutes";

describe('To hours and minutes', () => {
  it('should be possible to convert minutes to hours and return a formatted string', () => {
    const hourFormatted = toHoursAndMinutes(480);

    expect(hourFormatted).toBe('8h');
    expect(hourFormatted).not.toBe(8);
    expect(hourFormatted).not.toBe('');
  });
});
