import { Heros2Page } from './app.po';

describe('heros2 App', function() {
  let page: Heros2Page;

  beforeEach(() => {
    page = new Heros2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
