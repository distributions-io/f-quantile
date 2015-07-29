'use strict';

// FUNCTIONS //


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
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
