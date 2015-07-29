'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' );


// PARTIAL //

/**
* FUNCTION: partial( d1, d2 )
*	Partially applies numerator degrees of freedom `d1` and denominator degrees of freedom `d2` and returns a function for evaluating the quantile function for a F distribution.
*
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @returns {Function} quantile function
*/
function partial( d1, d2 ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a F distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		var bVal, x1, x2;
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		bVal = betaincinv( d1 / 2, d2 / 2, p, 1 - p );
		x1 = bVal[ 0 ];
		x2 = bVal[ 1 ];
		return d2 * x1 / ( d1 * x2 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
