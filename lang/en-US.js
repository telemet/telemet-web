export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      telemet: 'telemet',
      '5g': '5G',
      nlaw: 'Natural Law',
      video: 'Video',
      news: 'News',
      meme: 'Meme',
      quotes: 'Quotes',
      archive: 'Archive',
      more: 'More'
    })
  })
}
