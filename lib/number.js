'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' );


// QUANTILE //

/**
* FUNCTION: quantile( p, d1, d2 )
*	Evaluates the quantile function for a F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @returns {Number} evaluated quantile function
*/
function quantile( p, d1, d2 ) {
	var bVal, x1, x2;
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	bVal = betaincinv( d1 / 2, d2 / 2, p, 1 - p );
	x1 = bVal[ 0 ];
	x2 = bVal[ 1 ];
	return d2 * x1 / ( d1 * x2 );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
