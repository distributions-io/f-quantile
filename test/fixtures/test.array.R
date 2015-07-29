options( digits = 16 )
library( jsonlite )


d1 = 1
d2 = 1
probs = seq( 0, 1, 0.01 )
y = qf( probs, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
