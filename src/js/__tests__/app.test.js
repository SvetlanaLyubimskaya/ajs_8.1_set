import Team from '../app';

const team = new Team();

test('add1', () => {
    team.add('swordsman');
    const result = ['swordsman'];
    expect(team.add('swordsman')).toEqual(result);
});

test('add2', () => { // доб того же персонажа
    team.add('swordsman');
    const result = 'Объект уже существует в команде';
    expect(team.add('swordsman')).toThrow(result);
});
