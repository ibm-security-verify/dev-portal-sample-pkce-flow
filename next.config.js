const redirectUri = new URL(process.env.REDIRECT_URI).pathname;

module.exports = {
    async redirects() {
        return [
          {
            source: redirectUri,
            destination: '/redirect',
            permanent: true,
          },
        ]
      },
}