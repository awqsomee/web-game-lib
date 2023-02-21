function bord3() {
  document.getElementById('bg').animate(
    {
      backgroundColor: 'red', // offset: 0, 0.5, 1
    },
    { duration: 2000, iterations: 1 }
    // [
    //   {},
    //   {
    //     // to
    //     backgroundImage: url('https://unsplash.it/600/600'),
    //   },
    // ],
    // {
    //   duration: 2000,
    //   iterations: 1,
    // }
  )
}
