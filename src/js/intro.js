
// Common.js-friendly stuff from jQuery

(function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {

        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "Gauge.js requires a window with a document" );
                }
                return factory( w );
            };

    } else {
        factory( global );
    }

}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {