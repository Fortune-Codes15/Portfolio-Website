document.addEventListener( "DOMContentLoaded", function () {
  const elements = document.querySelectorAll( ".fade-in" );

  const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
      if ( entry.isIntersecting ) {
        entry.target.classList.add( "show" );
      }
    } );
  }, { threshold: 0.3 } );

  elements.forEach( element => observer.observe( element ) );
} );

const nav_bar = document.querySelector( 'nav' )
let timeout;
window.addEventListener( 'scroll', () => {
  if ( window.scrollY > 10 ) {
    nav_bar.classList.add( 'fixed' )
    clearTimeout( timeout );
  } else {
    nav_bar.classList.remove( 'fixed' )
  }
} );
