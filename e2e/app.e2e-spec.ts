import { RandomGamePage } from './app.po';

describe('random-game App', () => {
  let page: RandomGamePage;

  beforeEach(() => {
    page = new RandomGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
