options( digits = 16 )
library( jsonlite )


d1 = 9
d2 = 1
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qf( probs, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
