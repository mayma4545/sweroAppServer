const seq = require('sequelize')
const fs = require('fs')
const path = require("path")
const database = "defaultdb"
const username ="avnadmin"
const password = "AVNS_tW0fpEGzFi1MdU_aB6Y"
const host = "basuramans-fernandezmayma-c63d.k.aivencloud.com"
const port = 11343

const db = new seq.Sequelize(database,username, password,{
    host:'basuramans-fernandezmayma-c63d.k.aivencloud.com',
    dialect:'mysql',
    port:11343,
    logging:false,
    dialectOptions: {
        ssl: {
          ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUDQRRyTSUhurtc4JhJmc7pAAgPqEwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMTdiODIyOTMtNTQ4Yy00NzllLWI1ODgtYWUwNGU5MDI0
ZjkyIFByb2plY3QgQ0EwHhcNMjQxMDAyMDIzOTQ3WhcNMzQwOTMwMDIzOTQ3WjA6
MTgwNgYDVQQDDC8xN2I4MjI5My01NDhjLTQ3OWUtYjU4OC1hZTA0ZTkwMjRmOTIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJ2ZRhmJ
/RxLpaXxGloYtzL/Z/rNcqTKQv8o4TBgi3cuJCWlnTcq7NlqpLlNw7GzUnobYibe
Yn0Zahda13Z9PehgsMlmNrL9QwPIBWyIoz0vwYxz9RcEyZbla4SGPM6dDS/04So1
ClIJ7mgNBc3SBqbkVaWESHI/dia7+gK+vb2ngANZMj7DZ1qmabDwjR/6OcQNYzRg
WN/yoUsa5siiwTYzpH2COFi9KuYzq72DWtNlM0QoXAa9ucNSsKYfLYfBV2jB3ewI
uaMuvAQRjqvrx9CN6Q3PdGcRGSdLm3v7ggFxrZNRb03cI/N4zFdLhUqHvMv7/B18
BnAzD86rJwUFsXIFbwzSjDwqNTxLInW+2Ok2EEeEgln18uiDVCjTlKvCXBU8kb/6
eKEOhUos4DRaSUlvDRlKYFN5JXCIEf4gFrPEMFrwjA7izW5udX5IAhYDXe0YUtkC
BzNhK/0FJowT5gLR3QVWCEOK0Ssa+kQQgh7vjNSQ6b3HLI23DxYErJHAjQIDAQAB
oz8wPTAdBgNVHQ4EFgQUq/OpXiG8rpRpgzfcm1xNglrZsogwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAIQlLfbRMlfYBfuV
WKriMaNwKpowokpFft6B6B3uqAnNlxivz9IWIwKbz5hXVdDCnA/WD6gaxyfRvwzl
ugKLS6phHMEu1+j7xcyH1j49BE8Vo58q4Hf7c/DfS7WKx6taRKBxd+W8JjCMpU5b
3tPAhQHU3eQgxnnjsvcZBQw8GbZ6P4wmF1HsodL+GsgI+A+HTDXyLjs/9v8UJuuC
6yn8mW4Rzw9J2gxqjKXvGr13lRYQSF0fi+KpTM4nvcSA6Z62q7iiZu3bHjl+41MR
5N0mHnbfzqqVIELUK9wZNVYnRljfnoyMBTE2+zd3xXHJidgABnR0fiDsZSFN8w4v
FDo8Lyprh07adwew7NfjS9pvmJI+Eh9byAerUpSt65NA+o1jAsLTRyGsiC7RO5f5
h6GuNvA9n2rnZefA4PtlxnrdfEg912bcRZIiCoIXge+NgKJoDcjhWa36kWc6U1bp
SF+7N4SgwqRxsCuUNseAOgCX9Yw6Td6GOrfckLHaFWKtltVmhw==
-----END CERTIFICATE-----`
        }
      }
})
module.exports = db