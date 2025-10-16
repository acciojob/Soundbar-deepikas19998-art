const baseUrl = 'http://localhost:3000';  // Adjust this to your actual base URL

// Helper to assert audio or video is playing
function expectPlayingAudio() {
  // Get audio or video element(s)
  cy.get('audio,video').should('exist').then($media => {
    // Check if any media element is playing
    const isPlaying = [...$media].some(media => {
      return !media.paused && !media.ended && media.currentTime > 0;
    });

    // Assert at least one media element is playing
    expect(isPlaying).to.be.true;
  });
}

describe('Media playback tests', () => {
  beforeEach(() => {
    cy.visit(baseUrl + '/main.html');
  });

  it('Click first button plays media', () => {
    cy.get('.btn').first().click();

    // Wait up to 10s for media element to appear
    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });

  it('Click second button plays media', () => {
    cy.get('.btn').eq(1).click();

    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });

  it('Click third button plays media', () => {
    cy.get('.btn').eq(2).click();

    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });

  it('Click fourth button plays media', () => {
    cy.get('.btn').eq(3).click();

    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });

  it('Click fifth button plays media', () => {
    cy.get('.btn').eq(4).click();

    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });

  it('Click sixth button plays media', () => {
    cy.get('.btn').eq(5).click();

    cy.get('audio,video', { timeout: 10000 }).should('exist');

    expectPlayingAudio();
  });
});
