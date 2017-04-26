import { ActivoterPlatformPage } from './app.po';

describe('activoter-platform App', () => {
  let page: ActivoterPlatformPage;

  beforeEach(() => {
    page = new ActivoterPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
