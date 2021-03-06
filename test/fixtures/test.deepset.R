options( digits = 16 )
library( jsonlite )


d1 = 23
d2 = 43
probs = seq( 0, 1, 0.01 )
y = qf( probs, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
