# scope-check
scope chek for expressjs

## Usage:

1. ``app.use('/admin', scopeCheck({scopes:['admin','user'], status:401,header:'x-scope'}), external);``
1. ````app.use('/admin', scopeCheck({scope:'admin', status:401,header:'x-scope'}), external);````
