const redirectUri = process.env.REDIRECT_URI;

module.exports = {
    async redirects() {
        return [
          {
            source: `/auth/callback`,
            destination: '/redirect',
            permanent: true,
          },
        ]
      },
}