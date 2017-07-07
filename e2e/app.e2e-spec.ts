import { MyDipPage } from './app.po';

describe('my-dip App', () => {
  let page: MyDipPage;

  beforeEach(() => {
    page = new MyDipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
