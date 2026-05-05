module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/'], // The root page. LHCI spins up a server automatically.
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:best-practices': ['warn', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
        'largest-contentful-paint': ['warn', {maxNumericValue: 2500}],
        'cumulative-layout-shift': ['warn', {maxNumericValue: 0.1}],
      }
    },
    upload: {
      target: 'temporary-public-storage', // Uploads to a temporary public URL for easy viewing
    },
  },
};
