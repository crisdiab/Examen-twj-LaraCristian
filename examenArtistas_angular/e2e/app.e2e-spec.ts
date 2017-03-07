import { ExamenArtistasPage } from './app.po';

describe('examen-artistas App', () => {
  let page: ExamenArtistasPage;

  beforeEach(() => {
    page = new ExamenArtistasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
